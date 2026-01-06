export type NavItem = { label: string; href: string };

export const site = {
  name: "NYONKA — Mining Cooperative",
  shortName: "NYONKA",
  description:
    "A lawful, accountable cooperative framework for lawful mineral development, community participation, and shared economic growth—correcting structural exclusion by enabling communities to participate lawfully in mineral development.",

  contact: {
    email: "nyonkaminingcooperative@gmail.com",
    phone: "0762076869",
    location: "Zambia",
  },

  cta: {
    label: "Partner With Us",
    href: "/contact",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Statement", href: "/statement" },
    { label: "Operations", href: "/operations" },
    { label: "Compliance", href: "/compliance" },
    { label: "Impact", href: "/community-impact" },
    { label: "Membership", href: "/membership" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
};

// Backwards-compatible named export your SeoHead currently expects
export const SITE = site;

// Default export (so `import site from ...` works too)
export default site;
