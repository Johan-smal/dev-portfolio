import type { FC, PropsWithChildren } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'
import { env } from 'hono/adapter'

type LinkProps = PropsWithChildren<{
  route: string
}>

export const Link: FC<LinkProps> = ({ children, route }) => {
  const ctx = useRequestContext()
  const { IS_LOCAL, STAGE } = env<{ IS_LOCAL?: string, STAGE: string }>(ctx)
  const configureRoute = IS_LOCAL ? `/${STAGE}${route}` : route;
  return <a hx-get={configureRoute} hx-target="#main-container" hx-replace-url={configureRoute}>{children}</a>
}