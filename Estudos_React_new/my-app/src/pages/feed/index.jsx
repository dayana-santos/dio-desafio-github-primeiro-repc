
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { UserInfo } from '../../components/UserInfo';
import { Card } from '../../components/Card'
import profilePicture from '../../assets/profilePicture.jpg'

import { 
    Container,
    Title,
    TitleHighLight,
    Column
 } from "./styles";

const Feed = () => {
    return (<>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo percentual={100} nome='Dayana' image={profilePicture} />
                    <UserInfo percentual={80} nome='Eduardo' image={profilePicture} />
                    <UserInfo percentual={65} nome='Paçoca' image={profilePicture} />
                    <UserInfo percentual={44} nome='Hermione' image={profilePicture} />
                    <UserInfo percentual={20} nome='Harry Potter' image={profilePicture} />
                </Column>
            </Container>
           
        </>)
}

export { Feed }
