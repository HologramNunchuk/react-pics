import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async (term) => {

   // Using async await. To use the async await place the async keyword in front of the method name. You find what's returning or what ever is taking time to resolve, in which here is the network request with .get(), and you put the await keyword in front of that.What ever gets returned is assigned to some variable, which is response in the case and you can freely work with that var later on.
   // First argument is where you want to send the request to. Second argument is an object that'll customize this request
   const response = await unsplash.get('/search/photos', {
     params: { query: term }

     })

    this.setState({images: response.data.results})


  // Using a different method below by waiting for promise and using .then()
  // First argument is where you want to send the request to. Second argument is an object that'll customize this request.
  //  axios.get('https://api.unsplash.com/search/photos', {
  //    params: {query: term},
  //    headers : {
  //      Authorization: 'Client-ID LrCXacIA1MNIqBvPjr1gPTp4LGdF4E3W6fHeSSnwVzA'
  //    }
  //  }).then((response) => {
  //      console.log(response.data.results);
  //    })
 }
  render() {
   return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      <ImageList images={this.state.images}/>
    </div>
    );
  }
}

export default App;
