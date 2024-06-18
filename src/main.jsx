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
import { Friends } from './layout/Dashboards/Components/Friends/Friends';
import { S2tProvider } from './contexts/s2tContext/S2tProvider';
import { Scouts } from './layout/Dashboards/Components/Scouts/Scouts';
import { Clubs } from './layout/Dashboards/Components/Clubs/Clubs';
import { Opportunities } from './layout/Dashboards/Components/Opportunities/Opportunities';
import { PlayerRegister } from './layout/Register/components/PlayerRegister/PlayerRegister';
import { EditProfile } from './layout/Dashboards/Components/EditProfile/EditProfile';
import { Favorites } from './layout/Dashboards/Components/Favorites/Favorites';
import { ClubDashboard } from './layout/Dashboards/ClubDashboard/ClubDashboard';
import { playerData } from './contexts/userContext/PlayerProvider/playerData';
import { ClubFavorites } from './layout/Dashboards/Components/ClubComponents/ClubFavorites/ClubFavorites';
import { ClubProvider } from './contexts/userContext/ClubProvider/ClubProvider';
import { clubData } from './contexts/userContext/ClubProvider/clubData';
import { ClubProfile } from './layout/Dashboards/Components/ClubComponents/ClubProfile/ClubProfile';
import { PlayerProfile } from './layout/Dashboards/Components/PlayerComponents/PlayerProfile/PlayerProfile';
import { MyOpportunities } from './layout/Dashboards/Components/ClubComponents/MyOpportunities/MyOpportunities';
import { Players } from './layout/Dashboards/Components/Players/Players';
import { MySquad } from './layout/Dashboards/Components/ClubComponents/MySquad/MySquad';
import { UniversityDashboard } from './layout/Dashboards/UniversityDashboard/UniversityDashboard';
import { UniversityProvider } from './contexts/userContext/UniversityProvider/UniversityProvider';
import { SoloSlide } from './components/elements/SoloSlide/SoloSlide';
import { Events } from './layout/Dashboards/Components/Events/Events';
import { S2TPlus } from './layout/Dashboards/Components/S2TPlus/S2TPlus';
import { UserInfo } from './layout/UserInfo/UserInfo';

register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Fornecendo o tema para os componentes */}
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        <S2tProvider>

          <PlayerProvider>
            <ClubProvider>
              <UniversityProvider>

                <GlobalStyles />

                <Routes>
                  <Route path="/" element={<Home />} />

                  {/* Rota do dashboard para jogadores + subrotas dele */}
                  <Route path="/player-dashboard/" element={<PlayerDashboard />}>
                    <Route path="profile" element={<PlayerProfile />} />
                    <Route path="profile-edit" element={<EditProfile type="player" />} />
                    <Route path="opportunities" element={<Opportunities />} />
                    <Route path="scouts" element={<Scouts />} />
                    <Route path="clubs" element={<Clubs />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="contacts" element={<h1>Em construção... :)</h1>} />
                    <Route path="events" element={<Events />} />
                    <Route path="friends" element={<Friends friends={playerData.friends} />} />
                    <Route path="s2tplus" element={<S2TPlus />} />
                  </Route>

                  {/* Rota do dashboard para clubes + subrotas dele */}
                  <Route path="/club-dashboard/" element={<ClubDashboard />}>
                    <Route path="profile" element={<ClubProfile />} />
                    <Route path="my-squad" element={<MySquad />} />
                    <Route path="profile-edit" element={<EditProfile type="club" />} />
                    <Route path="opportunities" element={<Opportunities />} />
                    <Route path="my-opportunities" element={<MyOpportunities />} />
                    <Route path="scouts" element={<Scouts />} />
                    <Route path="clubs" element={<Clubs />} />
                    <Route path="players" element={<Players />} />
                    <Route path="favorites" element={<ClubFavorites />} />
                    <Route path="events" element={<Events />} />
                    <Route path="contacts" element={<h1>Em construção... :)</h1>} />
                    <Route path="friends" element={<Friends friends={clubData.friends} />} />
                  </Route>

                  <Route path="/university-dashboard/" element={<UniversityDashboard />}>
                    <Route path="profile" element={<ClubProfile />} />
                    <Route path="my-squad" element={<MySquad />} />
                    <Route path="profile-edit" element={<EditProfile type="university" />} />
                    <Route path="opportunities" element={<Opportunities />} />
                    <Route path="my-opportunities" element={<MyOpportunities />} />
                    <Route path="scouts" element={<Scouts />} />
                    <Route path="clubs" element={<Clubs />} />
                    <Route path="players" element={<Players />} />
                    <Route path="favorites" element={<ClubFavorites />} />
                    <Route path="events" element={<Events />} />
                    <Route path="contacts" element={<h1>Em construção... :)</h1>} />
                    <Route path="friends" element={<Friends friends={clubData.friends} />} />
                  </Route>

                  <Route path="/register" element={<Register />} />
                  <Route path="/user-info" element={<UserInfo />} />

                  <Route path="/register/scout" element={<p>scout</p>} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/password-reset" element={<Home />} />

                </Routes>

              </UniversityProvider>
            </ClubProvider>
          </PlayerProvider>
        </S2tProvider>

      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
