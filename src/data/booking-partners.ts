export interface BookingPartner {
  id: string;
  name: string;
  category: string;
  description: string;
  bookingUrl: string;
  badge?: string;
}

export const BOOKING_DISCLAIMER_FI = "Ajanvaraus tapahtuu vain alla olevien kumppaneiden kautta. Puhelimitse emme ota ajanvarauksia.";
export const BOOKING_DISCLAIMER_EN = "Appointments are booked only through the partners below. We do not take bookings by phone.";

export const BOOKING_PARTNERS_FI: BookingPartner[] = [
  {
    id: "terveystalo",
    name: "Terveystalo",
    category: "Lääkäritalot & Fysioterapia",
    description: "Varaa vastaanottoaika Janne Säkkiselle Terveystalon verkkoajanvarauksesta.",
    bookingUrl: "https://www.terveystalo.com/fi/asiantuntijat/janne-sakkinen",
    badge: "Virallinen Kumppani"
  },
  {
    id: "norre",
    name: "Norre Työterveys",
    category: "Työterveys & Erikoisfysioterapia",
    description: "Varaa aika työterveyden tai fysioterapian vastaanotolle Norre Työterveyden kautta.",
    bookingUrl: "https://norre.fi",
    badge: "Työterveys"
  },
  {
    id: "hammasvahti",
    name: "Hammasvahti",
    category: "Purentaelimistö & TMD",
    description: "Purentaelimistön fysioterapian ja TMD-hoidon vastaanotot Hammasvahdissa.",
    bookingUrl: "https://hammasvahti.fi",
    badge: "TMD & Purenta"
  }
];

export const BOOKING_PARTNERS_EN: BookingPartner[] = [
  {
    id: "terveystalo",
    name: "Terveystalo",
    category: "Medical Center & Physical Therapy",
    description: "Book a clinical appointment with Janne Sakkinen via Terveystalo online booking.",
    bookingUrl: "https://www.terveystalo.com/fi/asiantuntijat/janne-sakkinen",
    badge: "Official Partner"
  },
  {
    id: "norre",
    name: "Norre Occupational Health",
    category: "Occupational Health & Physical Therapy",
    description: "Book an appointment through Norre Occupational Health.",
    bookingUrl: "https://norre.fi",
    badge: "Occupational Health"
  },
  {
    id: "hammasvahti",
    name: "Hammasvahti Clinic",
    category: "TMJ & TMD Specialist Clinic",
    description: "TMJ disorder and jaw physical therapy consultations at Hammasvahti.",
    bookingUrl: "https://hammasvahti.fi",
    badge: "TMJ / TMD Care"
  }
];
