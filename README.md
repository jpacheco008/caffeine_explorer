# CAFFEINE EXPLORER README <!-- omit in toc -->
Deployed URL: https://modest-tesla-2c628d.netlify.app

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

CAFFEINE EXPLORER is an app that allows the user to browse thru a selection of fictional coffees generated with Fakker. The user will be able to make an account and have more functionality avialable (leave a comment on a coffee).  


<br>

## MVP

The CAFFEINE EXPLORER MVP is to achive authentication, full CRUD (front and back end) using the 3 generated tables, and have responsive design for 3 size screens.

<br>

### Goals

- Authentification
- Back end full CRUD
- Front end full CRUD
- Stylish design
- Responsive design
- Succesful deployment
- Add comments to coffees

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end framework                        |
|   React Router   | React virtual DOM manipulation             |
| Axios            | API calls                                  |
|     Ruby         | Back end language                          |
|  Ruby on Rails   | Back end framework                         |
|  Fakker          | Data creation                              |
|  SASS            | Styling                                    |

<br>

### Client (Front End)

#### Wireframes

![Landing/List Wireframes](https://github.com/jpacheco008/caffeine_explorer/blob/main/WireFrames_Landind:List.png)

- Landing/List Wireframes

![Item/Profile Wireframes](https://github.com/jpacheco008/caffeine_explorer/blob/main/WireFrames_Item:Profile.png)

- Item/Profile Wireframes

![Create/Edit Wireframes](https://github.com/jpacheco008/caffeine_explorer/blob/main/WireFrames_Create:Edit.png)

- Create/Edit Wireframes

![Register/Login Wreframes](https://github.com/jpacheco008/caffeine_explorer/blob/main/WireFrames_Registre:Login.png)

- Register/Login Wreframes


#### Component Hierarchy
 
``` structure

src
|__ containers/
      |__ mainContainer.jsx
|__ layouts/
      |__ Layout.jsx
      |__ Nav.jsx
|__ styles/
      |__ main.css
      |__ main.css.map
      |__ main.sass
|__ components/
      |__ Search.jsx
      |__ Coffee.jsx
|__ screens/
      |__ Landing.jsx
      |__ List.jsx
      |__ Item.jsx
      |__ Profile.jsx
      |__ Create.jsx
      |__ EditItem.jsx
      |__ Register.jsx
      |__ Longin.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ coffees.js
      |__ favorites.js

```

#### Component Tree

[Component_Tree](https://github.com/jpacheco008/caffeine_explorer/blob/main/component_tree.png)

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Planning            |    H     |     5 hrs      |     4 hrs     |    4hrs     |
| Create Back end     |    H     |     2 hrs      |     5hrs      |    5hrs     |
| Back end Auth       |    H     |     3 hrs      |     1hr       |     1hr     |
| Back end CRUD       |    H     |     5 hrs      |     6hrs      |     6hrs    |
| Front end Auth      |    H     |     2 hrs      |     2hrs      |     2hrs    |
| Front end CRUD      |    H     |     5 hrs      |     9hrs      |     8hrs    |
| Styling             |    H     |     12 hrs     |     10hrs     |     10hr    |
| Responsive design   |    H     |     5 hrs      |     4hrs      |     4hrs    |
| Post MVP            |    H     |     10 hrs     |     2hrs      |     2hrs    |
| TOTAL               |          |     49 hrs     |     43hrs     |     42hrs   |


<br>

### Server (Back End)

#### ERD Model

![ERD_Model](https://github.com/jpacheco008/caffeine_explorer/blob/main/ERD.png)

<br>

***

## Post-MVP

- Another screen to see other user's favorite list
- Add and edit coffees
- Add questionarie for coffee suggestions
- Make it more like a sudo coffee subscription service 

***

## Code Showcase
```
const comments =
    coffee &&
    coffee.comments.map((comment) => {
      return (
        <div key={comment.id} className="posted-comment">
          <h5 className="comment">
            {" "}
            {editMode && currentEdit === comment.id ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdate(e, comment.id, formData);
                  setEditMode(false);
                  setCurrentEdit(null);
                }}
              >
                <input
                  type="text"
                  name="content"
                  placeholder="Edit Comment"
                  value={content}
                  onChange={handleChange}
                />
                <br />
                <button>Submit</button>
              </form>
            ) : (
              comment.content
            )}
          </h5>
          <div className="edit-icons-container">
            <img
              className="edit-icons"
              src="https://cdn1.iconfinder.com/data/icons/internet-28/48/8-512.png"
              alt="edit"
              onClick={(e) => enterEditMode(e, comment.id)}
            />
            <img
              className="edit-icons"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlK-PGF6t3CNUCzN8V0KIirZjBh6cJMmZOtA&usqp=CAU"
              alt="delete"
              onClick={(e) => handleDelete(e, comment.id)}
            />
          </div>
        </div>
      );
    });
```

## Code Issues & Resolutions
- Getting the comment section to work was a challenge. Every handle for the different API calls were vastly different since so much information is being passed down thru nested props. Destructuring all the props helped visualizing it better.