export default function Skills() {
  const skills = [
    { name: "C#", level: "Basic" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML5", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "Node.js", level: "Basic" }
  ];

  return (
    <section id="skills" className="py-20 px-10 max-w-6xl mx-auto">
      <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="border-b border-black pb-2">
            <h3 className="text-xl font-bold">{skill.name}</h3>
            <p className="text-xs text-gray-500">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}