import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center transform transition-all duration-300 hover:scale-105">
          <div className="mb-8">
            <div className="text-6xl mb-4 animate-bounce">🌟</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">우리 아이 성향 찾기</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              12개의 재미있는 질문으로
              <br />
              우리 아이의 특별한 성향을
              <br />
              알아보세요!
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>⏱️</span>
              <span>약 5분 소요</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>📝</span>
              <span>총 12개의 질문</span>
            </div>
          </div>

          <Link
            to="/quiz"
            className="inline-block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
            테스트 시작하기 ✨
          </Link>

          <p className="text-xs text-gray-400 mt-4">부모님이 아이를 생각하며 답해주세요</p>
        </div>
      </div>
    </div>
  );
}
