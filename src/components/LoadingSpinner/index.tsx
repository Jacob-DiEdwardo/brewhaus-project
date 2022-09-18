import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const LoadingSpinner: React.FunctionComponent = () => <React.Fragment>
    <Keyframes />
    <Ring>
        <RingSegment />
        <RingSegment />
        <RingSegment />
        <RingSegment />
    </Ring>
</React.Fragment>

export default LoadingSpinner

const Ring = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
`

const RingSegment = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${props => props.theme.palette.secondary.main};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.theme.palette.secondary.main} transparent transparent transparent;
    &:nth-child(1) {
        animation-delay: -0.45s;
    }
    &:nth-child(2) {
        animation-delay: -0.3s;
    }
    &:nth-child(3) {
        animation-delay: -0.15s;
    }
`

const Keyframes = createGlobalStyle`
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`