import React from 'react';

const Navbar=()=>{
    return(
        <div>
            <nav className='ui raised very padded segment'>
                <h1 className='ui teal inverted segment'>
                Search Engine</h1>
                <div className='ui right floated header'>
                    <button className='ui button'> <a href='/'>Home</a></button>
                    <button className='ui button'> <a href='/About'>About Us</a></button>
                    <button className='ui button'> <a href='/Contact'>Contact Us</a></button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;