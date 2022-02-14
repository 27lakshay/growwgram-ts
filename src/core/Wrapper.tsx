import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "../styles/globalStyles.css";
import { store } from "../store";
import routes from "../routes/routes";
import { Navbar } from "../common/Navbar";
import { ErrorBoundary } from "../common/ErrorBoundary";
import { ScrollToTop } from "../common/ScrollToTop";

function Wrapper() {
    console.log(routes);
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop>
                        <Navbar />
                        <Routes>
                            {routes.map(({ path, Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))}
                        </Routes>
                    </ScrollToTop>
                </BrowserRouter>
            </Provider>
        </ErrorBoundary>
    );
}

export default Wrapper;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "../store/store";

// import appRoutes from "../routes/routes";
// import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
// import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
// import Navbar from "../components/Navbar/Navbar";

// export default function App() {
//     return (
//         <Provider store={store}>
//             <BrowserRouter>
//                 <ScrollToTop>
//                     <Navbar />
//                     <ErrorBoundary>
//                         <Routes>
//                             {appRoutes.map((item) => (
//                                 <Route path={item.path} {...item.props} element={item.Component} />
//                             ))}
//                         </Routes>
//                     </ErrorBoundary>
//                 </ScrollToTop>
//             </BrowserRouter>
//         </Provider>
//     );
// }
