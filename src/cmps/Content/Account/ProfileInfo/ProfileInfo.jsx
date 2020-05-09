import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../../Common/Preloader/Preloader";
import defaultPhoto from '../../../../assets/img/userDefaultPhoto.png';
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";

const ProfileInfo = props => {
    if (!props.profile) return <Preloader/>

    return <div>
        <div>
            { props.profile.photos.large ?
                <img src={props.profile.photos.large}/>
              :
                <img src={defaultPhoto}/>
            }
        </div>
        <div>
            <ProfileStatusWithHook />
        </div>
        <div>
            Other info
        </div>
    </div>
}

export default ProfileInfo;