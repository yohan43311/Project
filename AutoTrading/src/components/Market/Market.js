import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { ButtonWrapper, HeroButton, MarketButton } from './MarketStyles';



export default function Market() {
    return (
        <Container>
            <ButtonWrapper>
            <Link to="#">
                    <MarketButton>BiThumb</MarketButton>
                </Link>
                <Link to="#">
                    <HeroButton>Finance</HeroButton>
                </Link>
                <Link to="#">
                    <HeroButton>Binance</HeroButton>
                </Link>
                <Link to="#">
                    <HeroButton>CoinOne</HeroButton>
                </Link>
                <Link to="#">
                    <HeroButton>GoooPax</HeroButton>
                </Link>
                <Link to="#">
                    <HeroButton>UpppBit</HeroButton>
                </Link>
            </ButtonWrapper>
        </Container>
    )
}
