
export default function MapSection() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Visit Us</h2>
                        <p className="text-xl text-gray-400">Find our location on the map below.</p>
                    </div>

                    {/* Map (replace with your actual map implementation) */}
                    <div className="aspect-w-16 aspect-h-9">
                        {/* Replace the iframe with your actual map implementation */}
                        <iframe
                            className="w-full h-full rounded-md"
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d0.000000!3d0.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDEwJzIwLjAiTiAwNcKwMzUnMzQuNyJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
