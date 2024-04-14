import type { FC, PropsWithChildren } from 'hono/jsx'
import {  } from 'hono/jsx'

type BaseProps = PropsWithChildren<{
  title: string
}>

export const Base: FC<BaseProps> = async ({ children, title }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/htmx.org@1.9.11"></script> */}
        <title>{ title }</title>
      </head>
      <body>
        { children }
      </body>
    </html>
  )
}