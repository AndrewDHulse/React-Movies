import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import ActorsListPage from '../ActorsListPage/ActorsListPage'
import LoginPage from '../LoginPage/LoginPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage'

import NavBar from '../../components/Navbar/NavBar'

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
          <Route path="/" element={<MoviesListPage />} />
          <Route path="/movies/:movieName" element={<MovieDetailPage />} />
          <Route path="/actors" element={<ActorsListPage />} />
        </Routes>
      </>
      :
      <LoginPage handleSignUp={handleSignUp}/>
      }
    </main>
  );
}
