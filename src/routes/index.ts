import { Hono } from 'hono'
import pages from './pages'

const app = new Hono().basePath('/')

app.route('/', pages)

export default app;

