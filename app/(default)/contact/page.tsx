import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import MapSection from "@/components/map-section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Us',
    description: "Contact us on this information    "
}

export default function Contact() {
    return (
        <>

            <ContactForm />
            <ContactInfo />
            <MapSection />
        </>
    )
}