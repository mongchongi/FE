import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TouristAttraction from './pages/TouristAttraction';
import Statistics from './pages/Statistics';
import Goods from './pages/Goods';
import Layout from './components/Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/tourist-attraction' element={<TouristAttraction />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/goods' element={<Goods />} />
      </Route>
    </Routes>
  );
};

export default App;
