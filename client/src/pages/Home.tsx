import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, CheckCircle2, Layers, LineChart } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { t } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F8F8F8]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#F5F5DC]/30 -skew-x-12 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#0D47A1]/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeIn}
              className="font-serif text-5xl md:text-7xl font-medium leading-[1.1] text-primary tracking-tight"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base rounded-full">
                  {t.hero.cta}
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full border-primary/20 hover:bg-primary/5 text-primary">
                  {t.nav.services}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img 
                src="/images/hero_background.png" 
                alt="BiBi Consulting Strategy" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </div>
            
            {/* Floating Card Element */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-border/50"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="font-serif font-medium text-lg">Trusted Partner</p>
                  <p className="text-xs text-muted-foreground">Estonian Business Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-6">{t.services.title}</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link href="/services">
              <a className="group block h-full">
                <Card className="h-full border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-[#F8F8F8]">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-white border border-border/50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <LineChart size={24} />
                    </div>
                    <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">
                      {t.services.accounting.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t.services.accounting.desc}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                      {t.services.learnMore} <ArrowRight size={16} className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>

            {/* Service 2 */}
            <Link href="/services">
              <a className="group block h-full">
                <Card className="h-full border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-[#F8F8F8]">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-white border border-border/50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Layers size={24} />
                    </div>
                    <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">
                      {t.services.it.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t.services.it.desc}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                      {t.services.learnMore} <ArrowRight size={16} className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>

            {/* Service 3 */}
            <Link href="/services">
              <a className="group block h-full">
                <Card className="h-full border-border/40 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-[#F8F8F8]">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-white border border-border/50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <BarChart3 size={24} />
                    </div>
                    <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">
                      {t.services.business.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t.services.business.desc}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                      {t.services.learnMore} <ArrowRight size={16} className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-[#F5F5DC]/30 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl max-w-md mx-auto">
                <img 
                  src="/images/partnership_about.png" 
                  alt="BiBi Consulting Partnership" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute bottom-10 left-0 w-32 h-32 bg-secondary rounded-full blur-xl mix-blend-multiply" />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl text-primary">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.desc}
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                {Object.values(t.about.values).map((value) => (
                  <div key={value} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                  {t.services.learnMore}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero_background.png')] bg-cover bg-center mix-blend-overlay" />
        </div>
        
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mx-auto">
            {t.hero.subtitle}
          </h2>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-secondary h-14 px-10 text-lg rounded-full font-medium shadow-xl hover:shadow-2xl transition-all">
                {t.hero.cta}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
