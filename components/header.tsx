import Avatar from "./avatar"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-8 md:mb-8 cursor-pointer text-primary-800 dark:text-primary-100">
      <Avatar name={"Finding Chenyu"} picture={"/assets/blog/authors/hcy.jpeg"} />
      <ul className="flex text-center md:text-left text-lg mt-4 md:pl-8">
        <li className="text-2x font-medium mr-6 hover:underline">
          <Link href="/" passHref><div>{"What's New"}</div></Link>
        </li>
        <li className="text-2x font-medium mr-6 hover:underline">
          <Link href="/music" passHref><div>{"Music"}</div></Link>
        </li>
        <li className="text-2x font-medium mr-6 hover:underline">
          <Link href="/drawing" passHref><div>{"Drawing"}</div></Link>
        </li>
        <li className="text-2x font-medium mr-6 hover:underline">
          <Link href="/about" passHref><div>{"About"}</div></Link>
        </li>
        <li className="text-2x font-medium hover:underline">
          <div><ThemeToggle /></div>
        </li>
      </ul>
    </section>
  )
}

export default Header

