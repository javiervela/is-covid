import styled from 'styled-components';

const Spain = styled.div`
margin: 1rem auto;
width: 1200px;

svg {
  stroke: #fff;

  path {
    fill: pink;
    cursor: pointer;
    outline: none;

    &:hover {
      fill: rgb(255, 99, 132);
    }
  }
}`

const Aragon = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;

svg {
  stroke: #fff;
  width: 600px;


  path {
    fill: pink;
    cursor: pointer;
    outline: none;

    &:hover {
      fill: rgb(255, 99, 132);
    }
  }
}`

export default {Aragon, Spain}