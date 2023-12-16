import { Mail, Phone, Map } from "react-feather"

export default function ContactInfo() {
    return (
        <section id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Contact Us</h2>
                        <p className="text-xl text-gray-400">Feel free to reach out to us for any inquiries or assistance.</p>
                    </div>

                    {/* Contact Information */}
                    <div className="max-w-md mx-auto grid gap-8 items-start md:max-w-2xl">

                        {/* Email */}
                        <div className="flex items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                            <Mail className="w-8 h-8 mr-4 text-amber-300" />
                            <div>
                                <h4 className="h4 mb-2">Email</h4>
                                <p className="text-lg text-gray-400">db@xlogic.in</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                            <Phone className="w-8 h-8 mr-4 text-amber-300" />
                            <div>
                                <h4 className="h4 mb-2">Phone</h4>
                                <p className="text-lg text-gray-400">+91 90039 47419</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
                            <Map className="w-8 h-8 mr-4 text-amber-300" />
                            <div>
                                <h4 className="h4 mb-2">Address</h4>
                                <p className="text-lg text-gray-400">Delhi | Coimbatore</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
