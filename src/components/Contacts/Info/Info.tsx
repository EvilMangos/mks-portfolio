import classes from "./Info.module.scss";

const Info = () => {
	return (
		<div className={classes.container}>
			<div className={classes.subContainer}>
				<h4>Address</h4>
				<div className={classes.info}>
					<div className={classes.line}>
						<span className={classes.valueElement}>
							501 11th St, Brooklyn, NY 11215
						</span>
					</div>
				</div>
			</div>
			<div className={classes.subContainer}>
				<h4>Contact</h4>
				<div className={classes.info}>
					<div className={classes.line}>
						<span className={classes.labelElement}>Phone:</span>{" "}
						<a href={"tel:13474773525"} className={classes.valueElement}>
							347-477-3525
						</a>
					</div>
					<div className={classes.line}>
						<span className={classes.labelElement}>Email:</span>{" "}
						<a
							href={"mailto:maksymkhamets.career@gmail.com"}
							className={classes.valueElement}
						>
							maksymkhamets.career@gmail.com
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
