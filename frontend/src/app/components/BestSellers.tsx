const products = [
  {
    name: "Ultimate Maharaja",
    image: "/products/seller6.png",
  },
  {
    name: "Golden Nest",
    image: "/products/seller2.png",
  },
  {
    name: "Golden Mayur",
    image: "/products/seller1.png",
  },
  {
    name: "Beuaty",
    image: "/products/seller4.png",
  },
  {
    name: "Diamond Duck",
    image: "/products/seller5.png",
  },
  {
    name: "Bridal Salon Chair",
    image: "/products/seller3.png",
  },
];

export default function BestSellers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
       <div className="text-center mb-12">
  <h2 className="text-4xl font-bold uppercase tracking-wide">
    Our Best Sellers
  </h2>
</div>

        {/* Mobile Layout */}
        <div className="grid gap-6 lg:hidden">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-6"
            >
              <div className="h-64 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[230px] w-auto object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-center font-semibold text-lg">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Desktop Luxury Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6">

          {/* Left Featured Product */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 h-full p-6">

              <div className="h-[550px] flex items-center justify-center pt-8">
                <img
                  src={products[0].image}
                  alt={products[0].name}
                  className="max-h-[480px] w-auto object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-center text-2xl font-bold">
                {products[0].name}
              </h3>

            </div>
          </div>

          {/* Right Side Products */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">

            {products.slice(1, 5).map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-3xl shadow-md hover:shadow-lg transition duration-300 p-4"
              >
                <div className="h-52 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[200px] w-auto object-contain hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="mt-3 text-center font-semibold">
                  {product.name}
                </h3>
              </div>
            ))}

            {/* Product 6 */}
            <div className="col-span-2 bg-white rounded-3xl shadow-md hover:shadow-lg transition duration-300 p-4">

              <div className="h-56 flex items-center justify-center">
                <img
                  src={products[5].image}
                  alt={products[5].name}
                  className="max-h-[220px] w-auto object-contain hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="mt-3 text-center font-semibold text-lg">
                {products[5].name}
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}