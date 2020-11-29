import React, {useEffect, useState} from 'react';


import { VectorMap } from '@south-paw/react-vector-maps';

import spain from '../../../../public/spain.json'
import aragon from '../../../../public/aragon.json'


import history from '../../../../history'
import Modall from '../../../../components/Modal';

import Styles from './MapStyles'



const Map = props => {

  const [Show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Mmap,SetMmap] = useState(spain)
  const [Style,SetStyle] = useState(Styles.Spain)

  useEffect(() => {
    switch (props.map) {
      case 'Aragon':
        SetMmap(aragon)
        SetStyle(Styles.Aragon)
        break;
      case 'España':
        SetMmap(spain)
        SetStyle(Styles.Spain)
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