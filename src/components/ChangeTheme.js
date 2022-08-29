import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import ThemeContext from "../context/ThemeContext";

function ChangeTheme() {
    const {theme, setTheme, profile, setMessage} = useContext(ThemeContext);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showNotice, setShowNotice] = useState(false);
    function showInfo() {
        profile.login && profile.email ? setShowConfirm(true) : setShowNotice(true);
        setTimeout(() => {setShowConfirm(false)}, 3000);
        setTimeout(() => {setShowNotice(false)}, 3000);
        setMessage(profile.login && profile.email ? 'You successfully confirmed your order' : 'Please, fill your profile');
    }

    return <>
        <div className="d-flex justify-content-between">
            <Button variant="primary" onClick={() => showInfo()}>Confirm</Button>
            <Button variant = {theme === 'bg-light' ? "dark" : "default"}
                onClick={() => setTheme(theme === 'bg-light' ? 'bg-dark' : 'bg-light')}>Change Theme</Button>
        </div>
        <div className = {showConfirm ? "d-block" : "d-none"}>Hello, {profile.login}. Your order information was sent to: {profile.email}</div>
        <div className = {showNotice ? "d-block" : "d-none"}>Please, fill your profile</div>
        
    </>
}

export default ChangeTheme;