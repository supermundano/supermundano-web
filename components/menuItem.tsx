import MenuLink  from '../models/links'
import styled, { withTheme } from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion';

// TODO: Colores con CSS Vars
// TODO: Refactorizar (o directamente borrar la clase) MenuLink. Utilizar interface para tipado y pasar los datos en un objeto para desestructurarlos en la definición de MenuItem  https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
const MenuItemStyles = styled.li`

  span{
    height: 100%;
    width: 100%;
    background-size: 0px;
  }

  a{
    color: var(--brandFour);
    cursor: pointer;
    padding: 0 2vw;
    font-weight: 400;
  }
`;

export default function MenuItem(menuLink:MenuLink) {

  const animate = {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.2
    }
  }

  const initial = {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.3,
      delay: 0.2
    }
  }

  const hover = {
    background: 'linear-gradient(var(--brandFour), var(--brandFour)) bottom/0% 2px no-repeat',
    'background-size': '100% 2px',
    transition: {
      duration: 0.3,
      delay: 0.1
    }
  }

  return  (
    <MenuItemStyles>
      <motion.span initial={ initial } animate={ animate } whileHover={ hover } transition={{ type: "spring", stiffness: 100 }}>
        <Link href={menuLink.url} passHref>
          <a>{menuLink.text}</a>
        </Link>
      </motion.span>
    </MenuItemStyles>
  )

}
