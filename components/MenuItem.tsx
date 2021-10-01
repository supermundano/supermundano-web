import MenuLink  from '../models/links'
import styled from 'styled-components'
import dynamic from 'next/dynamic';
const Link = dynamic( ()=>  import('next/link'));

// TODO: Refactorizar (o directamente borrar la clase) MenuLink. Utilizar interface para tipado y pasar los datos en un objeto para desestructurarlos en la definición de MenuItem  https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
const MenuItemStyles = styled.li`
  a{
    cursor: pointer;
    font-weight: 400;
  }
`;

export default function MenuItem(menuLink:MenuLink) {
  const {url, text} = menuLink

  return  (
    <MenuItemStyles>
      <span>
        <Link href={url} >
          <a>{text}</a>
        </Link>
      </span>
    </MenuItemStyles>
  )

}
