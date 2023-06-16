import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";

function Details () {

    const history = useHistory();
    const details = useSelector(store => store.details);

    const goHome = () => {
        console.log('Button was clicked, in goHome function');
        history.push("/")
    }

    return (
        <div>
            <h1>This is a test</h1>
            <button onClick={goHome}>Home</button>
            <button onClick={}>Tester</button>
        </div>
    )
}

export default Details