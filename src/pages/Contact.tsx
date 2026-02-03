
import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { MessageCircle, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen pt-20">
            <Helmet>
                <title>Contact Us | Appliance Fix Kolar</title>
                <meta name="description" content="Get in touch with Appliance Fix for expert home appliance repairs in Kolar. Call 9986964849 or book online." />
                <link rel="canonical" href="https://appliancefix.in/contact" />
            </Helmet>

            {/* Header */}
            <section className="bg-primary/5 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We are just a phone call away. Reach out for quick, reliable service.
                    </p>
                </div>
            </section>

            {/* Quick Info Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                icon: Phone,
                                title: "Call Us",
                                info: "+91 9986964849",
                                sub: "Available 8 AM - 9 PM",
                                link: "tel:+919986964849"
                            },
                            {
                                icon: MessageCircle,
                                title: "WhatsApp Us",
                                info: "+91 9986964849",
                                sub: "Quick Response (Online)",
                                link: "https://wa.me/919986964849?text=Hi,%20I%20need%20service"
                            },
                            {
                                icon: MapPin,
                                title: "Visit Us",
                                info: "Kolar, Karnataka",
                                sub: "Serving all nearby areas",
                                link: "#"
                            }
                        ].map((item, i) => (
                            <a
                                href={item.link}
                                key={i}
                                className="flex flex-col items-center text-center p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-white"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-lg font-medium text-slate-800">{item.info}</p>
                                <p className="text-slate-500 text-sm mt-1">{item.sub}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Form Section */}
            <ContactSection />

            <Footer />
        </div>
    );
};

export default Contact;
