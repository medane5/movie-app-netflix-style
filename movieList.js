import React from "react";

const movieList = (props) =>{
 const FavouriteComponent = props.favouriteComponent;
    return (
<>
     {
     props.movies.map( (movie,index)  => (
       //space things a bit nicer 
       <div className="image-container d-flex justify-content-start m-3"> 

               <img src={movie.Poster} alt='movie'></img>
               <div className="overlay d-flex align-items-center justify-content-center">
                 <FavouriteComponent/>
               </div>

       </div>
     )
     )
     }
</>
    );


};

export default movieList;