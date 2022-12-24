
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card'

import { 
    Container,
    Title,
    TitleHighLight,
    TextContent
 } from "./styles";

const Feed = () => {
    return (<>
            <Header />
            <Container>
                <Card />
            </Container>
           
        </>)
}

export { Feed }
