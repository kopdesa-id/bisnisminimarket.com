import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Siti Nurhaliza",
    role: "Pemilik UMKM",
    content: "Awalnya saya ragu, tapi sekarang omzet toko saya stabil tiap bulan. Dukungan tim Bisnis Minimarket luar biasa.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    role: "Mitra BUMDes",
    content: "Dari garasi rumah, sekarang saya punya toko ritel modern yang jadi pusat belanja warga.",
    rating: 5,
  },
  {
    name: "Dewi Lestari",
    role: "Pengusaha Minimarket",
    content: "Training dan mentoring yang diberikan sangat membantu. Karyawan jadi lebih profesional dan penjualan meningkat drastis.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Apa Kata Mitra Kami?
          </h2>
          <p className="text-lg text-muted-foreground">
            Cerita sukses dari mitra yang telah bergabung bersama kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-hover transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
