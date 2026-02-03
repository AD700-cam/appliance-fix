
import { CheckCircle2, History, Users, Award } from "lucide-react";
import Footer from "@/components/Footer";

import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="min-h-screen pt-20">
            <Helmet>
                <title>About Us | Appliance Fix</title>
                <meta name="description" content="Learn about Appliance Fix - Kolar's trusted repair service since 2019. Expert technicians, genuine parts, and same-day service guarantee." />
                <link rel="canonical" href="https://appliancefix.in/about" />
            </Helmet>
            {/* Header */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Appliance Fix</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Kolar's most trusted home appliance service partner. Dedicated to quality, speed, and transparency since 2019.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-slate-200 overflow-hidden shadow-xl border-8 border-white">
                                <img
                                    src="/team-about.png"
                                    alt="Appliance Fix Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                                <p className="font-bold text-lg text-slate-800 mb-1">Serving Kolar</p>
                                <p className="text-slate-500 text-sm">Proudly local and always nearby when you need us.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Appliance Fix started with a simple mission: to provide honest, reliable, and professional repair services to the families of Kolar. We noticed a gap in the market for punctual technicians who actually stand by their work.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Today, we have grown into a full-service team covering everything from water purifiers to solar heaters. We treat every home like our own, ensuring neat work and long-lasting repairs.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Certified Technicians",
                                    "Genuine Spare Parts",
                                    "Same Day Service",
                                    "Transparent Pricing"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: History,
                                title: "Experience",
                                desc: "Over 5 years of serving the community with thousands of successful repairs."
                            },
                            {
                                icon: Users,
                                title: "Customer Focus",
                                desc: "We prioritize your schedule and comfort. No waiting around all day."
                            },
                            {
                                icon: Award,
                                title: "Quality Guarantee",
                                desc: "We offer a 90-day service warranty on all our repairs for your peace of mind."
                            }
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <val.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                                <p className="text-slate-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
