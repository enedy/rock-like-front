import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10rem;
    margin-left: 20rem;

    button{
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        margin-bottom: 1rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;