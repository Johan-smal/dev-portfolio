import type { FC, PropsWithChildren } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'
import { env } from 'hono/adapter'

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
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={css} />
        <script src={js}></script>
        <title>{ title }</title>
      </head>
      <body>
        { children }
      </body>
    </html>
  )
}