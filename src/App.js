import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';
import Button from './Button';

import { ThemeProvider } from './ThemeContext'

import styles from './App.scss';


function App(props) {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false, removed: true },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true, removed: false },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false, removed: false },
  ])

  function handleRefresh() {
    setPosts(prevState => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 50
      }
    ])
  }

  function handleRemovePost(postId) {
    setPosts(prevState => prevState.map(
      post => (
        post.id === postId
          ? { ...post, removed: true }
          : post
      )
    ))
  }

  return (
    <ThemeProvider>

      <Header
      // onToggleTheme={handleToggleTheme}
      >
        <h2 className={styles.title}>
          Posts da Semana

          <button
            onClick={handleRefresh}
          >Atualizar</button>
        </h2>
      </Header>

      {
        posts.map(post => (
          <Post
            key={post.id}
            onRemove={handleRemovePost}
            post={post}
          />
        ))
      }
    </ThemeProvider>
  )
}

export default App;