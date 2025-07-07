import type { MBTIResult, Answer, MBTIType } from '../types/mbti';

export const mbtiDescriptions: Record<string, { description: string; traits: string[] }> = {
  ENFP: {
    description:
      '호기심 많고 창의적인 탐험가! 새로운 것을 좋아하고 친구들과 함께 재미있는 일을 만들어내는 것을 좋아해요.',
    traits: [
      '창의적이고 상상력이 풍부해요',
      '친구들과 어울리기를 좋아해요',
      '새로운 경험에 열려있어요',
      '감정 표현이 자유로워요'
    ]
  },
  ENFJ: {
    description: '따뜻하고 배려심 많은 리더! 친구들을 도와주고 모두가 행복하게 지낼 수 있도록 노력해요.',
    traits: [
      '다른 사람을 잘 도와줘요',
      '친구들의 기분을 잘 알아차려요',
      '계획을 세우는 것을 좋아해요',
      '화합을 중요하게 생각해요'
    ]
  },
  ENTP: {
    description: '똑똑하고 재치있는 발명가! 새로운 아이디어를 많이 내고 문제를 창의적으로 해결해요.',
    traits: ['아이디어가 많아요', '논리적으로 생각해요', '변화를 좋아해요', '호기심이 많아요']
  },
  ENTJ: {
    description: '자신감 있고 결단력 있는 지휘관! 목표를 정하고 그것을 이루기 위해 열심히 노력해요.',
    traits: ['리더십이 있어요', '계획적이에요', '논리적으로 판단해요', '목표 지향적이에요']
  },
  ESFP: {
    description: '밝고 활발한 연예인! 순간순간을 즐기고 친구들과 함께 있을 때 가장 행복해해요.',
    traits: ['활동적이고 에너지가 넘쳐요', '친구들과 노는 것을 좋아해요', '현재를 즐겨요', '감정이 풍부해요']
  },
  ESFJ: {
    description: '친절하고 협력적인 돌보미! 다른 사람들을 챙기고 모두가 편안하게 느끼도록 도와줘요.',
    traits: ['다른 사람을 잘 챙겨줘요', '협력하는 것을 좋아해요', '실용적이에요', '전통을 중요하게 생각해요']
  },
  ESTP: {
    description: '모험을 좋아하는 실용주의자! 활동적이고 지금 당장 재미있는 일을 찾아 나서요.',
    traits: ['활동적이고 모험을 좋아해요', '실용적이에요', '적응력이 뛰어나요', '손으로 만지고 경험하는 것을 좋아해요']
  },
  ESTJ: {
    description: '책임감 강한 관리자! 계획을 세우고 규칙을 지키며 일을 체계적으로 처리해요.',
    traits: ['체계적이고 계획적이에요', '책임감이 강해요', '현실적이에요', '목표를 달성하려고 노력해요']
  },
  INFP: {
    description: '따뜻하고 이상주의적인 중재자! 자신만의 세계가 있고 창의적인 활동을 좋아해요.',
    traits: ['창의적이고 상상력이 풍부해요', '감정이 깊어요', '개성을 중요하게 생각해요', '조용한 시간을 좋아해요']
  },
  INFJ: {
    description: '통찰력 있고 이상주의적인 옹호자! 깊이 생각하고 다른 사람의 마음을 잘 이해해요.',
    traits: ['직감이 뛰어나요', '계획적이에요', '감정이 섬세해요', '의미 있는 일을 좋아해요']
  },
  INTP: {
    description: '논리적이고 창의적인 사색가! 궁금한 것이 많고 혼자만의 시간에 깊이 생각하는 것을 좋아해요.',
    traits: ['논리적으로 생각해요', '호기심이 많아요', '독립적이에요', '창의적인 해결책을 찾아요']
  },
  INTJ: {
    description: '독립적이고 결단력 있는 건축가! 장기적인 계획을 세우고 체계적으로 목표를 달성해요.',
    traits: ['계획적이고 체계적이에요', '독립적이에요', '미래 지향적이어요', '깊이 있게 생각해요']
  },
  ISFP: {
    description: '온화하고 유연한 모험가! 조용하지만 친근하고 자신만의 가치관을 소중히 여겨요.',
    traits: [
      '예술적 감각이 있어요',
      '조용하고 부드러워요',
      '유연하고 적응력이 좋아요',
      '개인의 가치를 중요하게 생각해요'
    ]
  },
  ISFJ: {
    description: '따뜻하고 헌신적인 수호자! 다른 사람을 돌보고 안정적인 환경을 만들어줘요.',
    traits: ['다른 사람을 잘 돌봐줘요', '책임감이 강해요', '조용하고 겸손해요', '전통을 소중히 여겨요']
  },
  ISTP: {
    description: '실용적이고 현실적인 장인! 손으로 만들고 수리하는 것을 좋아하고 문제 해결을 잘해요.',
    traits: ['손재주가 좋아요', '논리적이에요', '독립적이에요', '실용적인 해결책을 찾아요']
  },
  ISTJ: {
    description: '신뢰할 수 있고 체계적인 논리주의자! 계획을 잘 세우고 책임감 있게 일을 처리해요.',
    traits: ['책임감이 강해요', '체계적이고 계획적이에요', '전통을 중요하게 생각해요', '신뢰할 수 있어요']
  }
};

export function calculateMBTIResult(answers: Answer[]): MBTIResult {
  const scores = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 }
  };

  // 답변 점수 계산
  answers.forEach(answer => {
    const type = answer.selectedType;
    if (type === 'E' || type === 'I') {
      scores.EI[type]++;
    } else if (type === 'S' || type === 'N') {
      scores.SN[type]++;
    } else if (type === 'T' || type === 'F') {
      scores.TF[type]++;
    } else if (type === 'J' || type === 'P') {
      scores.JP[type]++;
    }
  });

  // MBTI 타입 결정
  const result = {
    EI:
      scores.EI.E > scores.EI.I
        ? { primary: 'E' as MBTIType, score: scores.EI.E }
        : { primary: 'I' as MBTIType, score: scores.EI.I },
    SN:
      scores.SN.S > scores.SN.N
        ? { primary: 'S' as MBTIType, score: scores.SN.S }
        : { primary: 'N' as MBTIType, score: scores.SN.N },
    TF:
      scores.TF.T > scores.TF.F
        ? { primary: 'T' as MBTIType, score: scores.TF.T }
        : { primary: 'F' as MBTIType, score: scores.TF.F },
    JP:
      scores.JP.J > scores.JP.P
        ? { primary: 'J' as MBTIType, score: scores.JP.J }
        : { primary: 'P' as MBTIType, score: scores.JP.P }
  };

  const mbtiType = `${result.EI.primary}${result.SN.primary}${result.TF.primary}${result.JP.primary}`;
  const description = mbtiDescriptions[mbtiType];

  return {
    type: mbtiType,
    scores: result,
    description: description.description,
    traits: description.traits
  };
}
