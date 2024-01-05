import {useEffect} from "react";
import 'semantic-ui-css/semantic.min.css';
import {Container} from "semantic-ui-react";
import NavBar from "./NavBar.tsx";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard.tsx";
import LoadingComponents from "./LoadingComponents.tsx";
import {useStore} from "../stores/store.ts";
import {observer} from "mobx-react-lite";

function App() {
    const { activityStore } = useStore();

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore])

    if (activityStore.loadingInitial) return <LoadingComponents content='Loading app...' />

    return (
        <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <ActivityDashboard />
            </Container>
        </>
    );
}


export default observer(App)
