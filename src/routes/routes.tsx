import { HomePage } from "../views/HomePage";
import { ProfilePage } from "../views/ProfilePage";
// import { NotFoundPage } from "common/NotFoundPage";

const routes = [
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: ":username",
        Component: ProfilePage,
    },
    // {
    //     path: "*",
    //     Component: NotFoundPage,
    // },
];

export default routes;