import MenuLink  from '../models/links'
import styled from 'styled-components'
import Link from 'next/link'

// TODO: Colores con CSS Vars
// TODO: Refactorizar (o directamente borrar la clase) MenuLink. Utilizar interface para tipado y pasar los datos en un objeto para desestructurarlos en la definición de MenuItem  https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
const MenuItemStyles = styled.a`
    color: #707070;
    cursor: pointer;
    padding: 0 2vw;
    font-weight: 400;
`;

export default function MenuItem(menuLink:MenuLink) {

    return  <li><Link href={menuLink.url} passHref><MenuItemStyles>{menuLink.text}</MenuItemStyles></Link></li>

}