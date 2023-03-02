import React from 'react'



function Movies(props) {
  return (
    <div className='movie-box'>
        <img src={props.img} alt="" />   
        <div><span>Name:</span> {props.name}</div>
        <div><span>Year:</span> {props.year}</div>
        <div><span>imdbID:</span> {props.imdb}</div>   
    </div>
  )
}



export default Movies
