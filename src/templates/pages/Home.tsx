import type { FC } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'
import { env } from 'hono/adapter'
import { Default } from '../views/Default'


export const Home: FC = (props) => {
  const ctx = useRequestContext()
  const { IS_LOCAL, STAGE } = env<{ IS_LOCAL?: string, STAGE: string }>(ctx)
  const baseUrl = IS_LOCAL ? `/${STAGE}` : '';
  return (
    <> 
      <h1 class="text-4xl text-red-600">Home page</h1>
      <div hx-get={`${baseUrl}/views/switch`} hx-trigger="click"><Default /></div>
    </>
  )
}