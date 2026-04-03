import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import { useEffect } from 'react';
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize([
      {
        trackingId: import.meta.env.VITE_GA_TRACKING_ID,
        gaOptions: {
          siteSpeedSampleRate: 100,
        },
      },
    ]);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full" style={{ backgroundColor: '#f5f5f5' }}>
        <div
          className="mx-auto bg-white min-h-screen"
          style={{
            width: '680px',
            maxWidth: '100%',
            boxShadow: '0 0 40px rgba(0,0,0,0.08)',
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test/:id" element={<TestPage />} />
            <Route path="/result/:id" element={<ResultPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
