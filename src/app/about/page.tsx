import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bms-section">
        <div className="bms-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bms-primary-gray mb-4">About BMS Trading PLC</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2000 E.C., we have been dedicated to manufacturing high-quality plastic and soap products for the Ethiopian market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-bms-primary-gray mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                BMS Trading PLC was established in 2000 E.C. with a vision to provide high-quality plastic and soap products to the Ethiopian market. 
                Over the years, we have grown to become one of the leading manufacturers in the region, serving customers across Ethiopia.
              </p>
              <p className="text-gray-700 mb-4">
                Our factory is located in Alemgena, Sheger City, Oromia Region, strategically positioned to serve customers across the country. 
                Our head office is in Addis Ababa at Bisrate Gabriel (Bayne Building), where our management team coordinates our operations and customer services.
              </p>
              <p className="text-gray-700">
                We take pride in our commitment to quality, affordability, and customer satisfaction. Our products are trusted by consumers and businesses throughout Ethiopia.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg h-96 rounded-xl overflow-hidden shadow-xl">
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
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-bms-primary-gray text-center mb-12">Our Core Business Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-bms-primary-green">
                <h3 className="text-xl font-semibold text-bms-primary-gray mb-3">Plastic Product Manufacturing</h3>
                <p className="text-gray-600">
                  We manufacture a wide range of plastic products including bags, containers, and packaging materials that meet the needs of Ethiopian consumers and businesses.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-bms-primary-blue">
                <h3 className="text-xl font-semibold text-bms-primary-gray mb-3">Soap Manufacturing</h3>
                <p className="text-gray-600">
                  Our soap products include both liquid and bar soaps, designed with Ethiopian consumers' needs in mind, ensuring quality and affordability.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-bms-secondary-yellow">
                <h3 className="text-xl font-semibold text-bms-primary-gray mb-3">Distribution</h3>
                <p className="text-gray-600">
                  We distribute our products across Ethiopia, including Addis Ababa, Borena, Asosa, Wollega, Adama, and Debre Markos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-bms-primary-gray text-center mb-12">Our Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-bms-primary-green mb-4">KOKEB</h3>
                <p className="text-gray-600 mb-4">
                  Our premium brand for high-quality plastic and soap products. KOKEB products are known for their reliability and value.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-bms-primary-blue mb-4">SENQIE</h3>
                <p className="text-gray-600 mb-4">
                  Our value brand providing quality products at accessible prices. SENQIE serves the everyday needs of Ethiopian families.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-bms-primary-gray text-white py-12 rounded-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-200">
                To manufacture high-quality plastic and soap products that meet the needs of Ethiopian consumers while contributing to the economic development of our country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}