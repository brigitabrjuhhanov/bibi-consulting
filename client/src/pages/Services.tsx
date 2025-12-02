import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Check, Layers, LineChart } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "accounting",
      icon: LineChart,
      title: t.services.accounting.title,
      desc: t.services.accounting.desc,
      details: t.services.accounting.details,
      image: "/images/accounting_service.png",
      features: [
        "Daily bookkeeping & VAT reporting",
        "Annual reports & Income statements",
        "Payroll management & Compliance",
        "Financial health checks"
      ]
    },
    {
      id: "it",
      icon: Layers,
      title: t.services.it.title,
      desc: t.services.it.desc,
      details: t.services.it.details,
      image: "/images/it_consulting_service.png",
      features: [
        "Product strategy & Roadmap",
        "MVP development support",
        "AI readiness consulting",
        "Workflow automation"
      ]
    },
    {
      id: "business",
      icon: BarChart3,
      title: t.services.business.title,
      desc: t.services.business.desc,
      details: t.services.business.details,
      image: "/images/business_operations_service.png",
      features: [
        "Process redesign & Optimization",
        "Operational structure improvements",
        "Change management",
        "Team leadership support"
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-[#F8F8F8]">
        {/* Header */}
        <section className="pt-32 pb-20 container text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl text-primary mb-6"
          >
            {t.services.title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-24 bg-secondary mx-auto rounded-full" 
          />
        </section>

        {/* Services List */}
        <div className="container pb-32 space-y-32">
          {services.map((service, index) => (
            <motion.section 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>
              </div>

              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="h-16 w-16 rounded-xl bg-white border border-border flex items-center justify-center text-primary shadow-sm">
                  <service.icon size={32} />
                </div>
                
                <h2 className="font-serif text-4xl text-primary">{service.title}</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
                <p className="text-muted-foreground">
                  {service.details}
                </p>

                <ul className="space-y-4 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <div className="h-6 w-6 rounded-full bg-secondary/50 flex items-center justify-center text-primary shrink-0">
                        <Check size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                      {t.hero.cta} <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
