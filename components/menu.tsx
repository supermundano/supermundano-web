import styled from 'styled-components'
import { InferGetStaticPropsType } from 'next'
import MenuLink from '../models/links'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import MenuItem from './menuItem';

const MenuUl = styled.ul`
  list-style: none;
  padding-left: 0px;
`;


export default function Menu( menuItems:MenuLink[] ) {
    return  (
      <div>
          <MenuUl>
          {Object.entries(menuItems).map(function(menuItem, index){
            
            return <MenuItem key={index} text={menuItem[1].text} url={menuItem[1].url}></MenuItem>
          })}
          </MenuUl>
      </div>
    )
}


