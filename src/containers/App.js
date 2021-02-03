import React, {useState, useEffect} from 'react'
import CardList from '../components/CardList.js'
import SearchBox from '../components/searchBox.js'
import Scroll from '../components/Scroll'
import  './App.css'
import ErrorBoundry from '../components/ErrorBoundry'
// import { robots } from './robots.js'


function App(){
    
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => 
            response.json())
        .then(users => 
            setRobots(users));
        }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())})
        
    return !robots.length ?
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f2' >RoboFriends </h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )

    }
    



export default App;