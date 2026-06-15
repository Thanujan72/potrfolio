import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 max-w-6xl mx-auto border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's work together.</h2>
          <p className="text-gray-600">Open for new opportunities and collaborations.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/Thanujan72" target="_blank" className="text-3xl hover:text-gray-600 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" className="text-3xl hover:text-blue-700 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

