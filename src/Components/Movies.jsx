import { motion } from "framer-motion";
import image1 from "../assets/littlekrishna.jpg";
import image2 from "../assets/simmba.jpg";
import image3 from "../assets/s-1.jpg";
import image4 from "../assets/Pushpa.jpg";
import ProgressLoad from "./ProgressLoad";
// ...continue importing up to image24

// Add up to 24 movie poster images here
const films = [
    { title: "Simmba", image: image1 },
    { title: "Little Krishna", image: image2 },
    { title: "Singham", image: image3 },
    { title: "Pushpa 2", image: image4 },
    // Add remaining images up to 24
];

export default function AlumniFilmSection({scrollToForm}) {
    return (
        <section className="bg-black text-white py-4 px-6 overflow-hidden pb-10">
            {/* Heading */}
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
                    ALUMNI WORKED ON MAJOR FILM PROJECTS
                </h2>

            </div>

            {/* Poster Grid */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8">
                {films.map((film, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-zinc-900 rounded-xl overflow-hidden shadow-xl border border-zinc-800 w-full"
                    >
                        <div className="relative aspect-[2/3]">
                            <img
                                src={film.image}
                                alt={film.title}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-end p-2">
                                <p className="text-xs font-semibold">{film.title}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}


            <div className="mt-12 sm:mt-6">
                <div className="flex justify-center">
    <button
        onClick={scrollToForm}
        className="w-auto sm:w-auto max-w-md sm:max-w-none px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-base sm:text-2xl font-medium shadow-lg hover:opacity-90 transition"
    >
        Discover Industry Opportunities
    </button>
</div>
            </div>
            <p className="mt-5 sm:mt-6 text-xs sm:text-xl text-red-600 max-w-md sm:max-w-xl text-center mx-auto">
                📍 Campus located in Thane, Mumbai.
            </p>
            <div className="w-full flex justify-center lg:justify-center mt-2 sm:mt-2">
                <div className="inline-block">
                    <ProgressLoad />
                </div>
            </div>

        
                  
        </section >
    );
}
