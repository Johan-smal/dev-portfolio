import type { FC } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'
import { env } from 'hono/adapter'

export const Home: FC = (props) => {
  const ctx = useRequestContext()
  const { IS_LOCAL, STAGE } = env<{ IS_LOCAL?: string, STAGE: string }>(ctx)
  const baseUrl = IS_LOCAL ? `/${STAGE}` : '';
  return (
    <> 
      <div class="h-screen bg-yellow-200 text-center"><p>home</p></div>
    </>
  )
}