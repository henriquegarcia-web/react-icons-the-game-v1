import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';

import Game2 from './Pages/Game2';
import Catalog from './Pages/Catalog';

import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />

          <Route path='/catalog' element={<Catalog />} />

          {/* NOVAS ROTAS */}

          <Route path='/game' element={<Game2 />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

// ------------------------ ROTAS ANTIGAS

// import Game from './Pages/Game';
// import InventoryView from './Containers/Game/Views/Inventory/index'
// import StoreView from './Containers/Game/Views/Store/index'
// import DuelsView from './Containers/Game/Views/Duels/index'
// import MissionsView from './Containers/Game/Views/Missions/index'
// import UserPageView from './Containers/Game/Views/UserPage/index'
// import SettingsView from './Containers/Game/Views/Settings/index'

// <Route path='/game' element={<Game />} />
// <Route path='/game/inventory' element={<InventoryView />} />
// <Route path='/game/store' element={<StoreView />} />
// <Route path='/game/duels' element={<DuelsView />} />
// <Route path='/game/missions' element={<MissionsView />} />
// <Route path='/game/user' element={<UserPageView />} />
// <Route path='/game/settings' element={<SettingsView />} />