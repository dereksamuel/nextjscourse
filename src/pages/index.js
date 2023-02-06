// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ]

import Card from "@components/Card"

export default function Home() {
  const header = (
    <article className="px-2 py-4">
      <h1>
        Welcome you to our E-Commerce <strong>Shop-Me</strong>
      </h1>
      <p>
        We offer you the best products from the <strong className="relative">comfort</strong> of your home
      </p>
    </article>
  )

  const footer = (
    <footer className="px-2 pt-4 pb-5">
      <p>
        Username: <i>11dereksamueladmin</i>
      </p>
      <p>
        Password: <i>0123456789admin</i>
      </p>
    </footer>
  )

  return (
    <div>
      <Card header={header} footer={footer} />
    </div>
  )
}
