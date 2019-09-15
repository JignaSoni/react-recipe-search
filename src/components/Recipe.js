import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const {
             title,
             image_url,
             publisher,
             source_url,
             recipe_id
          }= this.props.recipe;
          const {handleDetails} = this.props
        return (
        <React.Fragment>
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3"  >
          <div className="card">
          <img 
           src={image_url}
           alt="recipe"
           style={{height:"14rem"}}
           className="img-card-top"/>
           <div className="card-body">
           <h6 className="">{title}</h6>
           <h6 className="text-warning text-slanted">published by {publisher}</h6>
           </div>
           <div className="card-footer">
           <button 
           type="button" 
           className="btn btn-primary text-capitalize"
           onClick={()=>handleDetails(0,recipe_id)}>
               details
           </button>
           <a href={source_url} 
           className="btn btn-success mx-2 text-capitalize" 
           target="_blank"
           rel="noopener noreferrer" >recipe url</a>
           </div>
          </div>
          </div>    
        </React.Fragment>
        )
    }
}
