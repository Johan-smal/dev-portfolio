import type { FC } from 'hono/jsx'
import { useRequestContext } from 'hono/jsx-renderer'
import { env } from 'hono/adapter'
import { Hero } from '../components/common/Hero'

export const Home: FC = (props) => {
  const ctx = useRequestContext()
  const { IS_LOCAL, STAGE } = env<{ IS_LOCAL?: string, STAGE: string }>(ctx)
  const baseUrl = IS_LOCAL ? `/${STAGE}` : '';
  return (
    <> 
      <Hero 
        title='Developers Portfolio'
        content="This template can serve as the a good place for developers that want a nice looking portfolio website, have full control and don't want over complicate the process with a modern javascript framework"
      />
    </>
  )
}