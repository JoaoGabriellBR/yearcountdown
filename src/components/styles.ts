import styled from "styled-components";
import { purple } from "../styles/colorProvider";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "leftbox rightbox"
    "leftbox rightbox";
  min-height: 100vh;

  @media (max-width: 1024px) {
    grid-template-areas:
      "leftbox leftbox"
      "rightbox rightbox";
  }
`;

export const LeftBox = styled.div`
  grid-area: leftbox;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1000px) {
    align-items: center;
    padding: 1rem;
  }

  h1 {
    color: ${purple};
    font-size: 2.5rem;
    text-align: center;
  }

  .div-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    max-width: 100%;
    min-height: 300px;
  }
`;

export const RightBox = styled.div`
  grid-area: rightbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .img {
    @media (max-width: 1024px) {
      width: 70%;
      height: 100%;
    }
  }
`;

export const DivDate = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  scale: 90%;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }

  .div-date-item {
    background-color: ${purple};
    margin-right: 15px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;

    &:hover {
      scale: 1.1;
      transition: ease-in-out 0.5s;
    }

    @media (max-width: 1000px) {
      margin-bottom: 20px;
    }

    h1 {
      margin: 0;
      font-size: 4rem;
      color: #fff;
    }
  }

  .date-item-header {
    width: 100%;
    height: 85%;
    color: #000;
    background-color: ${purple};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .date-item-footer {
    width: 100%;
    height: 15%;
    color: #000;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h3 {
      margin: 0;
    }
  }
`;
