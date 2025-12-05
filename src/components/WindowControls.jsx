import useWindowStore from '#store/window'
import React from 'react'

const WindowControls = ({target}) => {
  const {closedWindow} = useWindowStore()

  return (
    <div id='window-controls'>
      <div className='close' onClick={ ()=> closedWindow(target)}/>
      <div className='minimize'/>
      <div className='maximize'/>
    </div>
  )
}

export default WindowControls