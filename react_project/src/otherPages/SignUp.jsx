import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import Header from '../main_component/Header';
import '../myPpages/plus.css'
import Footer from '../main_component/Footer';
import axios from 'axios';


const SignUp = () => {


    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Confirm, setConfirm] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState(0);
    const [Address, setAddress] = useState('');



    const addUser = () => {
        if (Username == '' || Password == '' || Password != Confirm || Email == '' || Phone < 9 || Address == '') {
            // maggange();
            console.log('Not much.');
            return;
        }
        axios.post('http://localhost:3000/api/items', {
            userName: Username,
            password: Password,
            email: Email,
            phone: Phone,
            adress: Address
        })
        .then(response => {
            setItems([...items, response.data]); // Update state with new item
            setInputValue1(''); // Clear input field
            setInputValue2('');
          })
          .catch(error => console.error('Error adding item:', error));
    };



    const star = () => {
        return <p className='text-danger'>*</p>

    }
    return (
        <div>
            <Header color="bg-info" title="Boundless musical instrument" />
            <div className="p-4 d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#fff9c4' }}>
                <div className="form-container p-4 shadow rounded bg-white" style={{ width: '100%', maxWidth: '500px' }}>
                    <h3 className="text-center mb-4">Create Your Account</h3>

                    <InputGroup className="mb-4 animated-group">
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            className="animated-input"
                            required
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                        <Form.Label className="floating-label">Username</Form.Label>
                    </InputGroup>

                    <InputGroup className="mb-4 animated-group">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            className="animated-input"
                            required
                            onChange={(e) => { setPassword(e.target.value) }}

                        />
                        <Form.Label className="floating-label">Password</Form.Label>
                    </InputGroup>

                    <InputGroup className="mb-4 animated-group">
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            aria-label="Confirm Password"
                            className="animated-input"
                            required
                            onChange={(e) => { setConfirm(e.target.value) }}

                        />
                        <Form.Label className="floating-label">Confirm Password</Form.Label>
                    </InputGroup>

                    <InputGroup className="mb-4 animated-group">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            className="animated-input"
                            required
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <Form.Label className="floating-label">Email</Form.Label>
                    </InputGroup>

                    <InputGroup className="mb-4 animated-group">
                        <Form.Control
                            type="tel"
                            placeholder="Phone"
                            aria-label="Phone"
                            className="animated-input"
                            required
                            onChange={(e) => { setPhone(e.target.value) }}
                        />

                        <Form.Label className="floating-label">Phone </Form.Label>

                    </InputGroup>

                    <InputGroup className="mb-4 animated-group">
                        <Form.Control
                            placeholder="Address"
                            aria-label="Address"
                            className="animated-input"
                            required
                            onChange={(e) => { setAddress(e.target.value) }}
                        />
                        <Form.Label className="floating-label">Address</Form.Label>
                    </InputGroup>

                    <div className="d-flex justify-content-center">
                        <Button variant="success" type="submit" onClick={addUser} className="px-5">SUBMIT</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;
