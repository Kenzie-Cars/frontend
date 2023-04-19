import styled from "styled-components";

export const PageLoginStyled = styled.main`

    .container {
        padding-top: 50px;
        height: 90vh;
        width: 100vw;
        background-color: var(--grey7);
        border-radius: 4px;
        min-height: 600px;
        max-width: 450px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    form {
        /* border: 2px solid red; */
        background-color: var(--grey10);
        width: 90%;
        height: 80%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: center;
        padding: 0px 5%;

        .input {
            width: 100%;
        }

        h1 {
            font-size: 32px;
        }

        .esqueci {
            /* align-self: flex-end; */
            margin: -16px 32px 0px auto;
            color: var(--grey2);
            font-weight: 500;
        }

        .text2 {
            align-self: center;
            color: var(--grey3);
        }

        p:hover {
            color: var(--brand2);
        }
        

    }

`