import type { MBTIType } from '../types/mbti';

export interface CompatibilityInfo {
  type: MBTIType;
  reason: string;
}

export interface MBTICompatibility {
  [key: string]: {
    bestMatches: CompatibilityInfo[];
    description: string;
  };
}

export const mbtiCompatibility: MBTICompatibility = {
  ENFP: {
    bestMatches: [
      { type: 'INTJ' as MBTIType, reason: '창의적인 아이디어와 체계적인 실행력이 만나 완벽한 조화를 이뤄요!' },
      { type: 'INFJ' as MBTIType, reason: '서로의 감정을 깊이 이해하고 함께 성장할 수 있는 친구예요!' }
    ],
    description: '활발하고 창의적인 성격'
  },
  ENTP: {
    bestMatches: [
      { type: 'INFJ' as MBTIType, reason: '새로운 아이디어를 함께 탐구하며 서로를 발전시켜주는 관계예요!' },
      { type: 'INTJ' as MBTIType, reason: '논리적 사고와 창의성이 만나 멋진 시너지를 만들어요!' }
    ],
    description: '호기심 많고 창의적인 성격'
  },
  ENFJ: {
    bestMatches: [
      { type: 'INFP' as MBTIType, reason: '서로의 가치관을 존중하며 따뜻한 우정을 쌓을 수 있어요!' },
      { type: 'ISFP' as MBTIType, reason: '배려심 깊은 성격으로 서로를 잘 챙겨주는 친구가 될 수 있어요!' }
    ],
    description: '따뜻하고 리더십이 있는 성격'
  },
  ENTJ: {
    bestMatches: [
      { type: 'INTP' as MBTIType, reason: '논리적 분석력과 실행력이 만나 목표를 함께 달성할 수 있어요!' },
      { type: 'INFP' as MBTIType, reason: '서로 다른 강점으로 균형 잡힌 팀워크를 만들어요!' }
    ],
    description: '목표지향적이고 리더십이 강한 성격'
  },
  INFP: {
    bestMatches: [
      { type: 'ENFJ' as MBTIType, reason: '서로의 감정을 이해하고 성장을 도와주는 특별한 친구예요!' },
      { type: 'ENTJ' as MBTIType, reason: '창의성과 실행력이 만나 멋진 결과를 만들어낼 수 있어요!' }
    ],
    description: '감성적이고 창의적인 성격'
  },
  INTP: {
    bestMatches: [
      { type: 'ENTJ' as MBTIType, reason: '분석적 사고와 실행력이 만나 완벽한 조화를 이뤄요!' },
      { type: 'ENFJ' as MBTIType, reason: '논리와 감성의 균형으로 서로를 보완해주는 관계예요!' }
    ],
    description: '논리적이고 분석적인 성격'
  },
  INFJ: {
    bestMatches: [
      { type: 'ENTP' as MBTIType, reason: '깊은 이해력과 창의성이 만나 특별한 우정을 만들어요!' },
      { type: 'ENFP' as MBTIType, reason: '서로의 꿈과 이상을 함께 키워갈 수 있는 친구예요!' }
    ],
    description: '직관적이고 이상주의적인 성격'
  },
  INTJ: {
    bestMatches: [
      { type: 'ENFP' as MBTIType, reason: '체계적인 계획과 창의적 아이디어가 만나 시너지를 낼 수 있어요!' },
      { type: 'ENTP' as MBTIType, reason: '논리적 사고와 혁신적 아이디어로 함께 성장할 수 있어요!' }
    ],
    description: '계획적이고 독창적인 성격'
  },
  ESFP: {
    bestMatches: [
      { type: 'ISFJ' as MBTIType, reason: '활발함과 안정감이 만나 서로를 균형있게 만들어주는 친구예요!' },
      { type: 'ISTJ' as MBTIType, reason: '자유로움과 책임감이 조화를 이뤄 좋은 팀워크를 만들어요!' }
    ],
    description: '활발하고 사교적인 성격'
  },
  ESTP: {
    bestMatches: [
      { type: 'ISFJ' as MBTIType, reason: '모험심과 배려심이 만나 흥미진진한 우정을 만들어요!' },
      { type: 'ISTJ' as MBTIType, reason: '즉흥성과 계획성이 만나 완벽한 균형을 이뤄요!' }
    ],
    description: '활동적이고 현실적인 성격'
  },
  ESFJ: {
    bestMatches: [
      { type: 'ISFP' as MBTIType, reason: '서로를 배려하는 마음으로 따뜻한 우정을 쌓을 수 있어요!' },
      { type: 'ISTP' as MBTIType, reason: '사교성과 실용성이 만나 서로를 보완해주는 관계예요!' }
    ],
    description: '사교적이고 배려심 많은 성격'
  },
  ESTJ: {
    bestMatches: [
      { type: 'ISFP' as MBTIType, reason: '리더십과 창의성이 만나 멋진 협력 관계를 만들어요!' },
      { type: 'INTP' as MBTIType, reason: '실행력과 분석력이 조화를 이뤄 목표를 달성할 수 있어요!' }
    ],
    description: '체계적이고 책임감 강한 성격'
  },
  ISFP: {
    bestMatches: [
      { type: 'ENFJ' as MBTIType, reason: '예술적 감성과 리더십이 만나 서로를 성장시켜주는 친구예요!' },
      { type: 'ESFJ' as MBTIType, reason: '창의성과 배려심이 만나 따뜻한 우정을 만들어요!' }
    ],
    description: '온화하고 예술적인 성격'
  },
  ISTP: {
    bestMatches: [
      { type: 'ESFJ' as MBTIType, reason: '실용성과 사교성이 만나 서로를 보완해주는 완벽한 조합이에요!' },
      { type: 'ESTJ' as MBTIType, reason: '기술적 능력과 리더십이 만나 훌륭한 팀워크를 만들어요!' }
    ],
    description: '실용적이고 독립적인 성격'
  },
  ISFJ: {
    bestMatches: [
      { type: 'ESFP' as MBTIType, reason: '안정감과 활발함이 만나 서로를 균형있게 만들어주는 친구예요!' },
      { type: 'ESTP' as MBTIType, reason: '배려심과 모험심이 조화를 이뤄 흥미진진한 우정을 만들어요!' }
    ],
    description: '따뜻하고 신뢰할 수 있는 성격'
  },
  ISTJ: {
    bestMatches: [
      { type: 'ESFP' as MBTIType, reason: '계획성과 자유로움이 만나 서로를 보완해주는 관계예요!' },
      { type: 'ESTP' as MBTIType, reason: '안정성과 즉흥성이 조화를 이뤄 완벽한 균형을 만들어요!' }
    ],
    description: '신중하고 책임감 있는 성격'
  }
};

export const getCompatibilityInfo = (mbtiType: MBTIType) => {
  return (
    mbtiCompatibility[mbtiType] || {
      bestMatches: [],
      description: '특별한 성격'
    }
  );
};
