import React, { useState } from 'react'
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';

export default function Signin() {
    const [emailAddress, setemailAddress] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    //check form validation
    const isInvalid = password === '' || emailAddress === '';
    const handleSignin = (event) => {
        event.preventDefault();

        //this is for firebase
    }

    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input placeholder="Email Address" value={emailAddress} onChange={({ target }) => setemailAddress(target.value)}/>

                        <Form.Input placeholder="Password" autoComplete="off" type="password" value={password} onChange={({ target }) => setPassword(target.value)}/>

                        <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign Up</Form.Link>
                    </Form.Text>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )

}