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

// import React from 'react'
// import './Nav.css'
// // import { Link } from "react-router-dom";
// import Body1 from './Body1';
// import Body2 from './Body2';
// import Body from './Body';
// import Profile from './Profile';
// import { BrowserRouter as Router, Route,Link} from "react-router-dom";

// import { Menu } from '@material-ui/icons'
// const Nav = () => {
//     return (
//         <>
//         <Router>
//         <nav>
//             <div className="Nav_Container">
//                  <div className="Logo_Container">
//                      <div className="Logo">
//                          <img src={'/assets/Shaastra LOGO.png'} alt="Logo" />
//                      </div>
//                  </div>
//                  <div className="Item_Container">
//                      <ul className="Items">Home</ul>
//                      <ul className="Items">Questionairre</ul>
//                      <ul className="Items">Profile</ul>
//                      <ul className="Items">Login</ul>
//                      <div className="Menu_IconContainer"> 
//                      <div className="Icon">
//                          <Menu/>
//                      </div>
//                      </div>
//                  </div>
//                  <Route exact path="/Body1" component={Body1}/>
//                       <Route path="/Body2" component={Body2}/>
//                       <Route path="/Profile" component={Profile}/>
//                       <Route path="/Body" component={Body}/>
//             </div>
//         </nav>
//         </Router>

                     


//         </>    )
// }

// export default Nav
import React from 'react';
import { Link } from "react-router-dom";
import Body from './Body';
import Body1 from './Body1';
import Body2 from './Body2';
import Profile from './Profile';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './Nav.css';
// import Logo from "./img/Picture1.png";
import { Menu } from '@material-ui/icons';


const Nav = () => {

    return (
        <Router>
        <nav>
          <div>
            <div className="Nav_Container">
                 <div className="Logo_Container">
                     <div className="Logo">
                         <img src={'/assets/Shaastra LOGO.png'} alt="Logo" />
                     </div>
                 </div>
                 <div className="Item_Container">
                     <ul className="Items"> <Link to="/Body"> Home </Link></ul>
                     <ul className="Items"> <Link to="/Body2"> My application </Link></ul>
                     <ul className="Items"> <Link to="/profile"> Profile </Link></ul>
                     <ul className="Items"><Link to="/Body1">Login</Link></ul>
                     <div className="Menu_IconContainer"> 
                     <div className="Icon">
                         <Menu/>
                     </div>
                     </div>
                 </div>
            </div>
                      <Route exact path="/Body" component={Body}/>
                      <Route path="/Body2" component={Body2}/>
                      <Route path="/Profile" component={Profile}/>
                      <Route path="/Body1" component={Body1}/>

            </div>
        </nav>
        </Router> ) }
export default Nav