export default function CaseStudy() {
  return (
    <section id="projects" className="py-20 px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Case Study: AGRI தமிழா</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-6 border border-gray-200 rounded-xl hover:border-black transition"><p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Problem</p><p className="text-sm font-medium">Farmers struggled to access market prices and crop management info.</p></div>
        <div className="hidden md:flex items-center justify-center text-gray-300">→</div>
        <div className="p-6 border border-gray-200 rounded-xl hover:border-black transition"><p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Solution</p><p className="text-sm font-medium">Built a centralized web platform for real-time data access.</p></div>
        <div className="hidden md:flex items-center justify-center text-gray-300">→</div>
        <div className="p-6 border border-gray-200 rounded-xl hover:border-black transition"><p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Tools</p><p className="text-sm font-medium">Angular,Html,Typescript, Tailwind, CSS, C#</p></div>
        <div className="hidden md:flex items-center justify-center text-gray-300">→</div>
        <div className="p-6 bg-black text-white rounded-xl"><p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Outcome</p><p className="text-sm font-medium">Simplified workflow for farmers and better engagement.</p></div>
      </div>
    </section>
  );
}