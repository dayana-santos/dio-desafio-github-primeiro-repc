import React from 'react';

import { useNavigate } from 'react-router-dom';

import { MdEmail, MdLock, MdAccountCircle } from 'react-icons/md' ;

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

const Cadastro = () => {

    const navigate = useNavigate();

    const handleClickSigIn = () => {
        navigate('/feed');
    }

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
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder='Nome completo' leftIcon={<MdAccountCircle />}/>
                        <Input placeholder='E-mail' leftIcon={<MdEmail />}/>
                        <Input placeholder='Senha' type='password' leftIcon={<MdLock />}/>
                        <Button title='Criar minha conta' variant='secondary' onClick={handleClickSigIn} type='button' />
                    </form>
                    <Row>
                        <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que
                            aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
                    </Row>
                    <Row>
                        <EsqueciText>Já tenho conta</EsqueciText>
                        <CriarText>Fazer login</CriarText>
                    </Row>
                    
                </Wrapper>
            </Column>
        </Container>
           
    </>)
}

export { Cadastro }
