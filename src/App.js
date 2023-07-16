import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { News } from './pages/News';
import Athletics from './pages/atletismo/Athletics';
import Motors from './pages/automobilismo/Motors';
import Basketball from './pages/basquete/Basketball';
import Soccer from './pages/futebol/Soccer';
import Fight from './pages/lutas/Fight';
import OtherSports from './pages/outros_esportes/OtherSports';
import Tennis from './pages/tenis/Tennis';
import Volleyball from './pages/volei/Volleyball';
import { ContactUs } from './pages/ContactUs';
import { PageNotFound } from './pages/PageNotFound';
import { ThemeProvider } from 'styled-components';
import { appTheme } from './components/Theme';
import SearchAppBar from './components/AppBar';
import FooterBar from './components/FooterBar';
import SoccerNews from './pages/futebol/SoccerNews';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <SearchAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/athletics" element={<Athletics />} />
            <Route path="/athletics/:id" element={<SoccerNews />} />
            <Route path="/motors" element={<Motors />} />
            <Route path="/motors/:id" element={<SoccerNews />} />
            <Route path="/basketball" element={<Basketball />} />
            <Route path="/basketball/:id" element={<SoccerNews />} />
            <Route path="/soccer" element={<Soccer />} />
            <Route path="/soccer/:id" element={<SoccerNews />} />
            <Route path="/fight" element={<Fight />} />
            <Route path="/fight/:id" element={<SoccerNews />} />
            <Route path="/other_sports" element={<OtherSports />} />
            <Route path="/other_sports/:id" element={<SoccerNews />} />
            <Route path="/tennis" element={<Tennis />} />
            <Route path="/tennis/:id" element={<SoccerNews />} />
            <Route path="/volleyball" element={<Volleyball />} />
            <Route path="/volleyball/:id" element={<SoccerNews />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        <FooterBar>
        </FooterBar>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;
