const NavMenu = [
  {
    name: "Service",
    link: "#service",
  },
  {
    name: "Works",
    link: "#works",
  },
  {
    name: "Resume",
    link: "#resume",
  },
  {
    name: "Skill",
    link: "#skill",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center absolute top-0 left-0 right-0 px-16 py-4 text-white">
      <h1 className="text-2xl font-bold">
        <a href="#home">N-S</a>
      </h1>
      <nav>
        <ul className="flex">
          {NavMenu.map((item) => (
            <li className="mr-11 hover:text-fuchsia-600 py-1" key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li
            className="mr-11 bg-gradient-to-r from-indigo-500  to-pink-500 rounded-full px-4  py-1
            hover:from-pink-500 hover:to-indigo-500"
          >
            <a href="#">Hire Me!</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
