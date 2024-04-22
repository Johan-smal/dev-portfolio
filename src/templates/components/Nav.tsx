import type { FC } from "hono/jsx";
import { Link } from "./common/Link";

const BurgerMenu: FC = () => (
  <div class="
    md:hidden
    absolute 
    top-3
    z-50 
    block 
    h-[2px] 
    w-6
    bg-gray-900
    content-[''] 
    before:absolute
    before:top-[-0.50rem]
    before:z-50 
    before:block
    before:h-full 
    before:w-full 
    before:bg-gray-900
    before:transition-all 
    before:duration-200 
    before:ease-out 
    before:content-['']
    after:absolute 
    after:right-0 
    after:bottom-[-0.50rem] 
    after:block after:h-full 
    after:w-full 
    after:bg-gray-900
    after:transition-all 
    after:duration-200 
    after:ease-out 
    after:content-[''] 
    peer-checked:bg-transparent 
    before:peer-checked:top-0 
    before:peer-checked:w-full 
    before:peer-checked:rotate-45 
    before:peer-checked:transform 
    after:peer-checked:bottom-0 
    after:peer-checked:w-full 
    after:peer-checked:-rotate-45 
    after:peer-checked:transform"
  />
);

type ItemProps = {
  title: string
  route: string
}
const NavItem: FC<ItemProps> = ({ title, route }) => {
  return <li class="md:px-3">
    <Link route={route}>{title}</Link>
  </li>
}

type NavProps = {
  items: ItemProps[]
}

export const Nav: FC<NavProps> = ({ items }) => {
  return (
    <nav class="fixed w-6 h-6 top-5 left-5 md:w-screen md:left-0 md:top-0">
      <label class="relative cursor-pointer" for="mobile-menu">
        <input class="peer absolute w-full h-full opacity-0 cursor-pointer" type="checkbox" id="mobile-menu" />
        <BurgerMenu />
        <div class="
          hidden
          peer-checked:block
          md:block
        ">
          <menu class="relative top-8 md:flex md:justify-center">
            {items.map(item => <NavItem {...item}/>)}
          </menu>
        </div>
      </label>
    </nav>
  )
}