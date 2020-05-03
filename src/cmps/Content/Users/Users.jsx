import React from 'react';
import style from './Users.module.css';
import defaultPhoto from '../../../assets/img/userDefaultPhoto.png';
import {NavLink} from "react-router-dom";

const Users = (props)=> {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p => <span onClick={() => {props.onPageChanged(p)}} className={props.currentPage === p ? style.selectedPage : ''} key={p}>
                            {p},
                        </span>
                )
            }
        </div>
        {
            props.users.map(user => <div key={user.id}>
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
                                    props.toggleFollow(user.id, false);
                                    }}
                                disabled={props.followingInProgress.some(id=>id===user.id)}
                            >
                                Unfollow
                            </button>
                            : <button
                                onClick={() => {
                                        props.toggleFollow(user.id, true);
                                    }}
                                disabled={props.followingInProgress.some(id=>id===user.id)}
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
            </div>)
        }
    </div>
}

export default Users;