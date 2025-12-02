import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLanguage } from "@/lib/i18n";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Services from "@/pages/Services";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function SEO() {
  const { t, language } = useLanguage();
  const [location] = useLocation();

  useEffect(() => {
    let title = "";
    let description = "";

    switch (location) {
      case "/":
        title = t.hero.title + " | BiBi Consulting";
        description = t.hero.subtitle;
        break;
      case "/services":
        title = t.services.title + " | BiBi Consulting";
        description = t.services.accounting.desc;
        break;
      case "/about":
        title = t.about.title + " | BiBi Consulting";
        description = t.about.desc;
        break;
      case "/contact":
        title = t.contact.title + " | BiBi Consulting";
        description = t.contact.desc;
        break;
      default:
        title = "BiBi Consulting";
    }

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.documentElement.lang = language;
  }, [location, t, language]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <SEO />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
