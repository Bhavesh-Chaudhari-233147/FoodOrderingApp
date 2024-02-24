import React from 'react'
import {data} from "../../Data/MenuList"
import MenuItem from '../MenuItem/MenuItem'
import "../../Styles/Menu.css"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
            <div className='menuList'>
                {data.map((menuItem,key) => {
                    return(
                        <MenuItem   
                            key={key}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                        />
                    )
                })}
            </div>
        </div>
  )
}

export default Menu