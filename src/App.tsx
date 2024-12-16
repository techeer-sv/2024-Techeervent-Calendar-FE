import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.tsx';
import ModalsProvider from './components/ModalsProvider.tsx';
import Modals from './components/Modals.tsx';
import Dino from './pages/Home/components/DinoGame.tsx';
import Home from './pages/Home/Home.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ModalsProvider>
              <Layout>
                <Home />
              </Layout>
              <Modals />
            </ModalsProvider>
          }
        />
        <Route path="*" element={<Dino />} />
      </Routes>
    </Router>
  );
}

export default App;
