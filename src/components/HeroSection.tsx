
import { useRef } from "react";
import { Phone, MessageCircle, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  const container = useRef(null);
  const phoneNumber = "9986964849";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hi! I'm interested in your appliance services.`;
  const callLink = `tel:+91${phoneNumber}`;

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Floating Animation for Technician
    gsap.to(".hero-image", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    tl.from(".hero-badge", {
      y: -20,
      opacity: 0,
      duration: 0.6,
    })
      .from(".hero-text", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.2)"
      }, "-=0.2")
      .from(".hero-btn", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
      }, "-=0.4")
      .from(".hero-review", {
        x: -20,
        opacity: 0,
        duration: 0.6,
      }, "-=0.4")
      .from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)",
      }, "-=0.8")
      .from(".hero-float", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6");

  }, { scope: container });

  return (
    <section ref={container} className="relative overflow-hidden bg-slate-50 pt-24 pb-12 lg:pt-32 lg:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left z-10">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full text-sm font-semibold text-slate-700 mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available Now for Instant Service
            </div>

            <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Expert Appliance <br className="hidden lg:block" />
              <span className="text-primary bg-primary/5 px-2 rounded-lg decoration-primary/30 underline decoration-4 underline-offset-4">Repair & Service</span>
            </h1>

            <p className="hero-text text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Trusted by 5,000+ Kolar families. We fix water purifiers, solar heaters, UPS barriers, and more. Fast, reliable, and affordable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="hero-btn bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-lg shadow-primary/25 rounded-xl transition-all hover:-translate-y-1"
                asChild
              >
                <a href={callLink}>
                  <Phone className="w-5 h-5 mr-2" />
                  Book Repair Now
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="hero-btn bg-white border-slate-200 text-slate-700 hover:bg-slate-50 text-lg px-8 py-6 rounded-xl transition-all hover:-translate-y-1"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Reviews */}
            <div className="hero-review mt-10 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">
                    U{i}
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-600">
                <div className="flex text-yellow-500 mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                Rated 4.9/5 by Google
              </div>
            </div>
          </div>

          {/* Hero Image / Visual */}
          <div className="relative z-0 hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="hero-image relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200 aspect-square flex items-center justify-center">
              <img
                src="/technician-hero.png"
                alt="Expert Appliance Technician"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="hero-float absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-800">100% Guaranteed</p>
                <p className="text-xs text-slate-500">Service Warranty Included</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
