import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center py-6 px-10 border-b border-gray-200">
      <img src="/logo.svg" alt="Logo" className="h-8" />
      <div className="flex items-center gap-6">
      <div className="flex gap-4 md:gap-8 text-xs md:text-sm font-medium text-gray-600">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#skills" className="hover:text-black">Skills</a>
        <a href="#projects" className="hover:text-black">Case Study</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </div>
      <ThemeSwitcher /> {/* இங்கே பட்டன் வரும் */}
      </div>
      
    </nav>
  );
}