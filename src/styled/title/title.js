import styled from 'styled-components';

const Title = styled.h1`
    ${props => props.fontFamily ? `font-family: ${props.fontFamily}` : ''};
    font-size: 4rem;
    line-height: 1;
    color #fff;
    font-weight: 700;
    letter-spacing: 1.75px;
    margin: 0px;
    text-transform: uppercase;
`;

export const TitleMedium = styled(Title)`
    font-size: 2rem;
    margin: 20px 0px 20px 40px;
`;

export const TitleCard = styled(Title)`
    color: #493be4;
    font-size: 1rem;
    font-weight: 600;
`;

export const TitleMuted = styled(Title)`
    font-size: .7rem;
    letter-spacing: .75px;
    font-weight: 300;
    color: #fdab3d;
`;

export const TitleThin = styled(TitleCard)`
    font-size: 0.8em;
    font-weight: 100;
`;

export default Title;