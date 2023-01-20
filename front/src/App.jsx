import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
// import Button from 'react-bootstrap/Button'
// import {Button} from 'react-bootstrap'

//* Pages
import './App.css'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Accueil from "./containers/Accueil"
import Inscription from "./containers/Inscription"
import Connexion from "./containers/Connexion"
import Profil from "./containers/Profil"
import Categorie from "./containers/Categorie"
import Produits from "./containers/Produits"
import Details from "./containers/Details"
import Panier from "./containers/Panier"
import Payement from "./containers/Payement"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <Routes>
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Categorie" element={<Categorie />} />
          <Route path="/Categorie/Produits" element={<Produits />} />
          {/* <Route path="/Categorie/:id/Produits" element={<Produits />} /> */}
          {/* <Route path="/Produits" element={<Produit />} /> */}
          <Route path="/Details" element={<Details />} />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Payement" element={<Payement />} />
      </Routes>
      <AppFooter/>
    </>
  )
}

export default App
