import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, lang } = body;

    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email || ""))) {
      return NextResponse.json({ success: false, error: "invalid_input" }, { status: 400 });
    }

    const appsScriptUrl = process.env.APPS_SCRIPT_LEAD_URL;
    if (!appsScriptUrl) {
      return NextResponse.json({ success: false, error: "missing_apps_script_url" }, { status: 500 });
    }

    const r = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        lang: lang === "en" ? "en" : "fi",
        secret: process.env.LEAD_SHARED_SECRET,
        source: "ilmaisopas",
        ua: req.headers.get("user-agent") || ""
      }),
    });

    const data = await r.json().catch(() => ({ success: false, error: "bad_upstream" }));
    if (!data.success) {
      return NextResponse.json({ success: false, error: data.error || "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false, error: "server_error" }, { status: 500 });
  }
}
