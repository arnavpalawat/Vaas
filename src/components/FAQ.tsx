
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "You get full access to all Vaas.ai features for 2 months completely free, including automated tax filings, rent collection, AI tenant support, and real-time reporting. No credit card required, and we'll waive the $299 onboarding fee for waitlist members."
    },
    {
      question: "Who is Vaas.ai built for?",
      answer: "Vaas.ai is designed for individual real estate investors managing their own properties and small property management firms looking to scale and automate. Whether you have 1 property or 100+, our platform adapts to your needs."
    },
    {
      question: "Can I manage multiple properties?",
      answer: "Absolutely! Vaas.ai is built to scale. You can manage unlimited properties under one dashboard, with separate financial tracking, tenant communications, and reporting for each property. Our AI handles the complexity so you don't have to."
    },
    {
      question: "Will I need to install anything?",
      answer: "No installation required! Vaas.ai is a cloud-based platform that works in your web browser. Access your properties from anywhere, on any device. We also provide mobile apps for iOS and Android for on-the-go management."
    },
    {
      question: "How does the AI tax filing work?",
      answer: "Our AI analyzes your property income and expenses, automatically categorizes transactions, calculates depreciation schedules, and generates complete tax filings including Schedule E. It even handles IRS Form 3115 backfiling when needed. All filings are reviewed by licensed tax professionals."
    },
    {
      question: "What happens after the free trial?",
      answer: "After your 2-month free trial, you can choose from our flexible pricing plans starting at $49/month per property. Waitlist members get lifetime access to special pricing and priority customer support."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about Vaas.ai
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:hello@vaasai.co" 
            className="text-green-600 hover:text-green-700 font-semibold transition-colors"
          >
            Get in touch with our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
