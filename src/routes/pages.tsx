import { Hono } from 'hono'
import { createMiddleware } from 'hono/factory'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Home } from '../templates/pages/Home'
import { Base } from '../templates/Base'
import { About } from '../templates/pages/About'
import { Resume } from '../templates/pages/Resume'
import { Now } from '../templates/pages/Now'
import { env } from 'hono/adapter'

const app = new Hono()

const pageMiddleware = (title: string) => {
  return createMiddleware(jsxRenderer(({ children }, ctx) => {
    if (ctx.req.header('Hx-Request')) {
      return <>
        <head><title>{title}</title></head>
        {children}
      </>
    } else {
      return <Base title={title}>{ children }</Base>
    }    
  }))
}

app.get('/', pageMiddleware("Developer Home Page"), (c) => c.render(<Home />))
app.get('/about', pageMiddleware("About"), (c) => c.render(<About />))
app.get('/resume', pageMiddleware("Resume"), (c) => c.render(<Resume />))
app.get('/now', pageMiddleware("Now"), (c) => c.render(<Now />))

export default app;

