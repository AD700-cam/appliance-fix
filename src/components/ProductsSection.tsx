
import { useRef } from "react";
import { Droplets, Battery, Sun, Camera, Lightbulb, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const products = [
  {
    icon: Droplets,
    name: "Water Purifier",
    description: "Clean & safe drinking water for your family with RO, UV & UF purifiers",
    emoji: "💧",
  },
  {
    icon: Battery,
    name: "UPS Battery",
    description: "Reliable power backup solutions to keep your home running smoothly",
    emoji: "🔋",
  },
  {
    icon: Sun,
    name: "Solar Water Heater",
    description: "Eco-friendly hot water solutions that save energy and money",
    emoji: "☀️",
  },
  {
    icon: Camera,
    name: "CCTV & Security",
    description: "Keep your home and business safe with modern surveillance systems",
    emoji: "📹",
  },
  {
    icon: Lightbulb,
    name: "Jhumars & LED Lights",
    description: "Beautiful lighting to brighten up your home with style",
    emoji: "💡",
  },
  {
    icon: Flame,
    name: "Water Heater Geyser",
    description: "Instant & storage geysers for comfortable hot water all year round",
    emoji: "🚿",
  },
];

const ProductsSection = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Header Animation
    gsap.from(".section-header", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
    });

    // Cards Animation
    gsap.from(".product-card", {
      scrollTrigger: {
        trigger: ".product-grid",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    });
  }, { scope: container });

  return (
    <section ref={container} id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products & Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide quality home appliances with expert installation and after-sales service.
            Everything you need to make your home comfortable and efficient.
          </p>
        </div>

        {/* Products Grid */}
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="product-card group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <product.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      {product.name}
                      <span className="text-xl">{product.emoji}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need something specific? <a href="#contact" className="text-primary font-medium hover:underline">Contact us</a> for custom requirements!
          </p>
        </div>
      </div>

      {/* Service Process - Added to fill "What We Offer" */}
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">How We Work</h3>
            <p className="text-muted-foreground">Simple, transparent, and fast service delivery.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book Service", desc: "Call or book online instantly." },
              { step: "02", title: "Diagnosis", desc: "Expert inspection at your home." },
              { step: "03", title: "Swift Repair", desc: "Genuine parts & skilled work." },
              { step: "04", title: "Warranty", desc: "90-day guarantee on service." }
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="text-5xl font-black text-slate-200 mb-4">{item.step}</div>
                <h4 className="text-lg font-bold mb-2 relative z-10">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default ProductsSection;
