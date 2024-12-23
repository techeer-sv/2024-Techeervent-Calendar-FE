import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Layout from './Layout.tsx';
import ModalsProvider from './components/ModalsProvider.tsx';
import Modals from './components/Modals.tsx';
import Dino from './pages/Home/components/DinoGame.tsx';
import Home from './pages/Home/Home.tsx';
import BGM from './components/BGM.tsx';

function AppLayout() {
  return (
    <ModalsProvider>
      <Layout>
        <Outlet />
      </Layout>
      <Modals />
    </ModalsProvider>
  );
}

function App() {
  return (
    <div>
      <BGM />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<Dino />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
