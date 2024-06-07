import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PostList from './Components/PostList';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <PostList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
