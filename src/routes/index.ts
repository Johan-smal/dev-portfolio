import { Hono } from 'hono'
import pages from './pages'
import views from './views'

const app = new Hono()

app.route('/', pages)
app.route('/views', views)

export default app;

