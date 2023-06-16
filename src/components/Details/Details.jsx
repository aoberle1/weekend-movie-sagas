import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Details () {

    const history = useHistory();
    const details = useSelector(store => store.details);
    const dispatch = useDispatch();

    const goHome = () => {
        console.log('Button was clicked, in goHome function');
        history.push("/")
        dispatch({ type: 'RESET_DETAILS'})
    }

    // Test function from Tester button, for running console logs to get values of variables
    const runTest = () => {
        console.log('details variable is equal to:', details)
        console.log('details.title variable is equal to:', details.title)
        console.log('details.poster variable is equal to:', details.poster)
    }

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_DETAILS'});
    // }, [])

    return (
        <div>
            <h1>{details.title}</h1>
            <img src={details.poster} />
            <br/>
            <br/>
            <p>{details.description}</p>
            <br/>
            <button onClick={goHome}>Home</button>
            <button onClick={runTest}>Tester</button>
        </div>
    )
}

export default Details