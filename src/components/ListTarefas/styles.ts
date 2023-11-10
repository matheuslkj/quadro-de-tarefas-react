import styled from "styled-components";

export const Container = styled.div`
margin-top: 2rem;
margin-left: 1rem;
margin-right: 1rem;
display: flex;
justify-content: space-around;

.quadro {
    width: 30%;
    border-radius: 8px;
    margin: 5px;


    h3 {
        text-align: center;
        color: #ffffff;
        border-bottom: 2px solid #ffffff;
        padding-bottom: 10px;
    }

    ul {
        padding: 0;
    }

    li {
        padding: 1rem 2rem;
        color: var(--text-body);
        background-color: #fff;
        border: 0;
        border-radius: 8px;
        margin: 10px;
        list-style: none;
        display: flex;
        justify-content: space-between;
    }

    button {
        font-size: 1rem;
        color: #fff;
        background-color: #f00;
        border: 0;
        padding: 0 2rem;

        border-radius: 8px;
        height: 3rem;

        transition: 1s;

        &:hover {
            /* filter: brightness(0.9); */
            background-color: #f00;
        }

   button[type='submit']{
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;

        border-radius: 8px;
        height: 3rem;

        transition: 1s;

        &:hover {
            /* filter: brightness(0.9); */
            background-color:  #ffa500;
        }

    }

}
`;
