import { Hono } from 'hono'
import { Switch } from '../templates/views/Switch'

const app = new Hono()

app.get('/switch', (c) => c.render(<Switch />))

export default app;

