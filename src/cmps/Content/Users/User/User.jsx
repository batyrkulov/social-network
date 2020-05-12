import React from 'react';
import style from './User.module.css';
import defaultPhoto from '../../../../assets/img/userDefaultPhoto.png';
import {NavLink} from "react-router-dom";

const User = ({user, toggleFollow, followingInProgress}) => {
    return <div>
        <div>
            <div>
                <NavLink to={`/account/${user.id}`}>
                    <img src={user.photos.small != null ? user.photos.small : defaultPhoto}
                         className={style.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button
                        onClick={() => {
                            toggleFollow(user.id, false);
                        }}
                        disabled={followingInProgress.some(id => id === user.id)}
                    >
                        Unfollow
                    </button>
                    : <button
                        onClick={() => {
                            toggleFollow(user.id, true);
                        }}
                        disabled={followingInProgress.some(id => id === user.id)}
                    >
                        Follow
                    </button>
                }
            </div>
        </div>
        <div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </div>
        </div>
    </div>
}

export default User;