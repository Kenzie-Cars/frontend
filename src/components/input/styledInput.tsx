import styled from "styled-components";

export const StyledInput = styled.div`

    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 450px;
    gap: 6px;
    
    input {
       height : 45px;
       border-radius: 4px;
       border: solid 2px var(--grey6);
       padding: 5px 15px;
       font-size: 1rem;
       color: var(--grey1);
       font-weight: 600;
       background-color: transparent;
       
    }

    label {
        color: var(--grey1);
        font-weight: 600;
        font-size: 1.1rem;
    }
    
    input:hover{
        border-color: var(--brand2);
        background-color: var(--grey8);
    }
`

export const StyledTextarea = styled.div`
    /* height: 200px; */
    width: 80%;
    max-width: 450px;
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;

    textarea {
       /* height : 150px; */
       border-radius: 4px;
       border: solid 2px var(--grey6);
       padding: 10px;
       font-size: 1rem;
       color: var(--grey1);
       font-weight: 600;
    }

    label {
        color: var(--grey1);
        font-weight: 600;
        font-size: 1.1rem;
    }

    textarea:hover{
        border-color: var(--brand2);
    }

    p {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: var(--grey1);
    }

`

export const StyledSelect = styled.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        color: var(--grey1);
        font-weight: 600;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .select {
        display: flex;
        flex-direction: column;
        position: relative;

        input {
        height: 50px;
        padding: 10px;
        font-size: 1rem;
        border-radius: 4px;
        border: 2px solid var(--grey6);
        font-weight: 600;
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100%;
        outline: none;
        cursor: pointer;
        }

        .options {
            position: absolute;
            top: 50px;
            width: 100%;
            /* background-color: brown; */
            overflow: hidden;
            display: none;
            z-index: 5;
            background-color: var(--grey10);

            div {
            font-size: 1rem;
            padding: 10px;
            border-radius: 4px;
            }

            div:hover {
                background-color: var(--brand1);
                color: var(--grey8);
            }

            &.dropdownOn {
                display: block;
            }
        }

        &::before {
            content: '';
            position: absolute;
            right: 20px;
            top: 15px;
            z-index: 5;
            width: 8px;
            height: 8px;
            border: solid 2px var(--grey1);
            border-top: 2px solid var(--grey10);
            border-right: 2px solid var(--grey10);
            transform: rotate(-45deg);
            transition: 0.5s;
            pointer-events: none;
        }

        &.dropdownOn::before {
            top: 25px;
            transform: rotate(-225deg);
        }
    }

    select {
        height: 50px;
        font-size: 1rem;
        font-weight: 600;
        padding: 10px;
        border-radius: 4px;
        border: solid 2px var(--grey6);
    }

    select:hover {
        border-color: var(--brand2);
    }
`