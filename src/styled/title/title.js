import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2rem;
    line-height: 1;
    color: #493be4;
    font-family: Barlow Condensed;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .75px;
    margin: 0px;
`;

export const TitleMuted = styled(Title)`
    font-size: 1.5rem;
    font-weight: 300;
    color: fdab3d;
`;

export const TitleThin = styled(Title)`
    font-size: 2.5em;
    font-weight: 100;
`;

export default Title;