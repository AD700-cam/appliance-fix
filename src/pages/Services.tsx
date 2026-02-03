
import { Droplets, Battery, Sun, Camera, Lightbulb, Flame, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const services = [
    {
        icon: Droplets,
        title: "Water Purifier Service",
        desc: "Complete RO, UV, & UF maintenance. Filter replacement, membrane cleaning, and installation.",
        price: "Starts from ₹ 300",
    },
    {
        icon: Battery,
        title: "UPS & Inverter",
        desc: "Battery health check, water distillation, and terminal cleaning. New battery sales available.",
        price: "Starts from ₹ 250",
    },
    {
        icon: Sun,
        title: "Solar Water Heater",
        desc: "Tank cleaning, scaling removal, and tube replacement. Ensure hot water efficiency.",
        price: "Starts from ₹ 500",
    },
    {
        icon: Camera,
        title: "CCTV Installation",
        desc: "HD camera setup, DVR configuration, and mobile view setup for home & business security.",
        price: "Call for Quote",
    },
    {
        icon: Lightbulb,
        title: "LED & Electrical",
        desc: "Fancy jhumars, LED fitting, and general electrical wiring and repairs.",
        price: "Starts from ₹ 200",
    },
    {
        icon: Flame,
        title: "Geyser Repair",
        desc: "Element replacement, thermostat check, and tank leakage repair for all brands.",
        price: "Starts from ₹ 350",
    },
];

import { Helmet } from "react-helmet-async";

const Services = () => {
    return (
        <div className="min-h-screen pt-20">
            <Helmet>
                <title>Our Services | Appliance Fix</title>
                <meta name="description" content="Professional repair for RO purifiers, UPS batteries, solar heaters, CCTVs, and more in Kolar. Affordable rates starting from ₹200." />
                <link rel="canonical" href="https://appliancefix.in/services" />
            </Helmet>
            <section className="bg-primary/5 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Professional repair and maintenance for all your home appliances. fast, affordable, and guaranteed.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white border rounded-2xl p-8 hover:shadow-lg transition-all group">
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors mb-6">
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {service.desc}
                                </p>
                                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                    <Link to="/contact">
                                        <Button variant="ghost" className="p-0 h-auto hover:bg-transparent text-primary hover:text-primary/80 gap-2 font-semibold">
                                            Book Now <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-900 py-16 text-center text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Need a custom quote?</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                        Don't see what you're looking for? We handle a wide range of electrical and appliance issues.
                        Give us a call to discuss your needs.
                    </p>
                    <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200" asChild>
                        <a href="tel:+919986964849">Speak to an Expert</a>
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
