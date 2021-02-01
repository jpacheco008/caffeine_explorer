
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import {deleteComment, getAllComments, postComment, putComment} from "../services/comments"
import { getOneCoffee } from '../services/coffees'

export default function ItemDetail() {
  const [coffee, setCoffee] = useState(null)
  const [formData, setFormData] = useState({
    content: ''
  })

  const { id } = useParams();
  const { content } = formData;

  useEffect(() => {
    const fecthCoffee = async () => {
      const coffeeData = await getOneCoffee(id);
      setCoffee(coffeeData)
    }
    fecthCoffee();
  }, [id])
 
  // const handleDelete = async (id) => {
  //   await deleteComment(id);
  //   setComment(prevState => prevState.filter(comment => {
  //     return comment.id !== id
  //   }))
  // }

  // const handleUpdate = async (id, commentData) => {
  //   const updatedComment = await putComment(id, commentData);
  //   setComment(prevState => prevState.map(comment => {
  //     return comment.id === Number(id) ? updatedComment : comment
  //   }))
  //   history.push('/coffees')
  // }
  const coments = coffee && coffee.comments.map((coment) => {
     return coment.content
  })
  
  const handleCreate = async (commentData) => {
    const content = await postComment(commentData);
    setCoffee(prevState => ({
      ...prevState, 
      comments: [...prevState.comments, content]
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
   
  return (
    coffee ?   
    <div>
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
    <h5>{coments}</h5>
    </div>: <div>Can't find the beans</div>
  )
}
