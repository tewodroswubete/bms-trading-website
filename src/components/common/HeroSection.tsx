import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-bms-primary-green to-bms-primary-blue text-white">
      <div className="bms-container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Leading Manufacturer of <span className="text-bms-secondary-yellow">Quality Products</span> in Ethiopia
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl">
              BMS Trading PLC - Since 2000 E.C., we've been manufacturing top-quality plastic and soap products for the Ethiopian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/products" 
                className="bms-btn bg-bms-secondary-yellow text-bms-dark-gray hover:bg-yellow-500"
              >
                Explore Products
              </Link>
              <Link 
                href="/contact" 
                className="bms-btn bg-transparent border-2 border-white hover:bg-white hover:text-bms-primary-green"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/BMS-logo.png" 
                alt="BMS Trading PLC Factory" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-bms-secondary-yellow"></div>
        <div className="absolute bottom-10 right-40 w-24 h-24 rounded-full bg-white"></div>
      </div>
    </section>
  );
};

export default HeroSection;