import { Hono } from 'hono'
import { createMiddleware } from 'hono/factory'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Home } from '../templates/pages/Home'
import { Base } from '../templates/Base'

const app = new Hono()

const pageMiddleware = (title: string) => {
  return createMiddleware(jsxRenderer(({ children }) => <Base title={title}>{ children }</Base>))
}

app.get('/', pageMiddleware("Developer Home Page"), (c) => c.render(<Home />))

export default app;

