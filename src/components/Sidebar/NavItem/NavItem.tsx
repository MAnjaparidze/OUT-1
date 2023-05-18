import React from 'react'
import { NavLink } from 'react-router-dom'
type Props = {
  item: {
    linkTo: string,
    tabName: string
    navItemSVG: (isActive: boolean) => void,
  }
}

const NavItem = (props: Props) => (
  <NavLink to={props.item.linkTo} className='flex items-center relative h-[60px] cursor-pointer'>
    {
      ({ isActive }) => (
        <>
          {props.item.navItemSVG(isActive)}

          <div className={`flex items-center justify-center w-16 h-[60px] rounded-full ${isActive ? 'bg-light-green' : 'bg-light-gray'} transition-custom duration-300 absolute px-4 left-[68px] w-48`}>
            <span className='color-dark-green font-bold '>
              {props.item.tabName}
            </span>
          </div>
        </>
      )
    }
  </NavLink>
);

export default NavItem;