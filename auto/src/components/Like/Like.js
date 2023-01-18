import React from 'react'

import { LeftContainer } from './LikeStyles';
import { RightContainer } from './LikeStyles';
import { CenterContainer } from './LikeStyles';

import { CenterText } from './LikeStyles';
import { CenterText_2 } from './LikeStyles';
import { Centerborder } from './LikeStyles';
import { Centerborder_2 } from './LikeStyles';
import { Likeborder } from './LikeStyles';
import { HeroButton } from '../Market/MarketStyles';

export default function Like() {
    return (
        <div>
            <LeftContainer>

                <Likeborder>
                    <HeroButton>관심종목</HeroButton>
                    <HeroButton>+</HeroButton>
                </Likeborder>

                <CenterContainer>
                    <Centerborder>
                        <CenterText>
                      내자산
                      </CenterText>
                    </Centerborder>

                     <Centerborder_2>
                        <CenterText_2>
                      나의 알고리즘 #1
                      </CenterText_2>
                    </Centerborder_2>

                </CenterContainer>

                <RightContainer>
                    <Likeborder>
                        <HeroButton>알고리즘</HeroButton>
                        <HeroButton>+</HeroButton>
                    </Likeborder>
                </RightContainer>

            </LeftContainer>

        </div>
    )
}
