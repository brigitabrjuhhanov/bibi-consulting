import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'et' : 'en');
  };

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/40">
      <div className="container flex items-center justify-between h-20">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <img src="/images/bibi_logo.png" alt="BiBi Consulting" className="h-10 w-10 object-contain transition-transform group-hover:scale-105" />
            <span className="font-serif text-xl font-medium tracking-tight text-primary">BiBi Consulting</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href ? "text-primary" : "text-muted-foreground"
              )}>
                {item.label}
              </a>
            </Link>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className="ml-4 font-medium border-primary/20 hover:bg-primary/5 hover:text-primary"
          >
            {t.nav.switchLang}
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a 
                className={cn(
                  "text-lg font-medium py-2 px-4 rounded-md transition-colors",
                  location === item.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Button 
            variant="outline" 
            className="w-full justify-center mt-2"
            onClick={() => {
              toggleLanguage();
              setIsMenuOpen(false);
            }}
          >
            {t.nav.switchLang}
          </Button>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white border-t border-border/40 py-12 mt-auto">
      <div className="container grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src="/images/bibi_logo.png" alt="BiBi Consulting" className="h-8 w-8 object-contain" />
            <span className="font-serif text-lg font-medium text-primary">BiBi Consulting</span>
          </div>
          <p className="text-muted-foreground max-w-xs">
            {t.hero.subtitle}
          </p>
        </div>
        
        <div>
          <h4 className="font-serif font-medium mb-4">{t.nav.contact}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${t.contact.email}`} className="hover:text-primary transition-colors">
                {t.contact.email}
              </a>
            </li>
            <li>Tallinn, Estonia</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif font-medium mb-4">{t.nav.services}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{t.services.accounting.title}</li>
            <li>{t.services.it.title}</li>
            <li>{t.services.business.title}</li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} BiBi Consulting OÜ. {t.footer.rights}
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary/10 selection:text-primary">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
