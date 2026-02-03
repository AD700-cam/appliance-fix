
import { useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const brands = [
  "Samsung",
  "LG",
  "Whirlpool",
  "Godrej",
  "Bosch",
  "Haier",
  "IFB",
  "Voltas",
];

const BrandsSection = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Infinite Marquee Animation
    const scrollerContent = document.querySelector(".scroller-inner");

    if (scrollerContent) {
      // Clone items for infinite loop
      const scrollerContentArray = Array.from(scrollerContent.children);
      scrollerContentArray.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerContent.appendChild(duplicatedItem);
      });

      gsap.to(scrollerContent, {
        x: "-50%",
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }

  }, { scope: container });

  return (
    <section ref={container} className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Trusted Service Partner For
        </p>
      </div>

      <div className="scroller w-full overflow-hidden">
        <div className="scroller-inner flex gap-12 md:gap-24 items-center w-max pl-4">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="brand-item text-xl md:text-3xl font-bold text-slate-400 hover:text-slate-800 transition-colors cursor-pointer select-none whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
