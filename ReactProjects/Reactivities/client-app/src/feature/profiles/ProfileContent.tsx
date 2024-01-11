import { observer } from 'mobx-react-lite';
import { Tab } from 'semantic-ui-react';
import { Profile } from '../../app/models/profile';
import ProfilePhotos from './ProfilePhotos';
import ProfileAbout from "./ProfileAbout.tsx";
import ProfileFollowings from "./ProfileFollowings.tsx";
import {useStore} from "../../app/stores/store.ts";

interface Props {
    profile: Profile
}

export default observer(function ProfileContent({profile}: Props) {
    const {profileStore} = useStore();

    const panes = [
        { menuItem: 'About', render: () => <ProfileAbout />  },
        { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} />  },
        { menuItem: 'Events', render: () => <Tab.Pane>Events Content</Tab.Pane> },
        { menuItem: 'Followers', render: () => <ProfileFollowings /> },
        { menuItem: 'Following', render: () => <ProfileFollowings /> },
    ];

    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
            onTabChange={(_, data) => profileStore.setActiveTab(data.activeIndex as number)}
        />
    )
})