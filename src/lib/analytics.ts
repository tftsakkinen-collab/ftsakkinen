"use client";

/**
 * Lightweight, privacy-first event tracking utility for FT Säkkinen.
 * Supports Google Analytics (gtag), Plausible, or console debug mode.
 */
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;

  // Development debug logging
  if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics Track] ${eventName}:`, params);
  }

  // Google Analytics (gtag.js) support
  if (typeof (window as unknown as { gtag?: Function }).gtag === "function") {
    (window as unknown as { gtag: Function }).gtag("event", eventName, params);
  }

  // Plausible Analytics support
  if (typeof (window as unknown as { plausible?: Function }).plausible === "function") {
    (window as unknown as { plausible: Function }).plausible(eventName, { props: params });
  }
}
