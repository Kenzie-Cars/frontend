import styled from "styled-components";

export const DeleteCarModalStyled = styled.div`

    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0, 0.4);
    top: 0px;
    z-index: 100;

    &.modalOff {
        display: none;
    }

    .container {
        width: 90%;
        max-width: 500px;
        background-color: var(--grey10);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 25px;

        .containerHeader {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

            button {
                background-color: transparent;
                border: none;
                font-size: 18px;
                color: var(--grey4);
                
                &:hover {
                    color: var(--alert1);
                    font-weight: 600;
                }
            }
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 16px;
            font-size: 1rem;

            p {
                line-height: 30px;
                color: var(--grey2);
            }
        }

        .buttons {
            display: flex;
            gap: 16px;
            align-self: flex-end;
            width: 100%;
            max-width: 350px;
            /* min-width: 320px; */
            /* margin-left: 20%; */
        }
    }

`