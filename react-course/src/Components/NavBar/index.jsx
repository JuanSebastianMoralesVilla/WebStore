import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
const Navbar=() =>{
    const context= useContext(ShoppingCartContext)
    
    const activeStyle='underline underline-offset-4'
    
return (

   

    <nav className= 'flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-green-600'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg' >
                <NavLink 
                to= '/'>
                   Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/'
                onClick={()=> context.setSearchByCategory()}
                className={({isActive})=>
                 isActive ? activeStyle: undefined
                 }>
                   All
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/clothes'
                onClick={()=> context.setSearchByCategory('clothes')}
                className={({isActive})=>
                isActive ? activeStyle: undefined
                }>
                   Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/electrónica'
                onClick={()=> context.setSearchByCategory('electrónica')}
                className={({isActive})=>
                isActive ? activeStyle: undefined
                }>
                   Electrónica
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/furniture'
                onClick={()=> context.setSearchByCategory('furniture')}
                className={({isActive})=>
                isActive ? activeStyle: undefined
                }>
                   Furniture
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/jewelery'
                onClick={()=> context.setSearchByCategory('jewelery')}
                className={({isActive})=>
                isActive ? activeStyle: undefined
                }>
                   jewelery
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/others'
                onClick={()=> context.setSearchByCategory('others')}
                className={({isActive})=>
                isActive ? activeStyle: undefined
                }>
                   Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li className='text-black/60' >
                Sebastian Morales
            </li>
            <li>
                <NavLink 
                to= '/my-orders'
                className={({isActive})=>
                 isActive ? activeStyle: undefined
                 }>
                   My Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/my-account'
                className={({isActive})=>
                 isActive ? activeStyle: undefined
                 }>
                   My account
                </NavLink>
            </li>
            <li>
                <NavLink to= '/sign-in'
                className={({isActive})=>
                isActive ? activeStyle: undefined
                }>
                   Sign In
                </NavLink>
            </li>
            <li className='flex items-center'>
            <ShoppingCartIcon className="h-6 w-6 text-black" /> 
           <div>{context.cartProducts.length}</div>
            </li>
        </ul>
    </nav>
)
}


export default Navbar
