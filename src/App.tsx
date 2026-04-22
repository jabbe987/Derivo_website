import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ComponentType, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { getInitialLanguage, isLanguage, persistLanguagePreference, type Language } from "@/lib/i18n";
import { resolveSitePage, type SitePage } from "@/lib/routes";

const queryClient = new QueryClient();

const pageComponents: Record<SitePage, ComponentType<{ language: Language }>> = {
  home: Index,
  about: AboutPage,
  contact: ContactPage,
};

const LanguageRedirect = () => {
  const language = getInitialLanguage();

  return <Navigate to={`/${language}`} replace />;
};

const LanguagePage = ({ language, page }: { language: Language; page: SitePage }) => {
  const location = useLocation();
  const PageComponent = pageComponents[page];

  useEffect(() => {
    persistLanguagePreference(language);
  }, [language]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.hash, location.pathname]);

  return <PageComponent language={language} />;
};

const ParamLanguagePage = () => {
  const { language, pageSlug } = useParams();

  if (!isLanguage(language)) {
    return <NotFound />;
  }

  const page = resolveSitePage(language, pageSlug);

  if (!page) {
    return <NotFound />;
  }

  return <LanguagePage language={language} page={page} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<LanguageRedirect />} />
          <Route path="/:language" element={<ParamLanguagePage />} />
          <Route path="/:language/:pageSlug" element={<ParamLanguagePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
