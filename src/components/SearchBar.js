import React from 'react';

class SearchBar extends React.Component {
state = {term: ''}

  //   // onInputChange(event) {
  //   //   /* this contains the text that the user just added into the input field*/
  //   //   console.log(event.target.value);
  //   // }

onFormSubmit = (event) => {
  event.preventDefault();
 this.props.onSubmit(this.state.term);
}

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
          <label>Image Search</label>
          {/* // below is a way of doing what onInputChange does but in shorter syntax */}
        <input type='text' onChange={(e) => this.setState({term: e.target.value})}
        value={this.state.term}
        />
        {/* <input type="text" onChange={(e) => console.log(e.target.value)}/> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

  //   //  event object bring passed
  //   // onInputChange(event) {
  //   //   /* this contains the text that the user just added into the input field*/
  //   //   console.log(event.target.value);
  //   // }
  //   // If you wanted to default the input value in the search bear you could set it here in the state term
  //   // state = {term:'bankai'}
  //   state = {
  //     term: ''
  //   }

  //   //the arrow function automatically binds the value of 'this' to all the code inside the function and to each new instance will have its own 'this'
  //   onFormSubmit = (event) => {
  //     // preventDefault() will stop the form from being submitted when the user presses the enter key and will stop the whole page from refreshing. You never want a form to automatically submit itself
  //     event.preventDefault();
  //     // when making use of props in a class you must include 'this'. Below is a reference to the function being passed to onSubmit that has a term being passed to it
  //     this.props.onSubmit(this.state.term);
  //   }

  //  class SearchBar extends React.Component {

  //    //  event object bring passed
  //    // onInputChange(event) {
  //    //   /* this contains the text that the user just added into the input field*/
  //    //   console.log(event.target.value);
  //    // }
  //    // If you wanted to default the input value in the search bear you could set it here in the state term
  //    // state = {term:'bankai'}
  //    state = {
  //      term: ''
  //    }

  //    //the arrow function automatically binds the value of 'this' to all the code inside the function and to each new instance will have its own 'this'
  //    onFormSubmit = (event) => {
  //      // preventDefault() will stop the form from being submitted when the user presses the enter key and will stop the whole page from refreshing. You never want a form to automatically submit itself
  //      event.preventDefault();
  //      // when making use of props in a class you must include 'this'. Below is a reference to the function being passed to onSubmit that has a term being passed to it
  //      this.props.onSubmit(this.state.term);
  //    }

  //    render() {
  //      return ( <
  //        div className = "ui segment" >
  //        <
  //        form onSubmit = {
  //          this.onFormSubmit
  //        }
  //        className = "ui form" >
  //        <
  //        div className = "field" >
  //        <
  //        label > Image Search < /label> {
  //          /* every time someone changes the text inside of the search input onInputChange will be called/invoked. This callback will be ran with one argument being passed to it automatically. We refer to that object as the event object. This is a normal JS object that contains all the info about the event that just occurred*/ } <
  //        input type = 'text'
  //        value = {
  //          this.state.term
  //        }
  //        onChange = {
  //          (e) => this.setState({
  //            term: e.target.value
  //          })
  //        }
  //        /> {
  //          /* Below with the input is another way to define the function besides doing it in the class. If it's just a single line of code that executes on an event, you can write it out like thus and not have to define a function in the class. The 'e' stands for the event object */ } {
  //          /* <input type="text" onChange={(e) => console.log(e.target.value)}/> */ } <
  //        /div> <
  //        /form> <
  //        /div>
  //      );
  //    }
  //  }

  //  export default SearchBar;

  //  //  event object bring passed
  //  // onInputChange(event) {
  //  //   /* this contains the text that the user just added into the input field*/
  //  //   console.log(event.target.value);
  //  // }
  //  // If you wanted to default the input value in the search bear you could set it here in the state term
  //  // state = {term:'bankai'}
  //  state = {
  //    term: ''
  //  }

  //  //the arrow function automatically binds the value of 'this' to all the code inside the function and to each new instance will have its own 'this'
  //  onFormSubmit = (event) => {
  //    // preventDefault() will stop the form from being submitted when the user presses the enter key and will stop the whole page from refreshing. You never want a form to automatically submit itself
  //    event.preventDefault();
  //    // when making use of props in a class you must include 'this'. Below is a reference to the function being passed to onSubmit that has a term being passed to it
  //    this.props.onSubmit(this.state.term);
  //  }
