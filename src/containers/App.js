import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/searchBox.js';
import Header from '../components/Header.js'
import Scroll from '../components/Scroll';
import  './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import { setRobots, setSearchField } from '../actions.js';



const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.getRobots.robots,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: (users) => dispatch(setRobots(users))
    }
}

function App(props){

    let onRequestRobots = props.onRequestRobots

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => 
            response.json())
        .then(users => 
            onRequestRobots(users));
    }, [])

    // const onSearchChange = (event) => {
    //     setSearchField(event.target.value)
    // }

    const filterRobots = props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(props.searchField.toLowerCase())})
    
    

    return !props.robots ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <Header/>
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