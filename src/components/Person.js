import React, { Component } from 'react';


let Person = (props) => {
  //console.log(props);
    return(
      <div className="book">
        <p>
          Book Name : {props.bookName}
          <input type="text" className="input" onChange={props.bookChange} value={props.bookName}/>  
        </p>
        <span>
          Author :{props.author}
        </span>
        <input type="text" className="input" onChange={props.authorChange} value={props.author}/>
        <div>
          <button className="books-btn" onClick={props.remove}>Remove this book</button>
        </div>  
       
      </div>
    );
}
export default Person;

/*
export class Customer extends Component{
  constructor(props){
    super(props)
    console.log(props);
    this.cname = props.cname;
    this.cage = props.cage;
  }
  render(){
    return(
      <div>
        <p>
          Customer name : {this.cname} and age is {this.cage};
        </p>
      </div>
    )
  }
}
*/