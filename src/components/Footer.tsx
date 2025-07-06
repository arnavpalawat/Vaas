
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">

              <span className="text-xl font-bold text-green-600">Vaas.ai</span>
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              AI-powered property management for real estate investors. 
              Management made simple, and cheap.
            </p>
            {/*<div className="flex space-x-4">*/}
            {/*  <a href="#" className="text-gray-400 hover:text-white transition-colors">*/}
            {/*    <span className="sr-only">Twitter</span>*/}
            {/*    <div className="w-6 h-6 bg-gray-600 rounded"></div>*/}
            {/*  </a>*/}
            {/*  <a href="#" className="text-gray-400 hover:text-white transition-colors">*/}
            {/*    <span className="sr-only">LinkedIn</span>*/}
            {/*    <div className="w-6 h-6 bg-gray-600 rounded"></div>*/}
            {/*  </a>*/}
            {/*  <a href="#" className="text-gray-400 hover:text-white transition-colors">*/}
            {/*    <span className="sr-only">YouTube</span>*/}
            {/*    <div className="w-6 h-6 bg-gray-600 rounded"></div>*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
          

          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="mailto:arnavpalawat@gmail.com" className="hover:text-white transition-colors">arnavpalawat@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Vaas.ai. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
