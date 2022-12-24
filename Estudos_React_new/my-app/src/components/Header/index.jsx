import React from 'react'
import { Button } from "../Button";
import logo from '../../assets/logo-dio.png'
import profilePicture from '../../assets/profilePicture.jpg'

import { 
    Container,
    Row,
    Wrapper,
    BuscarInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture
 } from "./styles";


const Header = ({autenticado}) => {
    return (
        <Wrapper /*background do cabeçalho*/>
            <Container /*conteúdo do cabeçalho*/>
                <Row /*Lado ESQUERDO do cabeçalho*/>
                    <img src={logo} alt='Logo da Dio' />
                    {autenticado ? (<>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null }
                  
                </Row>
                <Row /*Lado DIREITO do cabeçalho*/>
                    {autenticado ? (
                        <UserPicture src={profilePicture} />
                    ) : (
                        <>
                            <MenuRight href="$">Home</MenuRight>
                            <Button title='Entrar' />
                            <Button title='Cadastrar' />
                        </>
                    )}
                    
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }