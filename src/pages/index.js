import Body from "@components/Body"
import Card from "@components/Card"
import Header from "@components/Header"
import Image from "next/image"
import heroHouseIcon from "@assets/heroHouseIcon.png"

export default function Home() {
  const header = (
    <article className="py-10 pl-9 pr-24">
      <h1>
        Welcome you to our E-Commerce <strong className="text-primary-700 font-black">Shop-Me</strong>
      </h1>
      <p>
        We offer you the best products from the {""}
        <strong className="relative text-primary-700 font-black">comfort</strong> of your home
      </p>
    </article>
  )

  const footer = (
    <footer className="py-7 px-9">
      <p>
        Username: <i>11dereksamueladmin</i>
      </p>
      <p>
        Password: <i>0123456789admin</i>
      </p>
    </footer>
  )

  return (
    <div className="h-full max-w-7xl mx-auto mainContainer flex flex-col lg:justify-center">
      <Header></Header>
      <Body>
        <Card header={header} footer={footer} />
        <Image className="lg:ml-10 h-52 w-52 lg:h-96 lg:w-96" src={heroHouseIcon} alt="heroHouseIcon" width={350} height={350} />
      </Body>
    </div>
  )
}
