import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Landing from "../screens/Landing";
import List from "../screens/List";
import Profile from "../screens/Profile";
import { getAllCoffees } from "../services/coffees";
import {deleteComment, getAllComments, postComment, putComment} from "../services/comments"


export default function MainConainer(props) {
  const [list, setList] = useState([]);
  const [comment, setComment] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchList = async () => {
      const coffeeData = await getAllCoffees();
      setList(coffeeData)
    }
    fetchList();
  }, []);

  useEffect(() => {
    const fetchComment = async () => {
      const commentData = await getAllComments()
      setComment(commentData)
    }
    fetchComment();
  }, []);

  const handleCreate = async (commentData) => {
    const newComment = await postComment(commentData);
    setComment(prevState => [...prevState, newComment])
    history.push('/coffees')
  }

  const handleDelete = async (id) => {
    await deleteComment(id);
    setComment(prevState => prevState.filter(comment => {
      return comment.id !== id
    }))
  }

  const handleUpdate = async (id, commentData) => {
    const updatedComment = await putComment(id, commentData);
    setComment(prevState => prevState.map(comment => {
      return comment.id === Number(id) ? updatedComment : comment
    }))
    history.push('/coffees')
  }

  return (
    <Switch>
      <Route path='/profile'>
        <Profile currentUser={currentUser}/>
      </Route>
      <Route path='/coffees'>
        <List coffees={list} comment={comment} currentUser={currentUser}/>
      </Route>
      <Route path='/'>
        <Landing />
      </Route>
    </Switch>
  )

}