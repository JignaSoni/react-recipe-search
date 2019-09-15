import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
    render() {
        const {recipes,handleDetails,value,error, handleSearchInput,handleSearchSubmit } = this.props;
        return (
            <React.Fragment>
                <RecipeSearch 
                    value={value}
                    handleSearchSubmit={handleSearchSubmit} 
                    handleSearchInput={handleSearchInput}/>
                <div className="container my-5"> 
                {/* title */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                    <h1 className="text-slanted">recipe list</h1>
                    </div>
                </div>
                {/* end of title */}
                <div className="row">
                {error ? (
                    <h1 className="text-danger text-center mt-5">{error}</h1>
                ): (recipes.map( recipe =>{
                    return <Recipe
                    
                    handleDetails={handleDetails}
                    key={recipe.recipe_id}
                    recipe={recipe}
                     />
                }))}
                
                </div>
                </div>
            
            </React.Fragment>
        )
    }
}
