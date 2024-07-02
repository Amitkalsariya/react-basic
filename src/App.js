import { Field, Form, Formik } from 'formik';
import './App.css';
import { useState, useEffect } from 'react';
import ApiCalling from './ApiCalling';

function App() {
  // const [data, setData] = useState([]);
  // const [id, setId] = useState(null);
  // const [value, setValue] = useState({
  //   name: '',
  //   surname: '',
  //   marks1: '',
  //   marks2: '',
  //   marks3: '',
  // });

 
  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem("MyData"));
  //   if (savedData) {
  //     setData(savedData);
  //   }
  // }, []);

 
  // useEffect(() => {
  //   localStorage.setItem("MyData", JSON.stringify(data));
  // }, [data]);

  // const handleSubmit = (values, { resetForm }) => {
  //   if (id !== null) {
  //     let copydata = [...data];
  //     copydata[id] = values;
  //     setData(copydata);
  //     setId(null);
  //   } else {
  //     setData([...data, values]);
  //     resetForm();
  //   }
  //   setValue({
  //     name: '',
  //     surname: '',
  //     marks1: '',
  //     marks2: '',
  //     marks3: '',
  //   });
  // };

  // const deleteData = (i) => {
  //   let copy = [...data];
  //   copy.splice(i, 1);
  //   setData(copy);
  // };

  // const updateData = (el, i) => {
  //   setValue({
  //     name: el.name,
  //     surname: el.surname,
  //     marks1: el.marks1,
  //     marks2: el.marks2,
  //     marks3: el.marks3,
  //   });
  //   setId(i);
  // };

  return (
    // <div className="App">
    //   <Formik
    //     enableReinitialize
    //     initialValues={value}
    //     onSubmit={handleSubmit}
    //   >
    //     <Form>
    //       Name: <Field type="text" name="name" /><br />
    //       Surname: <Field type="text" name="surname" /><br />
    //       Marks 1: <Field type="text" name="marks1" /><br />
    //       Marks 2: <Field type="text" name="marks2" /><br />
    //       Marks 3: <Field type="text" name="marks3" /><br />
    //       <button type='submit'>Submit</button>
    //     </Form>
    //   </Formik>
    //   <table border={1}>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Surname</th>
    //         <th>Marks 1</th>
    //         <th>Marks 2</th>
    //         <th>Marks 3</th>
    //         <th>Delete</th>
    //         <th>Update</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((el, i) => (
    //         <tr key={i}>
    //           <td>{el.name}</td>
    //           <td>{el.surname}</td>
    //           <td>{el.marks1}</td>
    //           <td>{el.marks2}</td>
    //           <td>{el.marks3}</td>
    //           <td><button onClick={() => deleteData(i)}>Delete</button></td>
    //           <td><button onClick={() => updateData(el, i)}>Update</button></td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <>
      <ApiCalling></ApiCalling>
    </>
  );
}

export default App;
