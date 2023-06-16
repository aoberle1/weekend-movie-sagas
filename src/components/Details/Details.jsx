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
    }

    return (
        <div>
            <h1>This is a test</h1>
            <button onClick={goHome}>Home</button>
            <button onClick={runTest}>Tester</button>
        </div>
    )
}

export default Details