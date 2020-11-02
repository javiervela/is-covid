import React from 'react';
import styled from 'styled-components';
//import "./Map.css"

import { VectorMap } from '@south-paw/react-vector-maps';

import spain from '../../../../spain.json'
import history from '../../../../history'

const Map = () => {
 
    const Spain = styled.div`
    margin: 1rem auto;
    width: 600px;
  
    svg {
      stroke: #fff;

      path {
        fill: pink;
        cursor: pointer;
        outline: none;
  
        &:hover {
          fill: red;
        }
      }
    }
  `;
  const onClick = ({target}) => {
    const name = target.attributes.name.value;
    console.log(name)
    if (name === "Aragon"){
      history.push('/login')
    }
  }

  return(
    <Spain>
      <VectorMap {...spain}  layerProps={ {onClick} }/>
    </Spain>
  );
}


export default Map;