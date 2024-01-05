import {Grid} from "semantic-ui-react";
import {useStore} from "../../../app/stores/store.ts";
import LoadingComponents from "../../../app/layout/LoadingComponents.tsx";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar.tsx";
import ActivityDetailedChat from "./ActivityDetailedChat.tsx";
import ActivityDetailedInfo from "./ActivityDetailedInfo.tsx";
import ActivityDetailedHeader from "./ActivityDetailedHeader.tsx";

export default observer(function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !activity) return <LoadingComponents />;

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo activity={activity} />
                <ActivityDetailedChat />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
})