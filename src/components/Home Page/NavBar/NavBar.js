import React from 'react';
import { signOut } from 'firebase/auth';
import '../NavBar/Navbar.css'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const NavBar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
        <div className='navBar'>
             <Navbar sticky='top' collapseOnSelect expand="lg" bg="warning" variant="light">
  <Container>
   
 <NavLink className='text-decoration-none text-dark fs-3 me-3' to='/'>BabuBhai WareHouse</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/blogs'>Blogs</Link>
      <Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/aboutme'>About</Link> */}
      {/* <a className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' href="/home#services">Services</a> */}
      
      
    </Nav>
    <Nav>
    <Link to='/home' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Home</Link>
    <Link to='/blogs' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Blogs</Link>
    {/* <Link to='/login' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Sign-In</Link>
<Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/register'>Register</Link>  */}
    {/* {user? <p
    className='my-auto text-danger signout' onClick={logout}>Log-Out</p>:<Link to='/signin' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Sign-In</Link>}
    <Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/signup'>Register</Link> */}
    </Nav>
    <Nav>
    {user? <div className='d-flex nAv'>
      <p className='logOut my-auto text-danger signout' onClick={logout}>Log-Out</p>
      <Link to='/manageitems' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Manage-Items</Link>
      <Link to='/additems' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Add-Items</Link>
      <Link to='/myitems' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>My-Items</Link>
    </div>:<Link to='/login' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Sign-In</Link>}
    <Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/register'>Register</Link> 
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavBar;