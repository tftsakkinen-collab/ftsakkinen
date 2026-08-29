# Lead Automation Architecture & Integration Guide (FT Säkkinen & PT Sakkinen)

This document describes the 100% transactional lead capture and email automation pipeline implemented for **ftsakkinen.com** (FI) and **ptsakkinen.com** (EN).

---

## 1. System Architecture

```
[ User Form ] ── (POST JSON: name, email, lang) ──> [ Next.js Proxy /api/lead ]
                                                            │
                                         (Validates Input + Secret)
                                                            │
                                                            ▼
                                        [ Google Apps Script Web App ]
                                           (doPost in Code.gs)
                                                   │
                            ┌──────────────────────┴──────────────────────┐
                            ▼                                             ▼
             [ Google Sheet: "Liidit" ]                  [ MailApp Transactional Email ]
              (Appends timestamp, name,                    (Sends Drive folder link +
               email, lang, source, UA)                     4 video links to user)
```

---

## 2. Environment Variables (`.env.local`)

Both repositories configure the following environment variables (defined in `.env.example`):

```env
# Google Apps Script Web App Deployment Exec URL
APPS_SCRIPT_LEAD_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec

# Shared Secret string matching SHARED_SECRET in Apps Script Script Properties
LEAD_SHARED_SECRET=your-long-random-shared-secret-here

# Public Google Drive Folder Link for Guide PDFs ("Tietopaketit jakoon")
NEXT_PUBLIC_GUIDE_FOLDER_URL=https://drive.google.com/drive/folders/YOUR_FOLDER_ID
```

---

## 3. Google Apps Script `Code.gs` Implementation

```javascript
function doPost(e){
  var out = ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON);
  try{
    var p = JSON.parse(e.postData.contents || "{}");
    var props = PropertiesService.getScriptProperties();
    if (p.secret !== props.getProperty("SHARED_SECRET")) {
      return out.setContent(JSON.stringify({ success:false, error:"unauthorized" }));
    }
    var name  = String(p.name  || "").trim().slice(0,120);
    var email = String(p.email || "").trim().toLowerCase();
    var lang  = (p.lang === "en") ? "en" : "fi";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return out.setContent(JSON.stringify({ success:false, error:"invalid_email" }));
    }
    // a) Save to Google Sheet
    var sh = SpreadsheetApp.openById(props.getProperty("SHEET_ID")).getSheetByName("Liidit");
    sh.appendRow([ new Date(), name, email, lang, (p.source||""), (p.ua||"") ]);

    // b) Send Instant Transactional Email
    var folder = props.getProperty("GUIDE_FOLDER_URL");
    var videos = JSON.parse(props.getProperty(lang === "en" ? "VIDEOS_EN" : "VIDEOS_FI")); // [{title,url},...]
    var subject = lang === "en"
      ? "Your free rehab guides + 4 special videos"
      : "Ilmaiset kipuoppaat + 4 erikoisvideota";
    var vid = videos.map(function(v){ return '<li><a href="'+v.url+'">'+v.title+'</a></li>'; }).join("");
    var html = (lang === "en"
      ? '<p>Hi '+name+',</p><p>Here are your materials:</p>'
      : '<p>Hei '+name+',</p><p>Tässä materiaalisi:</p>')
      + '<p><a href="'+folder+'">'+(lang==="en"?"Open the guide folder (Google Drive)":"Avaa oppaiden kansio (Google Drive)")+'</a></p>'
      + '<ul>'+vid+'</ul>';

    MailApp.sendEmail({ to: email, subject: subject, htmlBody: html, name: "FT Säkkinen" });
    return out.setContent(JSON.stringify({ success:true }));
  }catch(err){
    return out.setContent(JSON.stringify({ success:false, error:String(err) }));
  }
}
```

---

## 4. Google Apps Script Configuration & Deployment

### Script Properties
Set the following properties in Apps Script **Project Settings > Script Properties**:

1. `SHARED_SECRET`: Long random token (must match `LEAD_SHARED_SECRET` in `.env.local`).
2. `SHEET_ID`: Spreadsheet ID of the Google Sheet containing a tab named `"Liidit"`.
3. `GUIDE_FOLDER_URL`: Public Google Drive URL for the "Tietopaketit jakoon" folder.
4. `VIDEOS_FI`: `[{"title":"Leukanivelen Ensiapuopas","url":"https://www.youtube.com/watch?v=P1lZdpluD64"},{"title":"Vaikean Vamman Tutkimus","url":"https://www.youtube.com/watch?v=exfFQ0iRLiI"},{"title":"Hermoston Aktivoiminen","url":"https://www.youtube.com/watch?v=ZFTSdUdEkC0"},{"title":"Yläniskan Venyttely","url":"https://www.youtube.com/watch?v=JyducxjS1b8"}]`
5. `VIDEOS_EN`: `[{"title":"TMJ Emergency Rehab Guide","url":"https://www.youtube.com/watch?v=P1lZdpluD64"},{"title":"Complex Injury Assessment","url":"https://www.youtube.com/watch?v=exfFQ0iRLiI"},{"title":"Nervous System Reset","url":"https://www.youtube.com/watch?v=ZFTSdUdEkC0"},{"title":"Upper Neck Mobility","url":"https://www.youtube.com/watch?v=JyducxjS1b8"}]`

### Deployment Steps
1. Click **Deploy > New deployment**.
2. Select **Web app**.
3. **Execute as**: *Me (your account)*.
4. **Who has access**: *Anyone*.
5. Copy the generated Web App `/exec` URL into `APPS_SCRIPT_LEAD_URL` in `.env.local`.

---

## 5. Secret Rotation Procedure
If `LEAD_SHARED_SECRET` needs to be updated:
1. Update `SHARED_SECRET` in Apps Script **Script Properties**.
2. Update `LEAD_SHARED_SECRET` in `.env.local` on both server environments.
3. Redeploy Next.js web application.

---

## 6. Verification & Test Procedure (Section 1E)

1. **Valid Submission Test**:
   - Submit form with a real email.
   - Confirm row appears in Google Sheet tab `"Liidit"`.
   - Confirm email arrives in inbox.
   - Open Drive folder link in Incognito browser window (verify accessible without login).
2. **Failure Simulation Test**:
   - Set invalid `APPS_SCRIPT_LEAD_URL` in `.env.local`.
   - Submit form -> verify form displays explicit Error Box with support email, NOT the Success view.
3. **Invalid Email Test**:
   - Submit form with `test@invalid` -> HTTP 400 + inline error message displayed.
