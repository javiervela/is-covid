import React from 'react';
import styled from 'styled-components';
//import "./Map.css"

import { VectorMap } from '@south-paw/react-vector-maps';

import spain from '../../../../spain-provinces.json'
const Map = () => {
 
    const Spain = styled.div`
    margin: 1rem auto;
    width: 600px;
  
    svg {
      stroke: #fff;
  
      // All layers are just path elements
      path {
        fill: pink;
        cursor: pointer;
        outline: none;
  
        // When a layer is hovered
        &:hover {
          fill: red;
        }
      }
    }
  `;


  return(
    <Spain>
    <VectorMap {...spain}  />
  </Spain>
  );
}


export default Map;