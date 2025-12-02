import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully!");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="bg-[#F8F8F8] min-h-screen pt-32 pb-24">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">
                  {t.contact.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t.contact.desc}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Email</h3>
                    <a href={`mailto:${t.contact.email}`} className="text-lg text-muted-foreground hover:text-primary transition-colors">
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="h-12 w-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">Location</h3>
                    <p className="text-lg text-muted-foreground">
                      Tallinn, Estonia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5 border border-border/50"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                    {t.contact.form.name}
                  </label>
                  <Input id="name" required className="h-12 bg-muted/30 border-border/50 focus:bg-white transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    {t.contact.form.email}
                  </label>
                  <Input id="email" type="email" required className="h-12 bg-muted/30 border-border/50 focus:bg-white transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    {t.contact.form.message}
                  </label>
                  <Textarea id="message" required className="min-h-[150px] bg-muted/30 border-border/50 focus:bg-white transition-colors resize-none" />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-full text-lg bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? "Sending..." : t.contact.form.submit}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
