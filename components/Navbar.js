import Link from "next/link";
import TwitterIcon from "../components/icons/Twitter";
import GithubIcon from "../components/icons/Github";
import InstagramIcon from "../components/icons/Instagram";

const Navbar = ({ showName }) => {
  return (
    <nav className="flex justify-between px-10 py-6 items-center">
      <div className="text-xl uppercase font-header font-medium">{showName && <Link href="/">Nick Oelsner</Link>}</div>
      <ul id="navbar" className="text-lg font-medium flex gap-10 items-center">
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
            <TwitterIcon className="text-primary h-5 w-5" />
          </a>
        </li>
        <li>
          <a href="https://github.com/noelsner">
            <GithubIcon className="text-primary h-5 w-5" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/NickOelsner">
            <InstagramIcon className="text-primary h-5 w-5" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
