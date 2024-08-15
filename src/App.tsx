import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WhoIAm from "./components/WhoIAm/WhoIAm";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<WhoIAm />} />
			</Route>
		</Routes>
	);
}

export default App;
