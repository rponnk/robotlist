import React from 'react';
import Card from './Card';

const CardList = ({users}) => {
    const cardArray = users.map((user, i)=> {
        return ( 
                <Card
                    key={users[i].id}
                    id={users[i].id}
                    name={users[i].name}
                />
        );
    });
    return (
        <div>
         {cardArray}
        </div>
        
    );
}

export default CardList;