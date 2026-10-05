export function Header() {
  return (
    <header className="w-7xl m-auto flex items-center justify-between p-8 font-medium">
      <a href="#" className=" hover:text-gray-400">Material Tailwind React</a>

      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Profile</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Sign In</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Sign Up</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Docs</a>
          </li>
        </ul>
      </nav>

      <div>
          <a href="#" className="uppercase text-xs hover:bg-[#212121] rounded-xl py-2 px-3 mr-4">Pro Version</a>
          <a href="#" className="uppercase text-xs bg-[#212121] rounded-xl py-2 px-3">Free Donwload</a>
      </div>
    </header>
  );
}
