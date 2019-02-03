import React from 'react';

const Card = ({name, id}) => {
    return (
        <div className='bg-red dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img alt='card' src={`https://robohash.org/${id}?200x200`} />
            <div >
             <p>{name}</p>
            </div>
         </div>
    );
}

export default Card;