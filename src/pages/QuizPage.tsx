import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import { questions } from '../data/questions';

export default function QuizPage() {
  const navigate = useNavigate();
  const { state, addAnswer, nextQuestion } = useQuiz();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuestion = questions[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    if (state.isCompleted) {
      navigate('/result');
    }
  }, [state.isCompleted, navigate]);

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnimating) return;
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null || isAnimating) return;

    const answer = {
      questionId: currentQuestion.id,
      selectedType: currentQuestion.options[selectedOption].type
    };

    addAnswer(answer);
    setIsAnimating(true);

    setTimeout(() => {
      nextQuestion();
      setSelectedOption(null);
      setIsAnimating(false);
    }, 600);
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-200 h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-8">
            {/* Question Number */}
            <div className="text-center mb-6">
              <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                질문 {state.currentQuestionIndex + 1} / {questions.length}
              </span>
            </div>

            {/* Question */}
            <div
              className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 leading-relaxed">
                {currentQuestion.text}
              </h2>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${
                      selectedOption === index
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-2 border-transparent hover:border-purple-200'
                    }`}>
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedOption === index ? 'border-white bg-white' : 'border-gray-300'
                        }`}>
                        {selectedOption === index && <div className="w-3 h-3 rounded-full bg-purple-500"></div>}
                      </div>
                      <span className="text-lg font-medium">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <div className="text-center">
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null || isAnimating}
                  className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                    selectedOption !== null && !isAnimating
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105 active:scale-95'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}>
                  {state.currentQuestionIndex === questions.length - 1 ? '결과 보기' : '다음 질문'} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
