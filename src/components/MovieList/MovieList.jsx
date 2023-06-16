import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
import reactRouterDom from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    const goToDetails = (movieID) => {
        console.log('movie poster was clicked with id:', movieID)
        dispatch({ type: 'GET_DETAILS', payload: movieID})
        history.push(`/details/${movieID}`)
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={() => goToDetails(movie.id)}>
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