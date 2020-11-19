import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import { VectorMap } from '@south-paw/react-vector-maps';

import spain from '../../../../spain.json'
import aragon from '../../../../aragon.json'
import history from '../../../../history'
import Modall from '../../../../components/Modal';

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
      fill: red;
    }
  }
}`;

const Aragon = styled.div`
margin: 1rem auto;
width: 1700px;

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
}`

const Map = props => {

  const [Show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Mmap,SetMmap] = useState(spain)
  const [Style,SetStyle] = useState(Spain)

  useEffect(() => {
    switch (props.map) {
      case 'Aragon':
        SetMmap(aragon)
        SetStyle(Aragon)
        break;
      case 'España':
        SetMmap(spain)
        SetStyle(Spain)
        break;
      default:
        break;
    }
  },[props])


  const onClick = ({target}) => {
    const name = target.attributes.name.value;
    
    if (name === "Aragon"){
      history.push(`/España/${name}`)
    }else if(name === "Zaragoza" || name === "Teruel" || name === "Huesca" ){
      history.push(`/España/Aragon/${name}`)
    }else{
      handleShow()
    }
  }

  return(
    <Style>
      <Modall show={Show} handleClose={handleClose}/>
      <VectorMap {...Mmap}  layerProps={ {onClick} }/>
    </Style>
  );
}


export default Map;