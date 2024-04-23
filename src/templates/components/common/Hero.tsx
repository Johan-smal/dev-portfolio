import { FC } from "hono/jsx";

type HeroProps = {
  title: string
  content: string
}

export const Hero: FC<HeroProps> = ({ title, content }) => {
  return (
    <div class="hero h-screen min-h-96">
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{ title }</h1>
          <p className="mb-5">{ content }</p>
        </div>
      </div>
    </div>
  )
}