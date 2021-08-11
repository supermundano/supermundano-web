import MenuLink  from '../models/links'
import styled from 'styled-components'
import Link from 'next/link'


const MenuItemLink = styled.a`
    color: #707070;
    cursor: pointer;
    padding: 0 0.5rem;
`;

export default function MenuItem(menuLink:MenuLink) {

    return  <li><Link href={menuLink.url}><MenuItemLink>{menuLink.text}</MenuItemLink></Link></li>
    
}