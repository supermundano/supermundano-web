import styled from 'styled-components'
import MenuLink from '../models/links'
import dynamic from 'next/dynamic';
const MenuItem = dynamic( ()=>  import('./MenuItem'));

const MenuStyles = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

export default function Menu( menuItems:MenuLink[] ) {
    return  (
      <div>
          <MenuStyles>
          {Object.entries(menuItems).map(function(menuItem, index){
            return <MenuItem key={index} text={menuItem[1].text} url={menuItem[1].url}></MenuItem>
          })}
          </MenuStyles>
      </div>
    )
}


