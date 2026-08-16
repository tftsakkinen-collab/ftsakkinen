import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";

export async function GET() {
  return NextResponse.redirect(SITE_CONFIG.googleReviewUrl, 307);
}
