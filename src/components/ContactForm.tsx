import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang wajib diisi",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      // Create WhatsApp message
      const waMessage = `Halo, saya ${formData.name}%0A%0AEmail: ${formData.email}%0ANo. HP: ${formData.phone}%0A%0APesan:%0A${formData.message}`;
      const waUrl = `https://wa.me/6281234567890?text=${waMessage}`;
      
      window.open(waUrl, "_blank");
      
      toast({
        title: "Terima kasih!",
        description: "Kami akan segera menghubungi Anda melalui WhatsApp.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Siap Memulai Minimarket Anda?
            </h2>
            <p className="text-lg text-muted-foreground">
              Ceritakan rencana Anda, kami bantu wujudkan dari sekarang.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-card space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Nomor WhatsApp *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="08123456789"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Pesan *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ceritakan rencana bisnis minimarket Anda..."
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Mengirim..." : "Saya Mau Konsultasi Gratis"}
              <Send className="ml-2" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
