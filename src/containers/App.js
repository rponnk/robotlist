import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({users: users}))
    }
//anytime we create a method on a component use the arrow function
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }
    render() {
        //destructure to get rid of lines
        const {users, searchfield} = this.state;
        const filteredRobots = users.filter(user => {
            return user.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        //make into terany
        // if (users.length === 0) {
        //     return <h1 className='tc pa6'>Loading</h1>
        // } else {return 
        return users.length === 0 ? <h1 className='tc pa6'>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='mainTitle'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll >
                        <CardList users={filteredRobots} />
                    </Scroll>
                </div>
            );
        }

    }


export default App;
