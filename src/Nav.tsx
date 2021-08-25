// import React from 'react'
// import './Nav.css'
// // import Logo from "/assets/Shaastra LOGO.png"
// import { Menu } from '@material-ui/icons'
// const Nav = () => {
//     return (
//         <>
//         <nav>
//             <div className="Nav_Container">
//                  <div className="Logo_Container">
//                      <div className="Logo">
//                          <img src={'/assets/Shaastra LOGO.png'} alt="Logo" />
//                      </div>
//                  </div>
//                  <div className="Item_Container">
//                      <ul className="Items">Home</ul>
//                      <ul className="Items">Questionsarre</ul>
//                      <ul className="Items">Profile</ul>
//                      <ul className="Items">Login</ul>
//                      <div className="Menu_IconContainer"> 
//                      <div className="Icon">
//                          <Menu/>
//                      </div>
//                      </div>
//                  </div>
//             </div>
//         </nav>
//         </>    )
// }

// export default Nav

import React from 'react'
import './Nav.css'

import { Menu } from '@material-ui/icons'
const Nav = () => {
    return (
        <>
        <nav>
            <div className="Nav_Container">
                 <div className="Logo_Container">
                     <div className="Logo">
                         <img src={'/assets/Shaastra LOGO.png'} alt="Logo" />
                     </div>
                 </div>
                 <div className="Item_Container">
                     <ul className="Items">Home</ul>
                     <ul className="Items">Questionairre</ul>
                     <ul className="Items">Profile</ul>
                     <ul className="Items">Login</ul>
                     <div className="Menu_IconContainer"> 
                     <div className="Icon">
                         <Menu/>
                     </div>
                     </div>
                 </div>
            </div>
        </nav>
        </>    )
}

export default Nav
