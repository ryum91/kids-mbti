import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../contexts/QuizContext';
import { calculateMBTIResult } from '../utils/mbtiCalculator';
import { getCompatibilityInfo } from '../data/compatibility';
import type { MBTIResult, MBTIType } from '../types/mbti';

export default function ResultPage() {
  const { state, resetQuiz } = useQuiz();
  const [result, setResult] = useState<MBTIResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (state.answers.length === 12) {
      // 로딩 애니메이션을 위한 지연
      setTimeout(() => {
        const mbtiResult = calculateMBTIResult(state.answers);
        setResult(mbtiResult);
        setIsLoading(false);
      }, 1500);
    }
  }, [state.answers]);

  const handleRestart = () => {
    resetQuiz();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-6 animate-spin">🔮</div>
          <h2 className="text-2xl font-bold text-white mb-4">결과를 분석하고 있어요...</h2>
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-3 h-3 bg-white rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">오류가 발생했어요</h2>
          <p className="text-gray-600 mb-6">테스트를 다시 시작해주세요.</p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105">
            처음으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-center text-white">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h1 className="text-3xl font-bold mb-2">테스트 완료!</h1>
            <p className="text-lg opacity-90">우리 아이의 성향을 알아봤어요</p>
          </div>

          <div className="p-8">
            {/* MBTI Result */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl text-4xl font-bold mb-4 shadow-lg">
                {result.type}
              </div>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">{result.description}</p>
            </div>

            {/* Scores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(result.scores).map(([axis, score]) => (
                <div key={axis} className="bg-gray-50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">{score.primary}</div>
                  <div className="text-sm text-gray-500">{axis} 축</div>
                  <div className="text-sm text-gray-600 mt-1">{score.score}/3</div>
                </div>
              ))}
            </div>

            {/* Traits */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">우리 아이의 특징 ✨</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.traits.map((trait, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4 flex items-center space-x-3 transform transition-all duration-300 hover:scale-105">
                    <div className="text-2xl">💫</div>
                    <span className="text-gray-700 font-medium">{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatibility */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">나와 제일 잘 맞는 친구의 유형은? 👫</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getCompatibilityInfo(result.type as MBTIType).bestMatches.map((match, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="text-center mb-4">
                      <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl text-xl font-bold mb-2 shadow-md">
                        {match.type}
                      </div>
                      <div className="text-3xl mb-2">🤝</div>
                    </div>
                    <p className="text-gray-700 text-center leading-relaxed font-medium">{match.reason}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-xl border border-blue-200">
                  💝 친구들과의 관계는 서로 다른 점을 이해하고 존중할 때 더욱 특별해져요!
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                다시 테스트하기 🔄
              </button>
              <Link
                to="/"
                className="inline-block text-center bg-white border-2 border-purple-300 text-purple-600 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:bg-purple-50 hover:scale-105 active:scale-95">
                처음으로 돌아가기 🏠
              </Link>
            </div>

            {/* Note */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-2xl">
              <p className="text-sm text-yellow-800 text-center">
                💡 이 결과는 현재 시점의 성향을 보여주는 참고 자료입니다. 아이는 성장하면서 다양한 면을 보여줄 수
                있어요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
