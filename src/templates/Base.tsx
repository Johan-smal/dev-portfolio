import type { FC, PropsWithChildren } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'
import { env } from 'hono/adapter'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'

type BaseProps = PropsWithChildren<{
  title: string
}>

export const Base: FC<BaseProps> = async ({ children, title }) => {
  const ctx = useRequestContext()
  const { PUBLIC_DIST_ENDPOINT } = env<{ PUBLIC_DIST_ENDPOINT: string }>(ctx)
  const { js, css } = {
    js: `${PUBLIC_DIST_ENDPOINT}/output.js`,
    css: `${PUBLIC_DIST_ENDPOINT}/output.css`,
  }

  const navItems = [
    {
      title: "home",
      route: "/"
    },
    {
      title: "about",
      route: "/about"
    },
    {
      title: "resume",
      route: "/resume"
    },
    {
      title: "now",
      route: "/now"
    }
  ]

  const footerItems = [
    {
      title: 'location',
      children: <>Amsterdam</>
    },
    {
      title: 'contact',
      children: <>me@portfolio.dev</>
    },
    {
      title: 'social',
      children: <>socialmedia stuff</>
    },
    {
      title: 'built',
      children: <>© 2024 by Johan Smal</>
    }
  ]

  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={css} />
        <script src={js}></script>
        <title>{ title }</title>
      </head>
      <Nav items={navItems}/>
      <body>
        <div id="main-container">{ children }</div>
      </body>
      <Footer items={footerItems} />
    </html>
  )
}