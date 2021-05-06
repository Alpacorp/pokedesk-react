import React from 'react';
import styled from 'styled-components';

const Error = () => {
    return (
        <ErrorMessage>
            <p>Pokemon Not Found, Try Again</p>
        </ErrorMessage>
    );
}

const ErrorMessage = styled.div`
    border: 1px solid #ecf0f1;
    margin-top: 30px;
    background: aliceblue;
    padding: 10px;
    text-align: center;
    font-weight: 500;
`

export default Error;
