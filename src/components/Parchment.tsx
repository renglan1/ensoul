import React from "react";
import styled from "styled-components";

interface ParchmentProps {
    content: string;
}

const ParchmentFrame = styled.div.attrs((props) => ({
    className: "parchment",
}))`
    position: absolute;
    display: flex;
    width: 75%;
    min-height: calc((1vw + 1vh) * 75);
    /* center page with absolute position */
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    margin: 2em 0;
    padding: 4em;
    box-shadow: 2px 3px 20px black, 0 0 60px #8a4d0f inset;
    background: #fffef0;
    filter: url(#wavy2);
`;

export default function Parchment({ content }: ParchmentProps) {
    return (
        <ParchmentFrame>
            <svg>
                <filter id="wavy2">
                    <feTurbulence
                        x="0"
                        y="0"
                        baseFrequency="0.02"
                        numOctaves="5"
                        seed="1"
                    ></feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="20" />
                </filter>
            </svg>
        </ParchmentFrame>
    );
}
