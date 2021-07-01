import './App.css';
import React, { Component }  from 'react';
import Person from './components/Person';
import {Customer} from './components/Person';

// // functional component 
//ctrl+k+c for comment and crtl+k=u for uncomment  

// let App = ()=>{
//   //let person_name = prompt("Enter your name");
//   //let person_age = parseInt( prompt("Enter your age "));
//   return(
//     <div className="App">
//       <h1>
//         Hello it's a text from header function
//       </h1>

//    <Person name=""/*{person_name}*/ age="" /*{person_age}*//>
//       <Person name= "Mohammad Arif" age="25"/>
//       <Person name="Rahim Talukdar" age="29"/>

//       <Customer cname= "Sohel Rana" cage="75"/>
//       <Customer cname= "Sifat Talukdar" cage="57"/>
//     </div>
//   );
// }

class App extends Component{
  state = {
    books: [
      { id: 1,  bookName:"The Christmas Pig" , author: "JK Rowling"},
      { id: 2, bookName:"Maveric Messiah" , author: "Ramesh Kandula"},
      { id: 3, bookName:"ASOCA: A Sutra" , author: "Irwin Allan Sealy’s"},
      { id: 4, bookName:"Kam Sutra" , author: "Indian Baincod"}
    ]
  }
  // constructor(){
  //   super();
  // }

  //change information with input
  inputChangeBook = (event, index) =>{
    //copy books object  into new_book_obj and inside as a object  
    const new_single_book = {
      ...this.state.books[index]
    }
    new_single_book.bookName = event.target.value;
    //copy books array  into new_book array
    const new_books =[...this.state.books];
    new_books[index]= new_single_book

    this.setState({
       books : new_books
    });

  }
  //change information with input
  inputChangeAuthor= (event, index)=>{
    const new_author = {
      ...this.state.books[index]
    }
    new_author.author =event.target.value;
    const new_books = [...this.state.books];
    new_books[index]= new_author;
    this.setState({
      books:new_books
    })
  }
  


  //remove book with click
  removeBookInput = index =>{
    //const new_book_obj = this.state.books.slice();
    //copy books array  into new_book_obj   
    const new_book_obj =[...this.state.books];
    new_book_obj.splice(index,1);
    this.setState({
      books : new_book_obj
    });
  };

  render(){

    const books_obj = this.state.books;
    const books_map = books_obj.map( (books,index) => {
      //console.log(books.bookName)
      return(
        <Person 
          bookName= {books.bookName}
          author = {books.author}
          remove = { ()=>this.removeBookInput(index) }
          key={books.id}
          bookChange = { (event) => this.inputChangeBook(event,index)}
          authorChange = {(event) => this.inputChangeAuthor(event, index)}
        />
      )

    });
    return(
      <div className="App">
        <h2>
          List of Famous Books and their Authors
        </h2>
        {books_map}   
      </div>
    )
  }
}

export default App;
