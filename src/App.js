import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Containers/Game/Header/index'

import Home from './Pages/Home';
import Game from './Pages/Game';
import InventoryView from './Containers/Game/Views/Inventory/index'
import StoreView from './Containers/Game/Views/Store/index'
import DuelsView from './Containers/Game/Views/Duels/index'
import MissionsView from './Containers/Game/Views/Missions/index'
import UserPageView from './Containers/Game/Views/UserPage/index'
import SettingsView from './Containers/Game/Views/Settings/index'

import NotFound from './Pages/NotFound';
import Catalog from './Pages/Catalog';

function App() {
  return (
    <>
      <Router>

        <Header />

        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path='/catalog' element={<Catalog />} />

          <Route path='/game' element={<Game />} />
          <Route path='/game/inventory' element={<InventoryView />} />
          <Route path='/game/store' element={<StoreView />} />
          <Route path='/game/duels' element={<DuelsView />} />
          <Route path='/game/missions' element={<MissionsView />} />
          <Route path='/game/user' element={<UserPageView />} />
          <Route path='/game/settings' element={<SettingsView />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;