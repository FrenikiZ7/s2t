//  o React e ReactDOM para construir e renderizar os componentes React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { register } from 'swiper/element/bundle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global-styles';

import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/element/css/autoplay';

import { Login } from './layout/Login/Login';
import { Register } from './layout/Register/Register';
import { PlayerProvider } from './contexts/userContext/PlayerProvider/PlayerProvider';
import { PlayerDashboard } from './layout/Dashboards/PlayerDashboard/PlayerDashboard';
import { Home } from './layout/Home/Home';
import { Profile } from './layout/Dashboards/Components/Profile/Profile';

register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Fornecendo o tema para os componentes */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        {/* Fornecendo o contexto com os dados jogador */}
        <PlayerProvider>

          {/* Aplicando estilos globais em todos os componentes abaixo */}
          <GlobalStyles />

          {/* Todas as rotas do site */}
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Rota do dashboard + subrotas dele */}
            <Route path="/player-dashboard/" element={<PlayerDashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="profile-edit" element={<h1>Editar Perfil</h1>} />
              <Route path="opportunities" element={<h1>oportunidades</h1>} />
              <Route path="scout" element={<h1>Scout</h1>} />
              <Route path="partners" element={<h1>Parceiros</h1>} />
              <Route path="contacts" element={<h1>Contatos</h1>} />
              <Route path="friends" element={<h1>Amigos</h1>} />
            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-reset" element={<Home />} />

          </Routes>
        </PlayerProvider>

      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
