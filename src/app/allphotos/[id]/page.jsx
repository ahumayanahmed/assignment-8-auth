import Image from "next/image";

const PhotoDetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('http://localhost:3000/data.json')
    const photos = await res.json()

    const tile = photos.find(p => p.id == id)

    if (!tile) return <div>Not Found</div>;

    return (
        <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">

        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={tile.image}
            alt={tile.title}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{tile.title}</h1>

          <p className="text-gray-600">{tile.description}</p>

          <div className="text-xl font-semibold text-blue-600">
            ${tile.price}
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">Category:</span> {tile.category}</p>
            <p><span className="font-medium">Material:</span> {tile.material}</p>
            <p><span className="font-medium">Dimensions:</span> {tile.dimensions}</p>
          </div>

          {/* Stock Status */}
          <div>
            {tile.inStock ? (
              <span className="text-green-600 font-medium">In Stock ✅</span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock ❌</span>
            )}
          </div>

          {/* Button */}
          
        </div>
      </div>
    </div>
    );
};

export default PhotoDetailsPage;