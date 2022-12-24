import React from 'react';

import { MdEmail, MdLock } from 'react-icons/md' ;

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input'

import { 
    Container,
    Wrapper,
    Column,
    Row,
    Title,
    TitleLogin,
    SubtitleLogin,
    EsqueciText,
    CriarText
 } from './styles';

const Login = () => {
    return (<>
        <Header />
        <Container>
            <Column /* como foi utilizado Display Flex, cada div será uma parte da pág*/>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.                
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder='E-mail' leftIcon={<MdEmail />}/>
                        <Input placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                        <Button title='Entrar' variant='secondary' />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
           
    </>)
}

export { Login }
