
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

const Home = () => {
    return(<>
            <h1>Home</h1>
            <Button>Teste 1</Button>
            <Button variant='secondary'>Teste 1</Button>
            <Link to="/login">Fazer login</Link>
        </>)
}

export { Home }
