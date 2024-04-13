import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import LineSvg from '../../assets/svg/line';
import LogoSvg from '../../assets/svg/logo';
import '../../pages/SignUp/signUp.css';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
          <div className='container'>
            <Navbar light expand="md" className="position-relative d-flex justify-content-between w-[120%] bg-white">
                <NavbarBrand href="/">
                    <div className="w-[100%] h-22 my-10 pt-4 px-5">
                        <LogoSvg />
                    </div>
                </NavbarBrand>

                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto d-flex pt-3 py-2 ml-2 tabs" navbar>
                        <NavItem>
                            <NavLink href="#">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Our Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact Us</NavLink>
                        </NavItem>
                        <LineSvg />
                        <NavItem>
                            <NavLink href="#" id="login">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <div className="py-7 pt-5 d-flex signup">
                <h1>Sign Up</h1>
                {/* <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>4</span>
            <span>6</span>
            <span>7</span> */}
            </div>
          </div> 
        </>
    );
};

export default Header;
