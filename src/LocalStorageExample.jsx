import React from 'react'
import StorageUse from './StorageUse'
import StorageReuse from './StorageReuse'

const LocalStorageExample = () => {


    const demo = "creative"


    localStorage.setItem("storage",demo)

    return (
    <div>
        <StorageUse></StorageUse>
        <StorageReuse></StorageReuse>
    </div>
  )
}

export default LocalStorageExample
