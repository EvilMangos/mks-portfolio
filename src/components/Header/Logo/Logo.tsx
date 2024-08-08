import {NavLink} from "react-router-dom";
import logo from "../../../assets/images/logos/logo.png";

const Logo = () => {
    return (
        <NavLink to="/">
            <img src={logo} alt="Logo"/>
        </NavLink>
    )
}

export default Logo;