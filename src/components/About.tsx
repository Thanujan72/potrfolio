export default function About() {
  const steps = ["Problem", "Challenge", "Solution", "Implementation", "Result", "Learning"];

  return (
    <section id="about" className="py-12 md:py-20 px-6 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 tracking-tight text-white">My Approach</h2>
      
      {/* grid-cols-1 மொபைலுக்கு, md:grid-cols-3 டெஸ்க்டாப்பிற்கு */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="group p-6 md:p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/30"
          >
            {/* Number - மொபைலுக்குச் சிறியதாக மாற்றப்பட்டுள்ளது */}
            <span className="text-white/30 font-bold text-2xl md:text-3xl mb-2 md:mb-4 block group-hover:text-white transition-colors">
              0{index + 1}
            </span>
            
            {/* Title - மொபைலுக்கு டெக்ஸ்ட் அளவு குறைக்கப்பட்டுள்ளது */}
            <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide text-white">
              {step}
            </h3>
            
            {/* Line */}
            <div className="w-10 h-1 bg-white/20 mt-3 md:mt-4 group-hover:bg-white transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
}