export default function About() {
  const steps = ["Problem", "Challenge", "Solution", "Implementation", "Result", "Learning"];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">My Approach</h2>
      
      {/* grid-cols-1 மொபைல், sm:grid-cols-2, md:grid-cols-3 டெஸ்க்டாப் */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-gray-400 font-bold text-2xl mb-2 block">0{index + 1}</span>
            <h3 className="text-lg font-bold uppercase text-black">{step}</h3>
            <div className="w-10 h-1 bg-gray-200 mt-3" />
          </div>
        ))}
      </div>
    </section>
  );
}