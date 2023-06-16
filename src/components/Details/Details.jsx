import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

function Details () {

    const history = useHistory();
    const details = useSelector(store => store.details);

    const goHome = () => {
        console.log('Button was clicked, in goHome function');
        history.push("/")
    }

    // Test function from Tester button, for running console logs to get values of variables
    const runTest = () => {
        console.log('details variable is equal to:', details)
        console.log('details.title variable is equal to:', details[0].title)
        console.log('details.poster variable is equal to:', details[0].poster)

    }

    return (
        <div>
            <h1>{details[0].title}</h1>
            <img src={details[0].poster} />
            <br/>
            <br/>
            <p>{details[0].description}</p>
            <br/>
            <ul>
                {}
            </ul>
            <button onClick={goHome}>Home</button>
            <button onClick={runTest}>Tester</button>
        </div>
    )
}

export default Details