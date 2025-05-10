import classes from "./Map.module.scss";
import {
	GoogleMap,
	Libraries,
	CircleF,
	useJsApiLoader,
} from "@react-google-maps/api";
import classNames from "classnames";
import { useState } from "react";
import tapIcon from "../../../assets/icons/tap_icon.png";

const libraries: Libraries = ["places"];

const center = {
	lat: 40.59986967331117,
	lng: -73.9720136809053,
};

const Map = () => {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
		libraries,
	});
	const [isBlurred, setIsBlurred] = useState(true);

	if (loadError) {
		return <div>Error loading maps</div>;
	}

	if (!isLoaded) {
		return <div>Loading maps</div>;
	}

	const mapClasses = classNames(classes.map, {
		[classes.blurred]: isBlurred,
	});

	const onBlurredClick = () => {
		setIsBlurred(false);
	};

	return (
		<div className={classes.mapContainer}>
			{isBlurred && (
				<div className={classes.cover} onClick={onBlurredClick}>
					<img className={classes.tapIcon} src={tapIcon} alt={"tap to see"} />
				</div>
			)}
			<GoogleMap
				mapContainerClassName={mapClasses}
				zoom={13}
				center={center}
				options={{
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					scaleControl: false,
					rotateControl: false,
					zoomControl: false,
				}}
			>
				<CircleF
					center={center}
					radius={1000}
					options={{
						fillColor: "#33B006",
						fillOpacity: 0.2,
						strokeColor: "#33B006",
						strokeOpacity: 0.8,
						strokeWeight: 2,
					}}
				/>
			</GoogleMap>
		</div>
	);
};

export default Map;
