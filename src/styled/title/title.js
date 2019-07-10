import styled from 'styled-components';

const Title = styled.h1`
    font-size: 3rem;
    line-height: 1;
    color: #fff;
    font-family: Barlow Condensed;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .75px;
`;

export const TitleMuted = styled(Title)`
    font-size: 1.5rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.49);
`;

export const TitleThin = styled(Title)`
    font-size: 2.5em;
    font-weight: 100;
`;

export default Title;