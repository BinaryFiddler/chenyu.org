import Avatar from "./avatar"

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-8 md:mb-8">
      <Avatar name={"Chenyu"} picture={"/assets/blog/authors/hcy.jpeg"} />
      <ul className="flex text-center md:text-left text-lg mt-4 md:pl-8">
        <li className="mr-6 hover:underline">
          <a className="text-2x font-medium" href="/">What's New</a>
        </li>
        <li className="mr-6 hover:underline">
          <a className="text-2x font-medium" href="/about">About</a>
        </li>
      </ul>
    </section>
  )
}

export default Header

