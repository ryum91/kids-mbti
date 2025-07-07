import type { Question } from '../types/mbti';

export const questions: Question[] = [
  // E/I 축 (외향성 vs 내향성)
  {
    id: 1,
    axis: 'EI',
    text: '새로운 친구를 만났을 때 어떻게 행동하나요?',
    options: [
      { text: '먼저 말을 걸고 함께 놀자고 해요', type: 'E' },
      { text: '조용히 관찰하다가 천천히 다가가요', type: 'I' }
    ]
  },
  {
    id: 2,
    axis: 'EI',
    text: '놀이터에서 어떤 놀이를 더 좋아하나요?',
    options: [
      { text: '많은 친구들과 함께 술래잡기나 축구', type: 'E' },
      { text: '한두 명의 친구와 조용한 놀이', type: 'I' }
    ]
  },
  {
    id: 3,
    axis: 'EI',
    text: '파티나 모임에서는 어떤 모습인가요?',
    options: [
      { text: '신나서 이곳저곳 돌아다니며 모든 사람과 인사해요', type: 'E' },
      { text: '좋아하는 사람들과만 조용히 이야기해요', type: 'I' }
    ]
  },

  // S/N 축 (감각 vs 직관)
  {
    id: 4,
    axis: 'SN',
    text: '그림을 그릴 때 무엇을 그리나요?',
    options: [
      { text: '실제로 본 것들을 자세히 그려요 (집, 나무, 동물 등)', type: 'S' },
      { text: '상상 속의 것들을 그려요 (용, 우주, 마법사 등)', type: 'N' }
    ]
  },
  {
    id: 5,
    axis: 'SN',
    text: '새로운 장난감을 받으면 어떻게 하나요?',
    options: [
      { text: '설명서를 보고 정확히 만들어요', type: 'S' },
      { text: '내 방식대로 자유롭게 만들어요', type: 'N' }
    ]
  },
  {
    id: 6,
    axis: 'SN',
    text: '이야기를 들을 때 어떤 것을 더 좋아하나요?',
    options: [
      { text: '실제 있었던 일이나 동물 이야기', type: 'S' },
      { text: '마법이나 상상의 모험 이야기', type: 'N' }
    ]
  },

  // T/F 축 (사고 vs 감정)
  {
    id: 7,
    axis: 'TF',
    text: '친구가 울고 있을 때 어떻게 하나요?',
    options: [
      { text: '왜 우는지 이유를 물어보고 해결방법을 찾아줘요', type: 'T' },
      { text: '꼭 안아주고 함께 슬퍼해줘요', type: 'F' }
    ]
  },
  {
    id: 8,
    axis: 'TF',
    text: '게임에서 졌을 때 어떤 기분인가요?',
    options: [
      { text: '다음엔 이기는 방법을 생각해봐요', type: 'T' },
      { text: '속상하고 누군가 위로해주길 바라요', type: 'F' }
    ]
  },
  {
    id: 9,
    axis: 'TF',
    text: '친구와 다툰 후에는 어떻게 하나요?',
    options: [
      { text: '누가 옳고 그른지 따져봐요', type: 'T' },
      { text: '빨리 화해하고 싶어해요', type: 'F' }
    ]
  },

  // J/P 축 (판단 vs 인식)
  {
    id: 10,
    axis: 'JP',
    text: '방 정리는 어떻게 하나요?',
    options: [
      { text: '정해진 곳에 차곡차곡 정리해요', type: 'J' },
      { text: '편한 곳에 두고 나중에 정리해요', type: 'P' }
    ]
  },
  {
    id: 11,
    axis: 'JP',
    text: '계획 세우는 것에 대해 어떻게 생각하나요?',
    options: [
      { text: '미리미리 계획을 세우는 게 좋아요', type: 'J' },
      { text: '그때그때 하고 싶은 걸 하는 게 좋아요', type: 'P' }
    ]
  },
  {
    id: 12,
    axis: 'JP',
    text: '숙제나 할 일이 있을 때는?',
    options: [
      { text: '빨리 끝내고 놀고 싶어요', type: 'J' },
      { text: '놀다가 마지막에 해도 괜찮아요', type: 'P' }
    ]
  }
];
