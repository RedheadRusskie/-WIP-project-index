//styles
import './Add.css';

//hooks
import { useState, useEffect } from "react";
import { useFetch, usefFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';

//other
import { projectFirestore } from '../../firebase/config';

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const completionStatus = 0;

  const handleSubmit = e => {
    e.preventDefault();
    const doc = { title, description, img, completionStatus };

    try {
      projectFirestore.collection('projects').add(doc);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="add-container">
      <form onSubmit={handleSubmit} className="add">

        <label>
          <span>Title:</span>
          <input onChange={e => setTitle(e.target.value)} value={title} type="text" required></input>
        </label>

        <label>
          <span>Description:</span>
          <input onChange={e => setDescription(e.target.value)} value={description} type="text" required></input>
        </label>

        <label>
          <span>Image Url:</span>
          <input onChange={e => setImg(e.target.value)} value={img} type="text"></input>
        </label>

        <button className="action-btn add-btn">Add project</button>
      </form>
    </div>
  );
}