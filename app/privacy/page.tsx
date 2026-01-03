import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/ui/fade-in";
import { Hero } from "@/components/home/hero"; // Re-using components if needed, but standard text page is better.

export default function PrivacyPolicyPage() {
    return (
        <main>
            {/* Header */}
            <Section background="slate" className="py-24 md:py-32">
                <Container>
                    <FadeIn>
                        <h1 className="font-headline text-4xl md:text-5xl text-paper mb-6">Privacy Policy</h1>
                        <p className="text-xl text-stone-400 max-w-2xl">
                            Transparency about how we handle your data is essential to our relationship.
                        </p>
                    </FadeIn>
                </Container>
            </Section>

            {/* Content */}
            <Section background="stone" className="py-16 md:py-24">
                <Container>
                    <FadeIn>
                        <div className="max-w-4xl mx-auto prose prose-stone prose-lg text-charcoal/80">
                            <p className="lead text-xl text-charcoal font-medium mb-12">
                                At Vinayaka Groups, we are committed to protecting your privacy and ensuring the security of any personal information you share with us. This policy outlines how we collect, use, and safeguard your data.
                            </p>

                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-2xl font-headline text-charcoal mb-4">1. Information We Collect</h3>
                                    <p>
                                        We collect technical information when you visit our website, such as your IP address, browser type, and operating system. If you choose to contact us via our forms, we collect the personal details you provide, including your name, email address, phone number, and any message content.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-headline text-charcoal mb-4">2. How We Use Your Information</h3>
                                    <p>
                                        The information we collect is used primarily to:
                                    </p>
                                    <ul className="list-disc pl-5 mt-4 space-y-2">
                                        <li>Respond to your inquiries and service requests.</li>
                                        <li>Improve our website functionality and user experience.</li>
                                        <li>Send relevant updates about our products or services, only if you have opted in.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-headline text-charcoal mb-4">3. Data Sharing and Security</h3>
                                    <p>
                                        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. We implement a variety of security measures to maintain the safety of your personal information.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-headline text-charcoal mb-4">4. Cookies</h3>
                                    <p>
                                        Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect some site functionality.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-headline text-charcoal mb-4">5. Contact Us</h3>
                                    <p>
                                        If you have any questions regarding this privacy policy, you may contact us using the information below:
                                    </p>
                                    <div className="mt-6 p-6 bg-white rounded-sm border border-stone-200">
                                        <p className="font-bold text-charcoal">Vinayaka Groups</p>
                                        <p>BTM Layout, 2nd Stage, Bengaluru, Karnataka - 560076</p>
                                        <p className="mt-2 text-bronze">vinayaka-groups@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </main>
    );
}
