import { Layout } from "@/components/Layout";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="bg-[#F8F8F8] min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-20 container text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-primary mb-8"
          >
            {t.about.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            {t.about.desc}
          </motion.p>
        </section>

        {/* Image Section */}
        <section className="container pb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <img 
              src="/images/partnership_about.png" 
              alt="BiBi Consulting Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
              <h2 className="font-serif text-3xl md:text-4xl mb-4">{t.about.subtitle}</h2>
              <p className="text-white/90 text-lg max-w-2xl">
                Combining traditional financial wisdom with modern digital innovation.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Values Grid */}
        <section className="container pb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t.about.values).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-secondary/30 flex items-center justify-center text-primary mb-6 font-serif text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">{value}</h3>
                <div className="h-1 w-12 bg-secondary rounded-full" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
