import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-minimarket.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20bisnis%20minimarket", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Punya Impian Punya Minimarket Sendiri? 
            <span className="block mt-2 text-accent">Mulai Sekarang Bisa Tanpa Ribet!</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Kami bantu Anda membangun minimarket modern dari nol—tanpa royalty, tanpa biaya franchise, dengan modal terjangkau.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              variant="hero"
              onClick={handleWhatsAppClick}
              className="text-base md:text-lg px-8 py-6"
            >
              Mulai Konsultasi Gratis
              <MessageCircle className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
