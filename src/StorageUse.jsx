import React from 'react'

const StorageUse = () => {

    const getData = localStorage.getItem("storage")

  return (
    <div>
        <h1>{getData}</h1>
    </div>
  )
}

export default StorageUse
