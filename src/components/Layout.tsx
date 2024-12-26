import { ReactNode } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Newsletter } from "./Newsletter"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header />

      <main className="">
        {children}
      </main>

      <Newsletter />
      <Footer />
    </>
  )
}

export default Layout;