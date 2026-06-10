export default function About() {
  const steps = ["Problem", "Challenge", "Solution", "Implementation", "Result", "Learning"];

  return (
    <section id="about" className="py-20 px-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-white">About</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="group p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-white/30"
          >
            {/* Number */}
            <span className="text-white/30 font-bold text-3xl mb-4 block group-hover:text-white transition-colors">
              0{index + 1}
            </span>
            
            {/* Title */}
            <h3 className="text-xl font-bold uppercase tracking-wide text-white">
              {step}
            </h3>
            
            {/* Line */}
            <div className="w-12 h-1 bg-white/20 mt-4 group-hover:bg-white transition-colors" />
          </div>
        ))}
      </div>
    </section>
  );
}