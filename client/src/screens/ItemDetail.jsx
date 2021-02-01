
import { useParams,useHistory } from 'react-router-dom'
import { useEffect, useState } from "react";
import {deleteComment, getAllComments, postComment, putComment} from "../services/comments"
import { getOneCoffee } from '../services/coffees'

export default function ItemDetail() {
  const [coffee, setCoffee] = useState(null)
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fecthCoffee = async () => {
      const coffeeData = await getOneCoffee(id);
      setCoffee(coffeeData)
    }
    fecthCoffee();
  }, [])
 
  // const handleCreate = async (commentData) => {
  //   const newComment = await postComment(commentData);
  //   setComment(prevState => [...prevState, newComment])
  //   history.push('/coffees')
  // }

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
      <h5>{coments}</h5>
    </div>: <div>Can't find the beans</div>
  )
}
