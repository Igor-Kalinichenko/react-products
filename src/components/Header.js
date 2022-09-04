import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";
import {Navbar} from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

function Header() {
    const {profile} = useContext(ProfileContext);
    return <header className="bg-primary d-flex mb-3">
        <div className={'container d-flex align-items-center justify-content-between'}>
            <Navbar expand="lg">
                <Link className={'navbar-brand'} to="/">Home</Link>
                <Link className={'navbar-brand'} to="/about-us">About us</Link>
                <Link className={'navbar-brand'} to="/contact-us">Contact us</Link>
                <Link className={'navbar-brand'} to="/profile">Profile</Link>
            </Navbar>
        <div><b>{profile.login ? `Welcome, ${profile.login}!` : 'Please Register'}</b></div>
    </div>
    </header>
}

export default Header;