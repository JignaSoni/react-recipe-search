import React, { Component } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';
import {recipes} from './tempList';

class App extends Component {
  state = { 
    recipes:recipes,
    url:'https://www.food2fork.com/api/search?key=061fbab64f54f2f1d5f0d562c48ccf71',
    details_id:35382,
    pageIndex:1,
    search:'',
    base_url:'https://www.food2fork.com/api/search?key=061fbab64f54f2f1d5f0d562c48ccf71',
    querry:"&q=",
    error:""
   }

 async getRecipes(){
   try{
    const data= await fetch(this.state.url);
    const jsonData = await data.json();
   if(jsonData.recipes.length===0){
      this.setState(()=>{
      return  {error:"sorry your search didn't match with any recipe,try something else"}
      })
   }else{
    this.setState(()=>{
     return  {recipes: jsonData.recipes}
    });
   } 
   }catch(error){
     console.log(error);
   }   
  }

componentDidMount(){
  this.getRecipes();
}


handleIndexOfPage=(index)=>{
  this.setState({
    pageIndex: index
  })
}

handleDetailsButton=(index,id)=>{
  this.setState({
    pageIndex: index,
    details_id: id
  })
}
handleSearchInput=(e)=>{
  this.setState({
    search:e.target.value,
    error:""
  })
}

handleSearchSubmit=(e)=>{
  e.preventDefault();
  const{ base_url, search,querry }=this.state;
  this.setState(()=>{
    return {url:`${base_url}${querry}${search}`,search:"" }
  },()=>{
   this.getRecipes() 
  })

}
handlePage=(index)=>{
    switch(index){
      default:
      case 1: return   <RecipeList 
                            recipes={this.state.recipes} 
                            handleDetails={this.handleDetailsButton}
                            handleSearchInput={this.handleSearchInput}
                            handleSearchSubmit={this.handleSearchSubmit}
                            value={this.state.search}
                            error={this.state.error}/>;
     
      case 0 : return    <RecipeDetails detailId={this.state.details_id} handleIndexOfPage={()=>this.handleIndexOfPage(1)}/>;
      
    }
}



  render() { 
    return ( 
      <React.Fragment>
       {this.handlePage(this.state.pageIndex)}
       
      </React.Fragment>
     );
  }
}
 
export default App;

