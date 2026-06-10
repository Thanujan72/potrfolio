const projects = [
  {
    title: "AGRI தமிழா",
    description: "AgriTamizha is a digital agriculture platform that empowers farmers with real-time weather updates, market insights, and AI-driven farming recommendations. It helps improve decision-making and promote sustainable agricultural practices.",
    link: "https://agritamizha.com/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-600 font-medium">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
}