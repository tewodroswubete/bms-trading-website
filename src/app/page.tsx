export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            BMS Trading PLC
          </h1>
          <h2 className="text-2xl md:text-3xl text-green-600 mb-4">
            Leading Manufacturer in Ethiopia
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Quality Plastic and Soap Products Since 2000 E.C.
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            BMS Trading PLC specializes in manufacturing high-quality plastic and soap products,
            serving customers across Ethiopia with our trusted brands KOKEB and SENQIE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Products
            </a>
            <a
              href="/quote"
              className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">25+</div>
              <div className="text-gray-600 mt-2">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">1000+</div>
              <div className="text-gray-600 mt-2">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">50+</div>
              <div className="text-gray-600 mt-2">Product Types</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600">6+</div>
              <div className="text-gray-600 mt-2">Distribution Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose BMS Trading PLC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                All our products meet the highest quality standards with rigorous testing at every stage.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Wide Distribution</h3>
              <p className="text-gray-600">
                Our products are available across major Ethiopian cities including Addis Ababa, Borena, and more.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gray-800 text-2xl font-bold">$</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                High-quality products at prices that make economic sense for our valued customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Quality Products for Every Need
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Plastic Bags', color: 'green' },
              { name: 'Containers', color: 'blue' },
              { name: 'Bar Soap', color: 'yellow' },
              { name: 'Liquid Soap', color: 'gray' }
            ].map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <h3 className="font-bold text-xl text-gray-700">{product.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    High-quality {product.name.toLowerCase()} for all your needs.
                  </p>
                  <button className={`w-full py-3 rounded-lg font-medium text-white
                    ${product.color === 'green' ? 'bg-green-600 hover:bg-green-700' : ''}
                    ${product.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                    ${product.color === 'yellow' ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-800' : ''}
                    ${product.color === 'gray' ? 'bg-gray-700 hover:bg-gray-800' : ''}
                  `}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-4">KOKEB</h3>
              <p className="text-gray-600">
                Premium quality plastic products for everyday use
              </p>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-4">SENQIE</h3>
              <p className="text-gray-600">
                Trusted soap and cleaning products for homes and businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get competitive pricing for bulk orders and experience our quality products firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/quote"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}