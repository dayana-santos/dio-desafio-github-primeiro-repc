
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import bannerImage from "../../assets/banner.png";

import { 
    Container,
    Title,
    TitleHighLight,
    TextContent
 } from "./styles";

const Home = () => {
    return(<>
            <Header />
            <Container>
                <div /* como foi utilizado Display Flex, cada div será uma parte da pág*/>
                    <Title>
                        <TitleHighLight>
                        Implemente 
                        <br />
                        </TitleHighLight>
                        o seu futuro global agora!                        
                    </Title>
                    <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo 
                        desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title='Começar agora' variant='secondary' onClick={ () => null} />
                </div>
                <div>
                    <img src={bannerImage} alt='Imagem principal' />

                </div>
            </Container>
           
        </>)
}

export { Home }
