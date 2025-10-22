export default function GalleryPage() {
  // Mock gallery data
  const galleryItems = [
    { id: 1, title: "Factory Exterior", category: "factory", image: "/placeholder-factory-ext.jpg" },
    { id: 2, title: "Production Line", category: "factory", image: "/placeholder-production-line.jpg" },
    { id: 3, title: "Quality Control", category: "factory", image: "/placeholder-quality-control.jpg" },
    { id: 4, title: "Plastic Bags", category: "products", image: "/placeholder-plastic-products.jpg" },
    { id: 5, title: "Soap Products", category: "products", image: "/placeholder-soap-products.jpg" },
    { id: 6, title: "Packaging Area", category: "factory", image: "/placeholder-packaging.jpg" },
    { id: 7, title: "Warehouse", category: "factory", image: "/placeholder-warehouse.jpg" },
    { id: 8, title: "Delivery Vehicles", category: "logistics", image: "/placeholder-delivery.jpg" },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'factory', name: 'Factory' },
    { id: 'products', name: 'Products' },
    { id: 'logistics', name: 'Logistics' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bms-section">
        <div className="bms-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-bms-primary-gray mb-4">Our Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our manufacturing facility, products, and operations.
            </p>
          </div>

          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button 
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  category.id === 'all' 
                    ? 'bg-bms-primary-green text-white' 
                    : 'border border-bms-primary-green text-bms-primary-green hover:bg-bms-primary-green hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 bg-bms-light-gray relative overflow-hidden">
                  <div className="bg-gray-200 border-2 border-dashed w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p className="mt-2">{item.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bms-btn bg-white text-bms-primary-green hover:bg-bms-light-gray">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm capitalize">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}