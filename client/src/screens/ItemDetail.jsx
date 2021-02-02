import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import {deleteComment, postComment, putComment} from "../services/comments"
import { getOneCoffee } from '../services/coffees'
import {postFavorites} from '../services/favorites'
import '../styles/ItemDetail.css'

export default function ItemDetail(props) {
  const [coffee, setCoffee] = useState(null)
  const [formData, setFormData] = useState({content: ''})
  const [editMode, setEditMode] = useState(false)
  const [currentEdit, setCurrentEdit] = useState(null)
  const { id } = useParams();
  const { content } = formData;
  console.log(props.currentUser);
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
      comments: prevState.comments.map((comment, index) => {
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
      <div key={coffee.comments.id} className='posted-comment'>
        <h5 className='comment'> { editMode && currentEdit === comment.id? 
        <form onSubmit={(e) => {
          e.preventDefault();          
            handleUpdate(e, comment.id, formData)
            setEditMode(false)
            setCurrentEdit(null)
        }}>
        <input
          type='text'
          name='content'
          placeholder='Edit Comment'
          value={content}
          onChange={handleChange}
        />
      <br/>
      <button>Submit</button>
          </form>
          : comment.content}</h5 >
        <div className='edit-icons-container'>
        <img
          className='edit-icons'
          src='https://cdn1.iconfinder.com/data/icons/internet-28/48/8-512.png'
          alt='edit'
          onClick={(e)=>enterEditMode(e, comment.id)}
          />
        <img
          className='edit-icons'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK-PGF6t3CNUCzN8V0KIirZjBh6cJMmZOtA&usqp=CAU'
          alt='delete'
          onClick={(e)=>handleDelete(e, comment.id)}
          />
        </div>
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
  const addToFavorites = async (favoriteData) => {
    const favorite = await postFavorites(favoriteData)
    // user_id: props.currentUser.id,
    // coffee_id: coffee.id;
  }
  return (
    coffee ?   
      <div key={coffee.id}>
        <div className='coffee-data'>
          <div className='name-pic-container'>
            <div className='name-link-container'>
      <Link to='/coffees' className='link-coffees'>Coffees/</Link>
      <h3 className='blend-name'>{coffee.blend_name}</h3>
            </div>
      <img className='image' src={coffee.picture} alt="Can't find the beans"/> 
          </div>
          <div className='coffee-stats-container'>           
      <h5 className='coffee-stats'>Origin:<br />{coffee.origin}</h5>
      <h5 className='coffee-stats'>Variety:<br />{coffee.variety}</h5>
      <h5 className='coffee-stats'>Notes:<br />{coffee.notes}</h5>
      <h5 className='coffee-stats'>Intensifier:<br />{coffee.intensifier}</h5>
            <h5 className='coffee-stats'>Caffeine Level:<br />{coffee.caffeine_level}</h5>
            <h5 className='add-fav'
              onClick={() => addToFavorites(coffee.id)}
            >+ Add to Favorites</h5>
          </div>
        </div>
      <div className='comments-container'>
        <form
          className='comments-form'
          onSubmit={(e) => {
            e.preventDefault();          
            handleCreate({ ...formData, coffee_id: id });
          }}>
        <input
          className='input-bar'
          type='text'
          name='content'
          placeholder='Leave a comment'
          value={content}
          onChange={handleChange}
          />
      <br/>
          <button>Submit</button>
    </form>
      <br/>
        <div>{comments}
        </div>
      </div>
    </div>: <>Looking for the beans</>
  )
}
