import React from "react";
import styled from "styled-components";

export default function Footer(){
    return(
        <FooterContainer>
            <p>© 2025 Shawn Ellis. All rights reserved.</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
width: 100;
text-align: center;
font-size: 14px;
color: black;
`