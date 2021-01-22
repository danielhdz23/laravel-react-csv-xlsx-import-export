import ImportExport from "../pages/ImportExport";

const routes = [
    {
        path: "/",
        exact: true,
        auth: false,
        component: ImportExport,
        fallback: ImportExport,
    },
];

export default routes;
