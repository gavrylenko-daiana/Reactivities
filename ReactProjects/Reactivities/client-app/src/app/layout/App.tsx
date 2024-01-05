import 'semantic-ui-css/semantic.min.css';
import {Container} from "semantic-ui-react";
import NavBar from "./NavBar.tsx";
import {observer} from "mobx-react-lite";
import {Outlet, useLocation} from "react-router-dom";
import HomePage from "../../feature/home/HomePage.tsx";

function App() {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' ? <HomePage/> : (
                <>
                    <NavBar/>
                    <Container style={{marginTop: '7em'}}>
                        <Outlet/>
                    </Container>
                </>
            )}
        </>
    );
}

export default observer(App)
