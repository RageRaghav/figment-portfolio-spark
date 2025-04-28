import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
export const Contact = () => {
  return <section id="contact" className="py-20 px-6 gradient-bg">
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
            
            <Card className="p-6 bg-background/20 backdrop-blur-lg border-white/10">
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">jindalraghav2112@gmail.com</p>
                  <p className="font-medium">jindal.raghav05@gmail.com</p>
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
                  <p className="font-medium">+91 9999999999</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-background/20 backdrop-blur-lg border-white/10">
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="font-medium">Ghaziabad, Uttar Pradesh, India</p>
                </div>
              </div>
            </Card>
            
            <div className="pt-6">
              <h3 className="text-xl mb-4">I'm interested in...</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-background/20 backdrop-blur-lg rounded-full text-sm">
                  Frontend Development
                </span>
                <span className="px-4 py-2 bg-background/20 backdrop-blur-lg rounded-full text-sm">
                  UI/UX Design
                </span>
                <span className="px-4 py-2 bg-background/20 backdrop-blur-lg rounded-full text-sm">
                  App Development
                </span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="p-8 bg-background/20 backdrop-blur-lg border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-white/80">Your Name</label>
                    <input type="text" id="name" placeholder="John Doe" className="w-full p-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary/40 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-white/80">Your Email</label>
                    <input type="email" id="email" placeholder="john@example.com" className="w-full p-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary/40 outline-none" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-white/80">Subject</label>
                  <input type="text" id="subject" placeholder="Project Inquiry" className="w-full p-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary/40 outline-none" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-white/80">Your Message</label>
                  <textarea id="message" placeholder="Hello Raghav, I'd like to discuss a project..." rows={5} className="w-full p-3 rounded-lg bg-background/50 border border-white/10 focus:border-primary/40 outline-none resize-none"></textarea>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/80 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};