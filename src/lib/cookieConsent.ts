/**
 * cookieConsent.ts
 *
 * Utility for reading and writing cookie consent preferences.
 * Stores choices in a single functional cookie (valid for 12 months).
 * No personal data is stored — just "accepted", "rejected", or specific categories.
 */

export interface ConsentPreferences {
  functional: true;        // always true, cannot be disabled
  analytical: boolean;
  marketing: boolean;
  timestamp: number;       // when consent was given (for audit trail)
}

const COOKIE_NAME = "smlnet_consent";
const COOKIE_DAYS = 365;   // ~12 months

/** Read current consent from cookie, returns null if not set yet */
export function getConsent(): ConsentPreferences | null {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));

  if (!match) return null;

  try {
    return JSON.parse(decodeURIComponent(match.split("=")[1]));
  } catch {
    return null;
  }
}

/** Save consent preferences as a cookie */
export function setConsent(prefs: Omit<ConsentPreferences, "functional" | "timestamp">) {
  const value: ConsentPreferences = {
    functional: true,
    analytical: prefs.analytical,
    marketing: prefs.marketing,
    timestamp: Date.now(),
  };

  const expires = new Date();
  expires.setDate(expires.getDate() + COOKIE_DAYS);

  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    JSON.stringify(value)
  )}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;

  return value;
}

/** Check if a specific category has been consented to */
export function hasConsent(category: "analytical" | "marketing"): boolean {
  const consent = getConsent();
  if (!consent) return false;
  return consent[category];
}
