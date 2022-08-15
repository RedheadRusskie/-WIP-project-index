//styles
import './Add.css';

//hooks
import { useState, useEffect } from "react";
import { useFetch, usefFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const { postData, data, error } = useFetch('http://localhost:3000/projects/', 'POST');

  const completionStatus = 0;

  const handleSubmit = e => {
    e.preventDefault();
    postData({ title, description, img, completionStatus });

    setTitle("");
    setDescription("");
    setImg("");
  }

  useEffect(() => {
    if (data) navigate('/');
  }, [data]);

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
          <input onChange={e => setImg(e.target.value)} value={img} type="text" required></input>
        </label>

        <button className="action-btn add-btn">Add project</button>
      </form>
    </div>
  );
}