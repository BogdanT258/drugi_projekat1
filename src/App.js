import './App.css';
import { Component } from 'react';
import Card from "./Card.js";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: []
    }    
  }
  componentDidMount = async () =>{
    const res = await(await fetch('http://localhost:3004/posts')).json();
    console.log(res);    
    this.setState({
      data: res
    })
  }

  render(){
    return (
      <div>        
        {this.state.data.map(item => {
          <Card key={item.id} object={item}/>
        })}
      </div>      
    )
  }
}

export default App;
