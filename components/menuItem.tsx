import MenuLink  from '../models/links'
import styled, { withTheme } from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion';

// TODO: Colores con CSS Vars
// TODO: Refactorizar (o directamente borrar la clase) MenuLink. Utilizar interface para tipado y pasar los datos en un objeto para desestructurarlos en la definición de MenuItem  https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
const MenuItemStyles = styled.li`

  a{
    cursor: pointer;
    font-weight: 400;
  }
`;

export default function MenuItem(menuLink:MenuLink) {

  return  (
    <MenuItemStyles>
      <span>
        <Link href={menuLink.url} passHref>
          <a>{menuLink.text}</a>
        </Link>
      </span>
    </MenuItemStyles>
  )

}
