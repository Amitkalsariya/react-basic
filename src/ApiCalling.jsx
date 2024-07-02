import axios from 'axios'
import React, { useState } from 'react'

const ApiCalling = () => {

    const [data , setData] = useState([])

    function DataView()
    {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((res) => {
        console.log(res.data);
        setData(res.data)
       })
       .catch((error) => {
        console.log(error);
       })
    }
    DataView()
  return (
    <div>
        <table border={1}>
            <tr>
                <td>UserId</td>
                <td>Id</td>
                <td>Title</td>
                <td>Body</td>
            </tr>
            {
                data.map((item , index) => (
                    <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default ApiCalling
