
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Let's discuss<br />on something cool together</h2>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl mb-4">I'm interested in...</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20">
                Ecommerce Website
              </Button>
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20">
                Saas Website
              </Button>
              <Button variant="secondary" className="bg-white/10 hover:bg-white/20">
                Portfolio
              </Button>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 outline-none"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 outline-none"
            ></textarea>
            <Button className="w-full bg-white/10 hover:bg-white/20">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
