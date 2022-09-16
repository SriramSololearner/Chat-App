import React from 'react'

const Searchbar = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder='Find a user' />
            </div>
            <div className="userChat">
                <img
                    src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="n0-img"
                />
                <div className="userChatInfo">
                    <span>jane</span>
                </div>
            </div>
        </div>
    );
}

export default Searchbar