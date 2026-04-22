import type { Language } from "@/lib/i18n";

export type SitePage = "home" | "about" | "contact";

const pageSlugs: Record<Language, Record<SitePage, string>> = {
  sv: {
    home: "",
    about: "om-oss",
    contact: "kontakta-oss",
  },
  en: {
    home: "",
    about: "about-us",
    contact: "contact-us",
  },
};

export const getPagePath = (language: Language, page: SitePage) => {
  const slug = pageSlugs[language][page];

  return slug ? `/${language}/${slug}` : `/${language}`;
};

export const resolveSitePage = (
  language: Language,
  pageSlug?: string,
): SitePage | null => {
  if (!pageSlug) {
    return "home";
  }

  const matchingPage = (Object.entries(pageSlugs[language]) as Array<[SitePage, string]>)
    .find(([, slug]) => slug === pageSlug);

  return matchingPage?.[0] ?? null;
};
