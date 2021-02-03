import React  from 'react';


const CardList = ({robots}) => {


    const listRobots = robots.map((robot) =>
    <div key={robot.id} className='tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5'>
            <img alt='robot' src={`https://robohash.org/${robot.id}}?200x200`}/>
            <div>
                <h2>{robot.name}</h2>
                <p>{robot.email}</p>
            </div>
        </div>
    
    );
    
    return (
        <div>
        {listRobots}
        </ div>
    );
}

export default CardList