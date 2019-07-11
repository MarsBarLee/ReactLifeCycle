import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      items:[],
      isLoaded: false,
    }
  }

  async componentDidMount() {
    var response = await fetch('http://jsonplaceholder.typicode.com/users')
    const data = await response.json() // the above webpage is now a variable named json
    console.log(data)
    // this.setState({items:json.data}) // needs to also change isLoaded boolean
    this.setState({
      items:data, //replace this empty array, [] to json.results. NEEDS to be :
      isLoaded: true
    })
  }
  // componentDidMount () { // attach the data we get from the API to the state
  //   fetch('http://jsonplaceholder.typicode.com/users') // grabbing this request
  //   .then(res => { // res is response. now we do a callback method
  //     return res.json(); // once we make a request, we make a reponse. take reponse, turn it into json, then go to data
  //   })
  //   .then(data => {; // array that has objects inside each indices, each object has key-value pairs
  //     console.log(data); 
  //     this.setState({
  //       isLoaded: true, // change isLoaded to true before data is populated
  //       items: data,
  //     });
  //   });
  // }

  render() { //object deconstruction
    var { isLoaded , items} = this.state // shorthand so don't need 
    if (!isLoaded) { // if not loaded
      return <div>Loading...</div> // Like load bar and or spinning circle cursor
    } else { // map applies a function to each element in an array and returns a new array
      return (
        <div className="App">
            <div className="Names">
              <ul>
                {items.map(el => {
                  return (
                    <li key={el.id}>
                      Name: {el.name} | UserName: {el.username} | {' '} <a href={`https://${el.website}`}> Website</a>
                    </li>
                  )
                })}
              </ul>
            </div>
        </div>
      )
    } 
  }
}

export default App;