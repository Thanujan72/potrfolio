export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-10 border-b border-gray-200">
      <h1 className="text-xl font-bold tracking-tighter">THANUDEV</h1>
      <div className="flex gap-8 text-sm font-medium text-gray-600">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#skills" className="hover:text-black">Skills</a>
        <a href="#projects" className="hover:text-black">Case Study</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </div>
    </nav>
  );
}