import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Tanpa royalty bulanan",
  "Tanpa franchise fee",
  "Modal mulai dari ukuran garasi",
  "Pendampingan dari awal hingga operasional",
  "Software kasir modern gratis",
  "Pelatihan SDM komprehensif",
];

const Partnership = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 gradient-hero text-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minimarket Modern Mulai dari Rumah Anda
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Dengan modal mulai dari ukuran garasi, Anda bisa punya minimarket modern yang siap bersaing.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xl font-semibold mb-6">
            Hanya bisnis murni untuk Anda.
          </div>

          <Button 
            size="lg" 
            variant="hero"
            onClick={scrollToContact}
            className="text-base md:text-lg px-8 py-6"
          >
            Saya Tertarik Jadi Mitra
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
