import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Home } from '../templates/pages/Home'
import { Base } from '../templates/Base'

const app = new Hono().basePath('/')

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, props: { title: string }): Response
  }
}

app.use('*', jsxRenderer(({ children, title }) => <Base title={title}>{ children }</Base>))

app.get('/', (c) => c.render(<Home />, { title: "Developer Home Page"}))

export default app;

