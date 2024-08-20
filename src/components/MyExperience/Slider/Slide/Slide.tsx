import Card from "./Card/Card";
import Description from "./Description/Description";
import classes from "./Slide.module.scss";

const Slide = ({name, logo, role, startDate, finishDate, stack, description, isActive}) => {
	return (
		<div className={classes.container}>
			<Card name={name} logo={logo} role={role} startDate={startDate} finishDate={finishDate} stack={stack} isActive={isActive} />
			<Description text={description} outClass={classes.description}/>
		</div>
	);
};

export default Slide;