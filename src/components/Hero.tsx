export default function Hero() {
  return (
    // py-12 மொபைலுக்கு சிறிய padding, md:py-20 டெஸ்க்டாப்பிற்கு பெரிய padding
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 md:px-10 max-w-6xl mx-auto text-center md:text-left">
      
      {/* டெக்ஸ்ட் பகுதி */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        {/* text-4xl மொபைலுக்கு, text-5xl டெஸ்க்டாப்பிற்கு */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
          Building solutions with <br/> logic and code.
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 text-sm md:text-base">
          I am a passionate software developer with a focus on web technologies. 
          I love building clean, efficient, and user-friendly digital experiences.
        </p>
        <a href="#contact" className="bg-black text-white px-6 md:px-8 py-3 rounded-full hover:bg-gray-800 transition inline-block text-sm md:text-base">
          Get in touch
        </a>
      </div>
      
      {/* புகைப்படம் இருக்கும் பகுதி - மொபைலில் அளவு குறைக்கப்பட்டுள்ளது */}
      <div className="md:w-1/3 flex justify-center">
        {/* w-48/h-48 மொபைலுக்கு, w-64/h-64 டெஸ்க்டாப்பிற்கு */}
        <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-full overflow-hidden shadow-xl border-4 border-white">
          <img 
            src="/Thanu.jpeg" 
            alt="Thanu" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
}