import React from 'react';

const UserCard = (props) => {
    return (
        <div className='user-card'>
            <div className='cardHeader'>
                <img src={props.user.avatar_url} alt='Avatar of Github User'/>
                <h2>{props.user.name}</h2>
            </div>
            <div className='cardInfo'>
                <p><strong>Repos:</strong> {props.user.public_repos}</p>
                <p><strong>Followers:</strong> {props.user.followers}</p>
                <p><strong>Following:</strong> {props.user.following}</p>
            </div>
            <button className='git-btn'>
                <a href={props.user.html_url} target='_blank'>Github</a>
            </button>
        </div>
    )
}

export default UserCard;