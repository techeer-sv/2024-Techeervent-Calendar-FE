const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'], // Pretendard 폰트 추가
        jua: ['Jua', 'sans-serif'], // Jua 폰트 추가
      },
      screens: {
        default: '576px',
      },
      colors: {
        // 배경색
        mainBackground: '#192944', // 배경 메인
        questionBackground: '#FFFFE2', // 질문 리스트 배경
        detailedQuestionBackground: '#FFE9EE', // 질문 리스트 상세 질문 배경
        answerBackground: '#EAFBE9', // 질문 리스트 상세 답변 배경
        tagBackground: '#C2CAFF', // 기수 태그 배경

        // 텍스트 색상
        mainText: '#9DFF64', // 메인 사용자 이름
        modalButtonBackground: '#FA5F7F', // 창문 열렸을 시 배경
        yellowText: '#FACB39', // 노랑 텍스트
        redText: '#F8583F', // 당첨 모달 텍스트
        questionText: '#FFE9EE', // 질문 리스트 상세 질문 텍스트
        answerText: '#1E8926', // 질문 리스트 상세 답변 텍스트
        buttonText: '#FADEC9', // 버튼 텍스트
        grayText: '#505050', // 기수 태그 텍스트
        confirmText: '#3F5746', // 초록 텍스트
        placeholderText: '#A1A1A1', // 플레이스 홀더 글씨색

        // 기타 색상
        confirmBackground: '#F3F3F3', // 답변 확인 텍스트 배경
        modalWhite: '#FFFFFF', // 모달 창 배경색 추가
        whiteDefault: '#FFFFFF',
        blackDefault: '#000000',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      width: {
        modal: '280px', // 모달 너비 추가
      },
      height: {
        modal: '350px', // 모달 높이 추가
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'), // 플러그인 추가
  ],
};
