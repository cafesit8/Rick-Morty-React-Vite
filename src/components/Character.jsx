import React from 'react'

function Character({perso}) {
  return (
    <>
        <div className='w-52 rounded-[20px] overflow-hidden text-center max-[600px]:w-32'>
            <h3>{perso.name}</h3>
            <h4>Estatus: {perso.status}</h4>
            <img className='rounded-full' alt="" src={perso.image} />
        </div>
    </>
  )
}

export default Character
