import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Header = () => {
    return (
        <StyledHeader>
            <h1>Welcome</h1>
            <h4>Please sign in below</h4>
        </StyledHeader>
    );
}

export default Header;
