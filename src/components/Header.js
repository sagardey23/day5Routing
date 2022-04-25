import React from 'react';
import {Link} from 'react-router-dom';

function Header (){
    return(
        <>
        <ul type='none' className='header-ul-parent'>
            <li className='header-li'><Link to='/home' > Home</Link></li>
            <li className='header-li'><Link to='/contact' > contact</Link></li>
            <li className='header-li'><Link to='/about'> About</Link></li>

        </ul>
        {/* <Link to='/'>Home</Link>
        <Link to='/contact'> Contact</Link>
        <Link to='/about'> About</Link> */}
        </>
    )
}
export default Header