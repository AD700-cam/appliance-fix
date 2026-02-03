
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Wrench, Clock, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const stats = [
    {
        icon: Users,
        value: "5,000+",
        label: "Happy Customers",
    },
    {
        icon: Wrench,
        value: "10,000+",
        label: "Repairs Completed",
    },
    {
        icon: Clock,
        value: "5+ Years",
        label: "Experience",
    },
    {
        icon: ShieldCheck,
        value: "90 Days",
        label: "Service Warranty",
    },
];

const StatsSection = () => {
    const container = useRef(null);

    useGSAP(() => {
        // Entry Animation
        gsap.from(".stat-item", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
        });

        // Counter Animation
        stats.forEach((stat, i) => {
            const el = document.getElementById(`stat-num-${i}`);
            // Extract number from string (e.g. "5,000+" -> 5000)
            const finalValue = parseInt(stat.value.replace(/,/g, "").replace(/\+/g, "")) || 0;

            if (finalValue > 0) {
                gsap.from(el, {
                    textContent: 0,
                    duration: 2,
                    ease: "power1.out",
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                    },
                    onUpdate: function () {
                        if (el) {
                            el.innerHTML = Math.ceil(this.targets()[0].textContent).toLocaleString() + "+";
                        }
                    }
                });
            }
        });

    }, { scope: container });

    return (
        <section ref={container} className="py-12 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item text-center group">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-2">
                                <span id={`stat-num-${index}`}>{stat.value}</span>
                            </h3>
                            <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
