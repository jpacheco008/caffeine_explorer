import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import {deleteComment, postComment, putComment} from "../services/comments"
import { getOneCoffee } from '../services/coffees'

export default function ItemDetail() {
  const [coffee, setCoffee] = useState(null)
  const [formData, setFormData] = useState({content: ''})
  const [editMode, setEditMode] = useState(false)
  const [currentEdit, setCurrentEdit] = useState(null)
  const { id } = useParams();
  const { content } = formData;

  useEffect(() => {
    const fecthCoffee = async () => {
      const coffeeData = await getOneCoffee(id);
      setCoffee(coffeeData)
    }
    fecthCoffee();
  }, [id])
 
  const handleUpdate = async (e, id, commentData) => {
    const updatedComment = await putComment(id, commentData);
    setCoffee(prevState => ({
      ...prevState,
      comments: prevState.comments.map(comment => {
        return comment.id === Number(id) ? updatedComment : comment
      })
    }))
  }
  const handleDelete = async (e, id) => {
    await deleteComment(id);
    setCoffee(prevState => ({
      ...prevState,
      comments: prevState.comments.filter(comment => {
      return comment.id !== id})
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const comments = coffee && coffee.comments.map((comment) => {
    return (
      <div key={coffee.comments.id}>
        < h5> { editMode && currentEdit === comment.id? 
        <form onSubmit={(e) => {
          e.preventDefault();          
            handleUpdate(e, comment.id, formData)
            setEditMode(false)
            setCurrentEdit(null)
        }}>
      <h4>Edit Comment</h4>
        <input
          type='text'
          name='content'
          value={content}
          onChange={handleChange}
        />
      <br/>
      <button>Submit</button>
          </form>
          : comment.content }</h5 >
        <button onClick={(e)=>handleDelete(e, comment.id)}>Delete</button>
        <button onClick={(e)=>enterEditMode(e, comment.id)}>Edit</button>
      </div>
    )
  })
  const enterEditMode = (e, id) => {
    setEditMode(true)
    setCurrentEdit(id)
  }
  const handleCreate = async (commentData) => {
    const content = await postComment(commentData);
    setCoffee(prevState => ({
      ...prevState, 
      comments: [...prevState.comments, content]
    }))
  }

   
  return (
    coffee ?   
    <div key={coffee.id}>
      <h3>{coffee.blend_name}</h3>
      <h5>{coffee.origin}</h5>
      <h5>{coffee.variety}</h5>
      <h5>{coffee.notes}</h5>
      <h5>{coffee.intensifier}</h5>
      <h5>{coffee.caffeine_level}</h5>
      <img src={coffee.picture} alt="Can't find the beans"/> 
    <form onSubmit={(e) => {
          e.preventDefault();          
          handleCreate({ ...formData, coffee_id: id });
    }}>
      <h4>Comments</h4>
        <input
          type='text'
          name='content'
          value={content}
          onChange={handleChange}
        />
      <br/>
          <button>Submit</button>
    </form>
      <br/>
        <div>{comments}
        </div>
    </div>: <div>Can't find the beans</div>
  )
}
