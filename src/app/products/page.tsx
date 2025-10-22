export default function ProductsPage() {
  // Mock product data
  const products = [
    {
      id: 1,
      name: "Premium Plastic Bags",
      category: "Plastic Products",
      description: "High-quality plastic bags suitable for various packaging needs.",
      image: "/placeholder-plastic-bag.jpg",
      keyFeatures: ["Durable", "Water-resistant", "Eco-friendly options"]
    },
    {
      id: 2,
      name: "Food Storage Containers",
      category: "Plastic Products",
      description: "Airtight containers for food storage and preservation.",
      image: "/placeholder-container.jpg",
      keyFeatures: ["Airtight seal", "BPA-free", "Microwave safe"]
    },
    {
      id: 3,
      name: "Kokeb Bar Soap",
      category: "Soap Products",
      description: "Premium quality bar soap for personal hygiene.",
      image: "/placeholder-soap.jpg",
      keyFeatures: ["Gentle formula", "Fragrance options", "Skin-friendly"]
    },
    {
      id: 4,
      name: "Kokeb Liquid Soap",
      category: "Soap Products",
      description: "Hygienic liquid soap for hand washing and cleaning.",
      image: "/placeholder-liquid-soap.jpg",
      keyFeatures: ["Antibacterial", "Moisturizing", "Various sizes"]
    },
    {
      id: 5,
      name: "Senqie Value Soap",
      category: "Soap Products",
      description: "Affordable quality soap for everyday use.",
      image: "/placeholder-soap2.jpg",
      keyFeatures: ["Economical", "Reliable", "Good for families"]
    },
    {
      id: 6,
      name: "Heavy-duty Packaging Bags",
      category: "Plastic Products",
      description: "Strong bags for industrial and commercial packaging.",
      image: "/placeholder-heavy-bag.jpg",
      keyFeatures: ["High strength", "Tear-resistant", "Various sizes"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bms-section">
        <div className="bms-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bms-primary-gray mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of high-quality plastic and soap products designed for the Ethiopian market.
            </p>
          </div>

          {/* Product Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-4 py-2 bg-bms-primary-green text-white rounded-full hover:bg-green-700 transition-colors">
              All Products
            </button>
            <button className="px-4 py-2 border border-bms-primary-green text-bms-primary-green rounded-full hover:bg-bms-primary-green hover:text-white transition-colors">
              Plastic Products
            </button>
            <button className="px-4 py-2 border border-bms-primary-green text-bms-primary-green rounded-full hover:bg-bms-primary-green hover:text-white transition-colors">
              Soap Products
            </button>
            <button className="px-4 py-2 border border-bms-primary-green text-bms-primary-green rounded-full hover:bg-bms-primary-green hover:text-white transition-colors">
              KOKEB Brand
            </button>
            <button className="px-4 py-2 border border-bms-primary-green text-bms-primary-green rounded-full hover:bg-bms-primary-green hover:text-white transition-colors">
              SENQIE Brand
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-bms-light-gray flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-bms-primary-blue bg-blue-100 rounded-full mb-3">
                    {product.category}
                  </span>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="mb-6">
                    {product.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center mb-1">
                        <svg className="h-5 w-5 text-bms-primary-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <button className="bms-btn py-2 px-4">
                      View Details
                    </button>
                    <span className="text-bms-primary-green font-bold">From ETB 50</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}