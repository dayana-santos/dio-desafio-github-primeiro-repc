import React from 'react'
import { Button } from "../Button";
import logo from '../../assets/logo-dio.png'

import { 
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input
 } from "./styles";


const Header = () => {
    return (
        <Wrapper /*background do cabeçalho*/>
            <Container /*conteúdo do cabeçalho*/>
                <Row /*Lado ESQUERDO do cabeçalho*/>
                    <img src={logo} alt='Logo da Dio' />
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row /*Lado DIREITO do cabeçalho*/>
                    <MenuRight href="$">Home</MenuRight>
                    <Button title='Entrar' />
                    <Button title='Cadastrar' />
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }