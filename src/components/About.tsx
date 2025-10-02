import { Building2, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Kenapa Bisnis Minimarket?
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Karena kami percaya setiap orang berhak punya peluang usaha ritel yang menguntungkan.
            </p>
            <p>
              Dengan pengalaman lebih dari 10 tahun, tim kami telah membantu UMKM, koperasi, hingga BUMDes 
              membuka minimarket modern yang berdaya saing tinggi.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-hover transition-all text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">500+ Toko</h3>
            <p className="text-muted-foreground">Berhasil kami dampingi</p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-hover transition-all text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">10+ Tahun</h3>
            <p className="text-muted-foreground">Pengalaman di industri ritel</p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-card hover:shadow-hover transition-all text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">1000+ Mitra</h3>
            <p className="text-muted-foreground">Percaya pada sistem kami</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
