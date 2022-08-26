import { useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function Profile({setProfile}) {
    const loginRef = useRef(null);
    const emailRef = useRef(null);

    function saveProfile() {
        setProfile({login: loginRef.current.value, email: emailRef.current.value});
        localStorage.setItem('login', loginRef.current.value);
        localStorage.setItem('email', emailRef.current.value);
        loginRef.current.value = '';
        emailRef.current.value = '';
    }

    return <div className="container">
        <h3 className="text-center">Profile</h3>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">Enter Your Login:</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text"
                                    ref={loginRef}
                                    placeholder="Enter Your Login"
                                    defaultValue={localStorage.getItem('login')}
                                    className="my-2"></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">Enter Your Email:</Form.Label>
                    <Col sm="10">
                        <Form.Control type="email"
                                    ref={emailRef}
                                    placeholder="Enter Your Email"
                                    defaultValue={localStorage.getItem('email')}
                                    className="my-2"></Form.Control>
                    </Col>
                </Form.Group>
                <div className="d-flex align-center justify-content-center">
                    <Button variant="primary" className="my-2 px-5 d-flex" onClick={saveProfile}>Save</Button>
                </div>
            </Form>
    </div>

}

export default Profile;