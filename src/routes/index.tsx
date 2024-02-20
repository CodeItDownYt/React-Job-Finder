import { RouteObject } from "react-router";
import Layout from "../layout";
import Home from "../pages/Home";
import SingleJob from "../pages/SingleJob";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <Home />,
					},
					{
						path: "/jobs/:jobId",
						element: <SingleJob />,
					},
				],
			},
		],
	},
];

export default routes;
