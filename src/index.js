import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_DETAILS', getDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }     
}

// creating getDetails saga - runs on click of movie poster on home/movie list
function* getDetails(action) {
    try {
        // action.payload is the movie title, description, and poster
        console.log('getDetails saga action.payload is:', action.payload)
        // axios.get using the ID of the movie clicked on as ID to grab genres for that movie from database
        const details = yield axios.get(`/api/movie/details/${action.payload.id}`);
        // details.data is the genre information for movie we received from axios request
        console.log('details.data for getDetails is:', details.data)
        // sending movie table information for movie clicked on to details reducer
        yield put({ type: 'SET_DETAILS', payload: action.payload})
        // sending genre information to genres reducer
        yield put({ type: 'SET_GENRES', payload: details.data})
    } catch (error) {
        console.log('error in getDetails saga:', error)
    }
};

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to temporarily store movie details returned from movies store for movie with specific ID
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            console.log('action.payload in details reducer is:', action.payload);
            return action.payload;
        default:
            return state
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
