import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-10 max-w-6xl mx-auto">
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold tracking-tight mb-6">
          Building solutions with <br/> logic and code.
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg">
          I am a passionate software developer with a focus on web technologies. 
          I love building clean, efficient, and user-friendly digital experiences.
        </p>
        <a href="#contact" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
          Get in touch
        </a>
      </div>
      <div className="md:w-1/3 mt-10 md:mt-0">
        <div className="w-64 h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
          <img src="/Thanu.jpeg" alt="Thanu" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}