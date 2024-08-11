import Social from "./Social/Social";
import Copyright from "./Copyright/Copyright";
import classes from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Social/>
			<Copyright outClass={classes.copyright}/>
		</footer>
	);
};

export default Footer;