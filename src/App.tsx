import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import { AuthProvider } from './contexts/AuthContext';
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
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/test/:id" element={<TestPage />} />
              <Route path="/result/:id" element={<ResultPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/mypage" element={<MyPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
