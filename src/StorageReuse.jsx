import React from 'react'

const StorageReuse = () => {

    const getReuse = localStorage.getItem('storage')
  return (
    <div>
        <h1>{getReuse}</h1>
    </div>
  )
}

export default StorageReuse
