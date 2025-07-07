import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './contexts/QuizContext';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  // GitHub Pages 배포시에만 basepath 적용
  const basename = import.meta.env.PROD ? '/kids-mbti' : '';

  return (
    <QuizProvider>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </QuizProvider>
  );
}

export default App;
