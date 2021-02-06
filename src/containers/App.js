import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/searchBox.js';
import Scroll from '../components/Scroll';
import  './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from './robots.js'
import { setSearchField } from '../actions.js';



const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

function App(props){
    
    const [robots, setRobots] = useState([])
    // const [searchField, setSearchField] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => 
            response.json())
        .then(users => 
            setRobots(users));
        }, [])

    // const onSearchChange = (event) => {
    //     setSearchField(event.target.value)
    // }

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(props.searchField.toLowerCase())})
        
    return !robots.length ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f2' >RoboFriends </h1>
                <SearchBox searchChange={props.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    };
    



export default connect(mapStateToProps, mapDispatchToProps)(App);