import { Search, PenTool, Users, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Survei & Analisis",
    description: "Kami survei & hitung kebutuhan modal Anda",
  },
  {
    icon: PenTool,
    title: "Desain Toko",
    description: "Rancang desain toko & tata letak terbaik",
  },
  {
    icon: Users,
    title: "Rekrutmen & Pelatihan",
    description: "Rekrut & latih karyawan siap pakai",
  },
  {
    icon: Rocket,
    title: "Grand Opening",
    description: "Grand Opening minimarket Anda",
  },
  {
    icon: TrendingUp,
    title: "Mentoring",
    description: "Mentoring berkala agar usaha terus tumbuh",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Cara Kerja yang Terbukti
          </h2>
          <p className="text-lg text-accent font-semibold">
            Anda tinggal fokus jualan, sisanya kami urus.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-card mb-4 md:mb-0">
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Content Card */}
                <div
                  className={`md:w-5/12 bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-all ${
                    index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accent font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
