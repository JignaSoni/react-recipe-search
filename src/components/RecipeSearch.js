import React, { Component } from 'react'

export default class RecipeSearch extends Component {
    render() {
        const{handleSearchSubmit,handleSearchInput,value}= this.props;
        return (
            <React.Fragment>
                <div className="container">
                <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                <h1 className="text-slanted text-capitalize">search for recipe with{" "} 
                <strong className="text-danger">Food2Fork</strong>
                </h1>
                <form className="mt-4" onSubmit={handleSearchSubmit}>
                    <label htmlFor="search" className="text-capitalize">
                    type recipes saperated by coma </label>
                    <div className="input-group">
                    <input 
                    onChange={handleSearchInput}
                    className="form-control"
                    name="search"
                    type="text" 
                    value={value} 
                    placeholder="search for ingredients">
                    </input>
                    <div className="input-group-append">
                    <button 
                    type="submit" 
                    className="input-group-text bg-primary text-white">
                    <i className="fa fa-search"></i>
                    </button>
                    </div>
                   
                   
                    </div>
                    
                </form>
                </div>
                </div>

                </div>
                
            </React.Fragment>
        )
    }
}
