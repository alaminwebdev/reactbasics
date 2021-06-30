import React from 'react';


let Person = (props) => {
    return(
      <div>
        <p>
          Name : {props.name} And Age is {props.age} Years Old 
        </p>
      </div>
    );
}
export default Person;