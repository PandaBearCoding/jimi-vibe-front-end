import React from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
            <div>
                NavBar
                <ul>
                    <NavLink to={{pathname: "/products"}}>
                        <li>Available Products</li>
                    </NavLink>
                    {/* <NavLink to={{pathname: `users/${user.id}/favorites`}}> */}
                        <li>My Favorites</li>
                    {/* </NavLink> */}
                    {/* <NavLink to={{pathname: `users/${user.id}/carts`}}> */}
                        <li>My Cart</li>
                    {/* </NavLink> */}
                    {/* <NavLink to={{pathname: "/contact"}}> */}
                        <li>Contact Seller</li>
                    {/* </NavLink> */}
                    {/* <NavLink to={{pathname: `/users/${users.id}`}}> */}
                        <li>My Profile</li>
                    {/* </NavLink> */}
                    {/* <NavLink to={{pathname: "/welcome"}> */}
                        <li>Sign Out</li>
                    {/* </NavLink> */}
                </ul>
            </div>
        )
    }
}

export default NavBar;