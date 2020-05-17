import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../../Common/Preloader/Preloader";
import defaultPhoto from '../../../../assets/img/userDefaultPhoto.png';
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";
import {NavLink} from "react-router-dom";

const ProfileInfo = props => {
    const onMainPhotoSelected=e=> {
        if (e.target.files.length)
            props.updatePhoto(e.target.files[0]);
    }

    if (!props.profile) return <Preloader/>

    return <div>
        <div>
            { props.profile.photos.large ?
                <img src={props.profile.photos.large}/>
              :
                <img src={defaultPhoto}/>
            }
        </div>
        {props.isOwner && <div>
            <input type={`file`} onChange={onMainPhotoSelected}/>
        </div>}
        <div>
            {props.profile.fullName}
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