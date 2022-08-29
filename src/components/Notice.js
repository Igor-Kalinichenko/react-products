import './Alert.css';
import { Alert } from "react-bootstrap";

function Notice({message}) {
    return <Alert className={message ? "d-inline-block position-fixed customAlert" : "d-none"} variant='danger'>{message}</Alert>
}

export default Notice;