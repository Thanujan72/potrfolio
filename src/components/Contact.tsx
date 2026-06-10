export default function Contact() {
  return (
    <section id="contact" className="py-20 px-10 max-w-6xl mx-auto border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Let's work together.</h2>
          <p className="text-gray-600">Open for new opportunities and collaborations.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="https://github.com/Thanujan72" target="_blank" className="font-bold border-b border-black hover:bg-black hover:text-white transition px-2">GITHUB</a>
          <a href="https://Linkdin.com/Thanujan72" target="_blank" className="font-bold border-b border-black hover:bg-black hover:text-white transition px-2">LINKEDIN</a>
        </div>
      </div>
    </section>
  );
}