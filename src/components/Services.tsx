import { Store, TrendingUp, Package, GraduationCap, Handshake, CreditCard } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Setup Toko Modern",
    description: "Dari survei lokasi hingga grand opening, kami dampingi Anda 100%.",
  },
  {
    icon: TrendingUp,
    title: "Konsultan Manajemen",
    description: "Minimarket Anda macet? Kami bantu reset dan optimasi.",
  },
  {
    icon: Package,
    title: "Perlengkapan Swalayan",
    description: "Rak, kasir, software—semua ready stock, harga bersaing.",
  },
  {
    icon: GraduationCap,
    title: "Workshop & Training Ritel",
    description: "SDM lebih siap, omzet lebih cepat naik.",
  },
  {
    icon: Handshake,
    title: "Kemitraan Minimarket Modern",
    description: "Punya garasi atau ruko kecil? Jadikan minimarket modern tanpa biaya franchise.",
  },
  {
    icon: CreditCard,
    title: "Payment Point & Software Kasir",
    description: "Bayar tagihan, top-up, kasir digital—all in one.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Semua yang Anda Butuhkan Ada di Sini
          </h2>
          <p className="text-lg text-muted-foreground">
            Solusi lengkap untuk memulai dan mengembangkan bisnis minimarket Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
