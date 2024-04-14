import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import routes from './routes'

const app = new Hono()

app.route('/', routes)

export const handler = handle(app)