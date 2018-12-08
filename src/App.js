import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Banner from "./components/Banner"
import './App.css';
// import Main from "./components/Main"


class App extends Component {
  render() {
    return (
        <div className="App">
       
        <Navbar></Navbar> 
        <Banner></Banner>
        <Sidebar></Sidebar>
        {this.props.children} 
        
       
       	
       	 
        
      	
      	
     	</div>
    )
  }
}

export default App;




