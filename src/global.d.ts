// For SCSS modules
declare module "*.module.scss" {
	const classes: { [key: string]: string };
	export default classes;
}

// For PNG files
declare module "*.png" {
	const src: string;
	export default src;
}

// For SVG files
declare module "*.svg" {
	const content: string;
	export default content;
}
