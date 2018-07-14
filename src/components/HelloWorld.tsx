import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    color: #000;
    width: 100px;
    background-color: #fff;
`;

const Text = styled.Text.attrs<{ isShow: boolean }>({})`
    height: 100px;
    color: #222;
    background-color: #eef;
`;

const HelloWorld = () => {
    return (
        <Container>
            <Text>HelloWorld</Text>
        </Container>
    );
};

export default HelloWorld;
