import styled from "styled-components";

export const PasswordRecoveryContainer = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: var(--brand4);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 38px;

    .main-container{
        display: flex;
        flex-direction: column;
        gap: 28px;
        background-color: white;
        padding: 42px 23px;
        border-radius: 10px;
        text-align: center;
        width: 90%;
        max-width: 406px;
    }

    .main-container form button{
        margin-top: 20px;
    }

    h3{
        color: var(--brand2);
    }

    @media (min-width: 460px){
        height: 84.1vh;
    }

    @media (max-width: 424px){
        
        .main-container, h2{
            position: relative;
            top: 90px

        }
        
    }
`