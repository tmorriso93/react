import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const API_KEY = "c3be223953ae22d23e85b16aa9642e4f";


class App extends Component {

  state = {
    recipes: []
  }
  //method responsible for making the Api call
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault(); // this prevents the page from refreshing on click
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    const data = await api_call.json();
    this.setState({ recipes: data.recipes }); //setting the state after click
    console.log(this.state.recipes);
  }
  componentDidMount = () =>{
    const grab = localStorage.getItem("recipes"); //grabbing the state
    const recipes = JSON.parse(grab); //converting into JSOn format
    if(grab!=null)
    this.setState({ recipes });
  }
  componentDidUpdate = () =>{
    const recipes = JSON.stringify(this.state.recipes); //converting the state
    localStorage.setItem("recipes", recipes); //saving the state in the local storage
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
