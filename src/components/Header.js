import Image from "next/image"
import logoSrc from "@assets/logo.png"
import Button from "./Button"

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Products", href: "#" },
]

export default function Header() {
  return (
    <nav className="py-5 lg:px-24 px-0 flex lg:justify-between justify-center items-center border-solid border-b border-secondary-300">
      <ul className="w-2/6 justify-between items-center flex">
        <Image className="mr-5" src={logoSrc} alt="logoSrc" width={267} height={63} />
        {navigation.map((item, index) => (
          <a className="ml-5 text-xl font-semibold hidden lg:block" href={item.href} key={index}>
            {item.name}
          </a>
        ))}
      </ul>
      <Button className="bg-primary-600 lg:ml-0 ml-5">Login</Button>
    </nav>
  )
}
