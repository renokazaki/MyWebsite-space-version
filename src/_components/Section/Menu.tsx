export default function Menu() {
    return (
      <div className="flex justify-between md:justify-end gap-2 md:gap-8 items-center p-4 fixed top-0 w-full bg-[#f5f3ef8a] backdrop-blur-md">
          <a className="font-bold text-text hover:text-blue-300 hover:cursor-pointer" href="#home">
            Home
          </a>
          <a className="font-bold text-text hover:text-blue-300 hover:cursor-pointer" href="#projects">
            Projects
          </a>
          <a className="font-bold text-text hover:text-blue-300 hover:cursor-pointer" href="#profile">
            Profile
          </a>
          <a className="font-bold text-text hover:text-blue-300 hover:cursor-pointer" href="#contact">
            Contact
          </a>
      </div>
    );
  };
  