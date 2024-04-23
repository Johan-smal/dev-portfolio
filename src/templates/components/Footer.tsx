import type { FC, PropsWithChildren } from "hono/jsx"

type FooterItemProps = PropsWithChildren<{
  title: string
}>

const FooterItem: FC<FooterItemProps> = ({ title, children }) => {
  return (
    <nav>
      <h6 className="footer-title">{ title }</h6> 
      { children }
    </nav> 
  )
}

type FooterProps = {
  items: FooterItemProps[]
}

export const Footer: FC<FooterProps> = ({ items }) => {
  return (
  <footer className="sm:flex p-10 text-neutral-content justify-evenly text-center">
    {items.map(item => (<FooterItem {...item} />))}
  </footer>
  )
}