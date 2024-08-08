import {NavLink} from "react-router-dom";
import logo from "../../../assets/images/logos/logo.png";
import classes from "./Logo.module.scss";

const Logo = () => {
    return (
        <NavLink className={classes.logo} to="/">
            <img src={logo} alt="Logo"/>
        </NavLink>
    )
}

export default Logo;