import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import reactRouterDom from 'react-router-dom';

function MovieList() {

    // setting up dispatch and history using useDispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();

    // bringing our movies reducer in from store
    const movies = useSelector(store => store.movies);

    // function that runs upon click of movie poster
    const goToDetails = (movie) => {
        console.log('movie poster was clicked with id:', movie)
        // dispatching to sagas - sending movie data - using 'GET_DETAILS' type that sagas will be listeing for
        dispatch({ type: 'GET_DETAILS', payload: movie})
        // using history.push to move to movie details page on button click
        history.push(`/details/${movie}`)
    }

    useEffect(() => {
        // starting our GET for home page upon page load - fetches and sets movie information on DOM
        // using saga and store reducer to store movie data from database
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={() => goToDetails(movie)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;