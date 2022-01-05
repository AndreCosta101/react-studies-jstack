import React from 'react';

import Post from './Post';
import Header from './Header';

function App() {
  return (
    <>

      <Header
        title="JStack's Blog"
      >
        <h2>Posts da Semana</h2>
      </Header>
      <Post
        likes={20}
        post={{
          title: "Título da Notícia 01",
          subtitle: "subtítulo da noticia 01"
        }}
      />

      <Post
        likes={10}
        post={{
          title: "Título da Notícia 02",
          subtitle: "subtítulo da noticia 02"
        }}
      />

      <Post
        likes={50}
        post={{
          title: "Título da Notícia 03",
          subtitle: "subtítulo da noticia 03"
        }}
      />

    </>
  )
}

export default App;