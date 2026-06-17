export default function CategoryPage({ params }: any) {
  const slug = params.slug;
  const title = Array.isArray(slug) ? slug.join("/") : String(slug ?? "");

  return (
    <div className="min-h-screen bg-white px-6 md:px-12 py-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 capitalize">
          {title.replace(/-/g, " ")}
        </h1>
        <p className="text-gray-500 mt-2">
          Explore premium products in this category
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {[1,2,3,4,5,6,7,8].map((item) => (
          <a
            key={item}
            href={`https://wa.me/919403891146?text=Hi%20I%20am%20interested%20in%20${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
          >

            {/* IMAGE PLACEHOLDER */}
            <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition duration-300" />

            {/* TEXT */}
            <div className="p-3">
              <h2 className="text-gray-900 font-medium text-sm md:text-base">
                Premium Product
              </h2>

              <p className="text-gray-500 text-xs mt-1">
                Click to enquire on WhatsApp
              </p>
            </div>

          </a>
        ))}

      </div>
    </div>
  );
}