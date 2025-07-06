
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, Zap, Phone, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calculator,
      title: "Auto Tax Filings",
      description: "Generates tax filings with deductions (depreciation, property tax, opex, interest). Automatically backfiles IRS Form 3115 when needed.",
      benefit: "Save 40+ hours per tax season"
    },
    {
      icon: Zap,
      title: "Maintenance & Rent Automation",
      description: "Automated rent collection with control over frequency and final notices. Smart maintenance request routing and tracking.",
      benefit: "Streamlined operations"
    },
    {
      icon: Phone,
      title: "AI Tenant Escalation",
      description: "AI agent handles inbound tenant calls and escalations. Smart routing for urgent issues, automated responses for common questions.",
      benefit: "24/7 tenant support"
    },
    {
      icon: BarChart3,
      title: "Live Reporting Dashboard",
      description: "Real-time financial reports with property performance metrics, cash flow analysis, and predictive maintenance insights.",
      benefit: "Make data-driven decisions"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Everything you need when we launch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Built by real estate investors who understand your pain points. Our AI will handle the tedious work so you can focus on growing your portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-green-200 opacity-0 animate-slide-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {feature.description}
                </p>
                <div className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors">
                  <span className="mr-1">✓</span>
                  {feature.benefit}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
