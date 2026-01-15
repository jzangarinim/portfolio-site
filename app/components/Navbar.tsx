export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 py-4">
      <ul className="flex justify-center gap-8 font-sans text-primary text-sm">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
