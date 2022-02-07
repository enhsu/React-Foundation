import React, { Component } from 'react';
import axios from 'axios'

class FetchClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // lists
            users: [],
            getUsersError: '',
            // single-user
            userId: '1',
            idFromBtnClick: '1',
            user: {},
            getUserError: ''
        }
    }

    componentDidMount() {
        this.getUsers()
        this.getUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.idFromBtnClick !== this.state.idFromBtnClick) {
            this.getUser()
        }
    }

    getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    users: res.data,
                    getUsersError: ''
                })
            })
            .catch(err => {
                this.setState({
                    users: [],
                    getUsersError: err.message
                })
            })
    }

    handleGetUserBtnClick = () => {
        this.setState({
            idFromBtnClick: this.state.userId
        })
    }
    getUser = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.idFromBtnClick}`)
            .then(res => {
                this.setState({
                    user: res.data,
                    getUserError: ''
                })
            })
            .catch(err => {
                this.setState({
                    user: {},
                    getUserError: err.message
                })
            })
    }

    render() {
        const { users, getUsersError, userId, user, getUserError } = this.state
        return (
            <div>
                <h2>Fetch data class component</h2>
                <div className='lists'>
                    <h3>Users List</h3>
                    {
                        users.length !== 0 &&
                        <ul>
                        {
                            users.map(user => (
                                <li key={user.id}>userid: {user.id}, username: {user.name}</li>
                            ))
                        }
                        </ul>
                    }
                    {
                        getUsersError.length !== 0 &&
                        <p>{getUsersError}</p>
                    }
                </div>
                <div className='single-user'>
                    <h3>Single User</h3>
                    <input type="text" placeholder='valid: 1 ~ 10' value={userId} onChange={(e) => this.setState({ userId: e.target.value})}/>
                    <button onClick={() => this.handleGetUserBtnClick()}>Get Single User</button>
                    {
                        Object.keys(user).length !== 0 &&
                        <p>user id: {user.id}, username: {user.name}</p>
                    }
                    {
                        getUserError.length !== 0 &&
                        <p>{getUserError}</p>
                    }
                </div>
            </div>
        );
    }
}
 
export default FetchClassComponent;