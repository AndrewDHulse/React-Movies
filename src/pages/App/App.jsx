import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import ActorsListPage from '../ActorsListPage/ActorsListPage'
import LoginPage from '../LoginPage/LoginPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage'

import NavBar from '../../components/Navbar/NavBar'

import { movies } from "../../data"

import './App.css'

export default function App() {
  const [user, setUser] = useState(null)
  
  function handleSignUp(name){
    setUser(name);
  }

  return (
    <main className='App'>
      { user ?
      <>
        <NavBar  user={user}/>
        <Routes>
          <Route path="/" element={<MoviesListPage movies={movies} />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
          <Route path="/actors" element={<ActorsListPage movies={movies}/>} />
        </Routes>
      </>
      :
      <LoginPage handleSignUp={handleSignUp}/>
      }
    </main>
  );
}
