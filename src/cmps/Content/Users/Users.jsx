import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import defaultPhoto from '../../../assets/img/userDefaultPhoto.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {
                    pages.map(p=><span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage===p ? style.selectedPage : ''} key={p}>
                            {p},
                        </span>
                    )
                }
            </div>
            {
                this.props.users.map(user=><div key={user.id}>
                    <div>
                        <div>
                            <img src={user.photos.small!=null ? user.photos.small : defaultPhoto} className={style.userPhoto} />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={()=>{this.props.unfollow(user.id)}}>Unfollow</button>
                                : <button onClick={()=>{this.props.follow(user.id)}}>Follow</button>
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
}

export default Users;