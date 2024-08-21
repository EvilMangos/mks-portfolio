import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WhoIAm from "./components/WhoIAm/WhoIAm";
import { pagesObject } from "./datasets/pages";
import Contacts from "./components/Contacts/Contacts";
import MyExperience from "./components/MyExperience/MyExperience";
import MySkills from "./components/MySkills/MySkills";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<WhoIAm />} />

				<Route path={pagesObject.contacts.path} element={<Contacts />} />
				<Route
					path={pagesObject.myExperience.path}
					element={<MyExperience />}
				/>
				<Route path={pagesObject.mySkills.path} element={<MySkills />} />
			</Route>
		</Routes>
	);
}

export default App;
