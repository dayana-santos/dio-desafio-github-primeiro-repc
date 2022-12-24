import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import profilePicture from '../../assets/profilePicture.jpg'
import postPicture from '../../assets/post.jpg'

import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo
} from './styles'


const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={postPicture} />
            <Content>
                <UserInfo>
                    <UserPicture src={profilePicture} alt='Imagem de perfil' />
                    <div>
                        <h4>Daya</h4>
                        <p>Há 32s</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito para o curso de html e css no bootcamp...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JAVASCRIPT</h4>
                    <p>
                        <FiThumbsUp /> 25
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }