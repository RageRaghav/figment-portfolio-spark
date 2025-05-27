
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Python Essentials 2",
      provider: "Cisco Networking Academy & Python Institute",
      date: "January 12, 2024",
      image: "/lovable-uploads/e20fce78-3f84-410b-9f39-fa9f040f48b2.png",
      description: "Student level credential for completing Python Essentials 2 course"
    },
    {
      id: 2,
      title: "Programming in C",
      provider: "Infosys Springboard",
      date: "July 15, 2023",
      image: "/lovable-uploads/ba67f28e-50dc-47e7-9853-0823ca609564.png",
      description: "Course completion certificate for Programming in C"
    },
    {
      id: 3,
      title: "Front End Development - CSS",
      provider: "Great Learning Academy",
      date: "June 2023",
      image: "/lovable-uploads/0180d201-30af-4d62-8e46-897610f931a8.png",
      description: "Certificate for successfully completing CSS course"
    },
    {
      id: 4,
      title: "Front End Development - HTML",
      provider: "Great Learning Academy", 
      date: "January 2023",
      image: "/lovable-uploads/842a10b2-86e6-4b39-a381-93f788ebbc16.png",
      description: "Certificate for successfully completing HTML course"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-white/80 max-w-2xl">
            Professional certifications and achievements that showcase my continuous learning journey.
          </p>
        </div>

        <div className="relative">
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificates.map((certificate) => (
                <CarouselItem key={certificate.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden bg-card border-white/10 flex flex-col card-hover h-full">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={certificate.image} 
                        alt={certificate.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold mb-2">{certificate.title}</h3>
                      <p className="text-primary text-sm mb-2">{certificate.provider}</p>
                      <p className="text-white/60 text-sm mb-3">{certificate.date}</p>
                      <p className="text-sm text-white/70 flex-grow">{certificate.description}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
