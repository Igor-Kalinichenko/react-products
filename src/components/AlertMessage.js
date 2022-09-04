import './AlertMessage.css';
import { Alert } from "react-bootstrap";
import { useEffect, useState } from 'react';

function AlertMessage({message}) {
    const [listMessages, setListMessages] = useState([]);

    useEffect(() => {
        setListMessages(message.text ? [...listMessages, message] : []);
      }, [message]);
      
    useEffect(() => {
        const timer = setTimeout(() => setListMessages([]), 3000);
        return () => clearTimeout(timer);
      }, [listMessages]);


    return  listMessages.map(el => <Alert className={message.text ? "d-inline-block position-fixed customAlert" : "d-none"}
                        key={listMessages.indexOf(el)}
                        variant={el.variant || 'success'}>{el.text}</Alert>)
}

export default AlertMessage;