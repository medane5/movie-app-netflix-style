import React,{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import movieList from "./movieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import AddFavourites from "./AddFavourites";
import removeFavourite from "./removeFavourites";

function App() {
  const [movies,setMovies] = useState([]);
  const [favouriteMovie,setFavouriteMovie] = useState([]);
  const [searchValue,setSearchValue] = useState('');


const getMovieRequest = async (searchValue) =>{

const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=8bbbf8d6`;
const response = await fetch(url);

// convert fron http  response into json  

const responseJson = await response.json(); 

if(responseJson.Search){

  setMovies(responseJson.Search);

}



}

// call the request  getMovieRequest() when the page load 

useEffect(() => {

  getMovieRequest(searchValue);

}

,[searchValue]);



const addToFavouriteMovie = (movie) => {
     const newFavouriteList = [...favouriteMovie,movie];
     setFavouriteMovie(newFavouriteList);
}

const removeFavouriteMovie = (movie) =>{

  const newFavouriteList = favouriteMovie.filter((favourite)=>

        favourite.imdbID !== movie.imdbID

  )

  setFavouriteMovie(newFavouriteList);
     

}


  return (
   <>  
    <div className = 'container-fluid movie-app'>

        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading ='Movies'/>
          <SearchBox searchValue={searchValue} 
          setSearchValue={setSearchValue}>
            </SearchBox> 
        </div>


        <div className ='row'>
          <movieList movies = {movies}
           favouriteComponent={AddFavourites} 
           handleFavouriteClick={addToFavouriteMovie}
           />
        </div>


        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading heading ='Favourites'/>
        </div>


        <div className ='row'>
          <movieList movies = {favouriteMovie}
           FavouriteComponent={removeFavourite} 
           handleFavouriteClick={removeFavouriteMovie}
           />
        </div>

    </div>
   </>
  );

}

export default App;








