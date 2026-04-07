import { motion } from "framer-motion";
import image1 from "../assets/group.png";

// Single image setup
const film = {
  title: "Our Students on Major Film Projects",
  image: image1,
};

export default function AlumniFilmSection() {
  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          From Students to Studio Artists
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          See where our students are working today
        </p>
      </div>

      {/* Single Poster Layout */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800"
        >
          <div className="relative">
            <img
              src={film.image}
            
              className="w-full h-auto object-contain bg-black"
            />

            <div className="absolute inset-0  to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                
              </h3>
              
            </div>
          </div>
        </motion.div>
      </div>

      {/* Alumni Film Credits */}
      {/* <div className="mt-20 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          ALUMNI WORKED ON MAJOR FILM PROJECTS
        </h3>

        <p className="text-gray-400 mb-8">
          Simmba • Little Krishna • Singham • Pushpa 2
        </p>

       

        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-2xl shadow-lg">
          ▶ Begin Your Journey
        </button>
      </div> */}
    </section>
  );
}
