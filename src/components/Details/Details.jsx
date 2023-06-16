import { useHistory } from "react-router-dom"

function Details () {

    const history = useHistory();

    const goHome = () => {
        console.log('Button was clicked, in goHome function');
        history.push("/")
    }

    return (
        <div>
            <h1>This is a test</h1>
            <button onClick={goHome}>Home</button>
        </div>
    )
}

export default Details