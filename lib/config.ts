// Centralized site configuration.
// Update these values in ONE place — every component reads from here.
//
// Fields left `null`/empty (email, hours, social) have no verified value yet.
// They are intentionally omitted from the UI rather than filled with
// placeholder/fake data — see the components that read them for how they
// render when unset.

export const siteConfig = {
  name: "Focus Fitness",
  tagline: "Stronger Than Yesterday",

  // Short, concise location wording used in headers/footers/captions.
  location: "New Sangavi, Pune, Maharashtra",
  city: "Pune, Maharashtra",

  // Full verified street address, used on the Contact page and in the
  // footer's detailed contact block.
  fullAddress:
    "Sr.No 71/1+2, 39, Main Road, Kranti Chowk, Kirti Nagar, New Sangavi, Pimpri-Chinchwad, Maharashtra 411061",

  url: "http://localhost:3000",

  // Verified WhatsApp business number (country code + number, no + or spaces).
  whatsappNumber: "918149411446",
  whatsappDefaultMessage:
    "Hi Focus Fitness! I'd like to know more about membership and a free trial.",

  // Verified phone numbers.
  phone: "8149411446",
  phoneAlt: "7020011441",

  // No verified email address currently exists — intentionally omitted
  // rather than invented. Set this once a real address is confirmed.
  email: null as string | null,

  // Opening hours have not been confirmed yet — intentionally omitted
  // rather than invented. Add entries here once confirmed.
  hours: [] as { days: string; time: string }[],

  // Real social URLs have not been confirmed yet — intentionally omitted
  // rather than invented generic links. Set a value once confirmed.
  social: {
    instagram: "https://www.instagram.com/the_focusfitness_/",
    facebook: null as string | null,
    youtube: null as string | null,
  },
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
