import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { QuizState, Answer } from '../types/mbti';

interface QuizContextType {
  state: QuizState;
  addAnswer: (answer: Answer) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

type QuizAction = { type: 'ADD_ANSWER'; answer: Answer } | { type: 'NEXT_QUESTION' } | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  currentQuestionIndex: 0,
  answers: [],
  isCompleted: false
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'ADD_ANSWER':
      const newAnswers = [...state.answers.filter(a => a.questionId !== action.answer.questionId), action.answer];
      return {
        ...state,
        answers: newAnswers
      };
    case 'NEXT_QUESTION':
      const nextIndex = state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        isCompleted: nextIndex >= 12 // 총 12개 질문
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const addAnswer = (answer: Answer) => {
    dispatch({ type: 'ADD_ANSWER', answer });
  };

  const nextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  const resetQuiz = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };

  return <QuizContext.Provider value={{ state, addAnswer, nextQuestion, resetQuiz }}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
