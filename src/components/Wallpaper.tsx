import React from 'react';
import styled from 'styled-components'
import './styles/wallpaper.scss';

interface WallpaperProps {
    name: string;
}

const WallpaperFrame = styled.div.attrs(props => ({className: 'wallpaper',}))`
    position: fixed;
    top: 0;
    z-index: -1000;
    overflow: hidden; 
    width: 100%;
    height: 100%;

    > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

export default function Wallpaper({name}: WallpaperProps){
    return(
        <WallpaperFrame>
            <img src={require(`@/assets/images/${name}`)} alt="wallpaper" />
        </WallpaperFrame>
    );
}
