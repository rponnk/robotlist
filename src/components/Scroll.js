import React from 'react';

const Scroll = (props) => {
    return (
       <div className='scrolly'>
           {props.children}
       </div>
    );
}

export default Scroll;