import React from 'react';
import { ThemeProvider } from 'styled-components';
import { register } from 'swiper/element/bundle';
import {
  BrowserRouter, Routes, Route, useParams,
} from 'react-router-dom';
import Prop from 'prop-types';
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
import { ClubDashboard } from './layout/Dashboards/ClubDashboard/ClubDashboard';
import { playerData } from './contexts/userContext/PlayerProvider/playerData';
import { ClubFavorites } from './layout/Dashboards/Components/ClubComponents/ClubFavorites/ClubFavorites';
import { ClubProvider } from './contexts/userContext/ClubProvider/ClubProvider';
import { clubData } from './contexts/userContext/ClubProvider/clubData';
import { ClubProfile } from './layout/Dashboards/Components/ClubComponents/ClubProfile/ClubProfile';
import { PlayerProfile } from './layout/Dashboards/Components/PlayerComponents/PlayerProfile/PlayerProfile';
import { Players } from './layout/Dashboards/Components/Players/Players';
import { UniversityDashboard } from './layout/Dashboards/UniversityDashboard/UniversityDashboard';
import { UniversityProvider } from './contexts/userContext/UniversityProvider/UniversityProvider';
import { Events } from './layout/Dashboards/Components/Events/Events';
import { S2TPlus } from './layout/Dashboards/Components/S2TPlus/S2TPlus';
import { PublicDashboard } from './layout/Dashboards/PublicDashboard/PublicDashboard';
import { PublicProfile } from './layout/Dashboards/Components/PublicComponents/PublicProfile/PublicProfile';
import { ForgotPassword } from './layout/ForgotPassword/ForgotPassword';
import { ResetPassword } from './layout/ResetPassword/ResetPassword';
import { MyAffiliates } from './layout/Dashboards/Components/MyAffiliates/MyAffiliates';
import { PlayerHome } from './layout/Dashboards/Components/PlayerComponents/PlayerHome/PlayerHome';
import { Store } from './layout/Dashboards/Components/Store/Store';
import { PlayerFavorites } from './layout/Dashboards/Components/PlayerComponents/PlayerFavorites/PlayerFavorites';
import { s2tData } from './contexts/s2tContext/s2tData';
import { PlayerContacts } from './layout/Dashboards/Components/PlayerComponents/PlayerContacts/PlayerContacts';
import { ClubHome } from './layout/Dashboards/Components/ClubComponents/ClubHome/ClubHome';
import { MyOpportunities } from './layout/Dashboards/Components/MyOpportunities/MyOpportunities';
import { MySquad } from './layout/Dashboards/Components/MySquad/MySquad';

export function Main() {
  const { username } = useParams();

  register();

  return (
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
                    <Route path="" element={<PlayerHome />} />
                    <Route path="profile" element={<PlayerProfile />} />
                    <Route path="profile-edit" element={<EditProfile type="player" />} />
                    <Route path="opportunities" element={<Opportunities />} />
                    <Route path="scouts" element={<Scouts />} />
                    <Route path="clubs" element={<Clubs />} />
                    <Route path="favorites" element={<PlayerFavorites />} />
                    <Route path="contacts" element={<PlayerContacts />} />
                    <Route path="events" element={<Events />} />
                    <Route path="friends" element={<Friends friends={playerData.friends} />} />
                    <Route path="store" element={<Store />} />
                    <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                    <Route path="s2t+" element={<S2TPlus />} />
                  </Route>

                  <Route path="/staff-dashboard/" element={<PlayerDashboard />}>
                    <Route path="" element={<PlayerHome />} />
                    <Route path="profile" element={<PlayerProfile />} />
                    <Route path="profile-edit" element={<EditProfile type="player" />} />
                    <Route path="opportunities" element={<Opportunities />} />
                    <Route path="scouts" element={<Scouts />} />
                    <Route path="clubs" element={<Clubs />} />
                    <Route path="favorites" element={<PlayerFavorites />} />
                    <Route path="contacts" element={<h1>Em construção... :)</h1>} />
                    <Route path="events" element={<Events />} />
                    <Route path="friends" element={<Friends friends={playerData.friends} />} />
                    <Route path="store" element={<Store />} />
                    <Route path="my-affiliates" element={<MyAffiliates affiliates={s2tData.users.scouts} />} />
                    <Route path="s2t+" element={<S2TPlus />} />
                  </Route>

                  {/* Rota do dashboard para clubes + subrotas dele */}
                  <Route path="/club-dashboard/" element={<ClubDashboard />}>
                    <Route path="" element={<ClubHome />} />
                    <Route path="profile" element={<ClubProfile />} />
                    <Route path="my-squad" element={<MySquad />} />
                    <Route path="profile-edit" element={<EditProfile type="club" />} />
                    <Route path="opportunities" element={<Opportunities />} />
                    <Route path="my-opportunities" element={<MyOpportunities opportunities={s2tData.proposals.male.professional.agents} />} />
                    <Route path="scouts" element={<Scouts />} />
                    <Route path="clubs" element={<Clubs />} />
                    <Route path="players" element={<Players />} />
                    <Route path="favorites" element={<ClubFavorites />} />
                    <Route path="events" element={<Events />} />
                    <Route path="contacts" element={<h1>Em construção... :)</h1>} />
                    <Route path="friends" element={<Friends friends={clubData.friends} />} />
                    <Route path="store" element={<Store />} />
                    <Route path="s2t+" element={<S2TPlus />} />
                  </Route>

                  <Route path="/university-dashboard/" element={<UniversityDashboard />}>
                    <Route path="" element={<ClubHome />} />
                    <Route path="profile" element={<ClubProfile />} />
                    <Route path="my-squad" element={<MySquad />} />
                    <Route path="profile-edit" element={<EditProfile type="university" />} />
                    <Route path="opportunities" element={<MySquad />} />
                    <Route path="my-opportunities" element={<MyOpportunities />} />
                    <Route path="scouts" element={<Scouts />} />
                    <Route path="clubs" element={<Clubs />} />
                    <Route path="players" element={<Players />} />
                    <Route path="favorites" element={<ClubFavorites />} />
                    <Route path="events" element={<Events />} />
                    <Route path="contacts" element={<h1>Em construção... :)</h1>} />
                    <Route path="friends" element={<Friends friends={clubData.friends} />} />
                    <Route path="store" element={<Store />} />
                    <Route path="s2t+" element={<S2TPlus />} />
                  </Route>

                  <Route path="/user/:username" element={<PublicDashboard />}>
                    <Route path="profile" element={<PublicProfile />} />
                    <Route path="squad" element={<Players />} />
                    <Route path="opportunities" element={<Opportunities />} />
                    <Route path="friends" element={<Friends friends={clubData.friends} />} />
                  </Route>

                  <Route path="/register" element={<Register />} />

                  <Route path="/register/scout" element={<p>scout</p>} />

                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />

                </Routes>

              </UniversityProvider>
            </ClubProvider>
          </PlayerProvider>
        </S2tProvider>

      </BrowserRouter>
    </ThemeProvider>
  );
}
