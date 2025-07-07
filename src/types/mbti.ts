export type MBTIType = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type MBTIAxis = 'EI' | 'SN' | 'TF' | 'JP';

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: MBTIType;
  }[];
  axis: MBTIAxis;
}

export interface Answer {
  questionId: number;
  selectedType: MBTIType;
}

export interface MBTIResult {
  type: string; // e.g., "ENFP"
  scores: Record<MBTIAxis, { primary: MBTIType; score: number }>;
  description: string;
  traits: string[];
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Answer[];
  isCompleted: boolean;
}
