
import { Card, CardContent } from '@/components/ui/card';
import { User, Building2 } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Tailored for every type of investor
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're managing your first rental or running a property management company, Vaas.ai scales with your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mr-4">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  For Individual Investors
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-900">Cut time in half</p>
                    <p className="text-gray-600 text-sm">Automate repetitive tasks that eat up your weekends</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-900">Reduce stress</p>
                    <p className="text-gray-600 text-sm">Never miss rent collection or tax deadlines again</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-900">Maximize deductions</p>
                    <p className="text-gray-600 text-sm">AI finds every tax break you're entitled to</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-900">Scale confidently</p>
                    <p className="text-gray-600 text-sm">Add properties without adding headaches</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 mr-4">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  For PM Companies
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-900">Increase margins</p>
                    <p className="text-gray-600 text-sm">Reduce operational costs by up to 60%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-900">Automate operations</p>
                    <p className="text-gray-600 text-sm">Handle 10x more properties with the same team</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-900">Improve client satisfaction</p>
                    <p className="text-gray-600 text-sm">24/7 AI support means happier tenants and owners</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-900">White-label ready</p>
                    <p className="text-gray-600 text-sm">Brand the platform as your own premium service</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
