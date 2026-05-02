import Marquee from "react-fast-marquee";
import Marque from "./Marque";
import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 4);

  return (
    <div className="mt-10">

      <div className="bg-amber-200 text-black py-2">
        <Marquee speed={60} pauseOnHover>
          <span className="whitespace-nowrap">
            New Arrival:{" "}
            {topPhotos.map((p) => p.title).join(" | ")}
            {" | "} Weekly Feature: Modern Geometric Patterns | Join the Community & Get Inspired
          </span>
        </Marquee>
      </div>
      {/* TITLE */}
      <h1 className="text-2xl font-bold my-5">Top Four</h1>

      {/* GRID */}
      <div className="grid grid-cols-4 gap-5">
        {topPhotos.map((photo) => (
          <div key={photo.id} className="flex flex-col gap-2">

            <PhotoCard photo={photo} />

          </div>
        ))}
      </div>

    </div>
  );
};

export default TopGenerations;