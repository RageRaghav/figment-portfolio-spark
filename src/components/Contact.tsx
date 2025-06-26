
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-white/80 max-w-2xl">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 bg-background/20 backdrop-blur-lg border-white/10">
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-lg bg-primary/20 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-medium truncate">jindalraghav2112@gmail.com</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-background/20 backdrop-blur-lg border-white/10">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Phone</p>
                    <p className="font-medium">+91 9560397344</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-background/20 backdrop-blur-lg border-white/10">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-lg bg-primary/20 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Location</p>
                    <p className="font-medium">Ghaziabad, Uttar Pradesh, India</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-background/20 backdrop-blur-lg border-white/10">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/rjindal2112/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                      rjindal2112
                    </a>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl mb-4">I'm interested in...</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-background/20 backdrop-blur-lg rounded-full text-sm">Web Development</span>
                <span className="px-4 py-2 bg-background/20 backdrop-blur-lg rounded-full text-sm">
                  App Development
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="p-8 bg-background/20 backdrop-blur-lg border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-white/80">Your Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-white/10 focus:border-primary/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-white/80">Your Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-white/10 focus:border-primary/40"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-white/80">Subject</label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-background/50 border-white/10 focus:border-primary/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-white/80">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello Raghav, I'd like to discuss a project..."
                    rows={5}
                    required
                    className="bg-background/50 border-white/10 focus:border-primary/40 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  variant="gradient" 
                  className="w-full rounded-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
