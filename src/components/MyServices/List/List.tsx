import { servicesArray } from "../../../datasets/services";
import ListItem from "./ListItem/ListItem";
import { useState } from "react";
import Text from "./Text/Text";
import classes from "./List.module.scss";
import classNames from "classnames";

interface ListProps {
	outClass: string;
}

const List = ({ outClass }: ListProps) => {
	const [activeElement, setActiveElement] = useState(servicesArray[0].id);
	const servicesRendered = servicesArray.map((service) => (
		<ListItem
			key={service.id}
			id={service.id}
			title={service.title}
			icon={service.image}
			selectedIcon={service.imageSelected}
			alt={service.alt}
			isActive={activeElement === service.id}
			setActiveElement={setActiveElement}
		/>
	));

	const containerClasses = classNames(classes.container, outClass);
	return (
		<div className={containerClasses}>
			<div className={classes.line}>{servicesRendered.slice(0, 4)}</div>
			<Text
				text={
					servicesArray.find((service) => service.id === activeElement).text
				}
			/>
			<div className={classes.line}>{servicesRendered.slice(4, 8)}</div>
		</div>
	);
};

export default List;
