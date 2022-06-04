import Link from "next/link";
import TwitterIcon from "../components/icons/Twitter";
import GithubIcon from "../components/icons/Github";
import InstagramIcon from "../components/icons/Instagram";

const Navbar = ({ showName }) => {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <div className="text-xl font-medium uppercase font-header">{showName && <Link href="/">Nick Oelsner</Link>}</div>
      <ul id="navbar" className="items-center hidden gap-10 text-lg font-medium lg:flex">
        <li>
          <Link href="/digital-projects">Digital Projects</Link>
        </li>
        <li>
          <Link href="/physical-projects">Physical Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <a href="https://twitter.com/NickOelsner">
            <TwitterIcon className="w-5 h-5 text-primary" />
          </a>
        </li>
        <li>
          <a href="https://github.com/noelsner">
            <GithubIcon className="w-5 h-5 text-primary" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/NickOelsner">
            <InstagramIcon className="w-5 h-5 text-primary" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
