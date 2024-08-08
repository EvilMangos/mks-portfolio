export default function(path: string) {
	switch (path) {
		case "/":
			return "Who I Am";
		case "/services":
			return "My Services";
		default:
			return null;
	}
}