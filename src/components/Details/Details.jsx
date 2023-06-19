import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Details () {

    const history = useHistory();

    // bringing details reducer from store
    const details = useSelector(store => store.details);

    // bringing genres reducer from store
    const genres = useSelector(store => store.genres);

    const dispatch = useDispatch();

    const goHome = () => {
        console.log('Button was clicked, in goHome function');
        // when button pressed, sends user back to home page
        history.push("/")
    }

    // Test function from Tester button, for running console logs to get values of variables
    const runTest = () => {
        console.log('details variable is equal to:', details)
        console.log('details.title variable is equal to:', details.title)
        console.log('details.poster variable is equal to:', details.poster)
        console.log('genres store is equal to:', genres)
    }

    return (
        <div>
            <h1>{details.title}</h1>
            <img src={details.poster} />
            <br/>
            <br/>
            <p>{details.description}</p>
            <br/>
            <ul>
                {genres.map(genre => (
                    <div key={genre.id}>
                    <li>{genre.name}</li>
                    </div>
                ))}
            </ul>
            <button onClick={goHome}>Home</button>
            <button onClick={runTest}>Tester</button>
        </div>
    )
}

export default Details