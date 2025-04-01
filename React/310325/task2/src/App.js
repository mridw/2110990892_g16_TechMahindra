import logo from './logo.svg';
import React, {useState} from "react";
import {Table, Button, Form, Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ParentComponent=()=>{
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({id:"",name:"",description:""});

  const handleClose = ()=> setShow(false);
  const handleShow = (item=null)=> {
    setSelectedItem(item);
    setForm(item||{id:"",name:"",description:""});
    setShow(true);
  };
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };
  const handleSubmit=()=>{
    if(form.id){
      setItems(items.map((item)=>(item.id===form.id?form:item)))
    }else{
      setItems([...items,{...form,id:Date.now().toString()}]);
    }
    handleClose();
  };
  const handleDelete=(id)=>{
    setItems(items.filter((item)=>item.id!==id));
  };
};

const App=()=> {
  return (
    <ParentComponent/>
  );
}

export default App;
