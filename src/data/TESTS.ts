import type { Test } from '../types';

export const TESTS: Test[] = [
  {
    info: {
      mainTitle: '퍼스널 컬러 테스트',
      subTitle: '나에게 어울리는 컬러는 무엇일까?',
      mainUrl: 'personalColor',
      scoreType: 'personalColor',
      mainImage:
        'https://www.dropbox.com/scl/fi/u4moi8xe7wme1ao796ujw/personalColor-intro.png?rlkey=qn2igicxafksekjx9fsnukk9z&st=ifpx4r50&dl=1',
      thumbImage:
        'https://www.dropbox.com/scl/fi/9iqe0gypnnclo5elt3hpi/personalColor-thumb.png?rlkey=m9uwdd6xww0v66g2gjo2688jz&st=ut5c22fv&dl=1',
      lang: 'Kor',
      category: 'characteristic',
      description: '봄, 여름, 가을, 겨울\n어떤 계절이 너에게 가장 잘 어울릴까?\n\n색깔은 단순한 취향이 아니야.\n네가 가장 빛나는 컬러를 찾아봐! 🎨\n\n* 결과는 4가지 시즌 타입으로 나뉘어요.',
      tags: ['퍼스널컬러', '뷰티', '패션'],
      author: '심(리)봤다',
      viewCount: 1283,
      duration: '약 3분',
    },
    questions: [
      // 페어 1: 봄 vs 겨울 (밝음·웜 vs 강렬·쿨)
      {
        which: 'spring-winter',
        question: '내가 끌리는 전체적인 분위기는?',
        answers: [
          { type: 'spring', content: '밝고 화사하고 귀여운 분위기' },
          { type: 'winter', content: '세련되고 시크하며 강렬한 분위기' },
        ],
      },
      {
        which: 'spring-winter',
        question: '내가 자주 고르는 패션 스타일은?',
        answers: [
          { type: 'spring', content: '플로럴, 파스텔, 러블리 스타일' },
          { type: 'winter', content: '모노톤, 미니멀, 하이패션 스타일' },
        ],
      },
      {
        which: 'spring-winter',
        question: '내가 선호하는 향수 계열은?',
        answers: [
          { type: 'spring', content: '플로럴·프루티, 달콤하고 가벼운 향' },
          { type: 'winter', content: '머스크·우드, 깊고 강렬한 향' },
        ],
      },
      // 페어 2: 여름 vs 가을 (쿨·뮤트 vs 웜·뮤트)
      {
        which: 'summer-autumn',
        question: '내가 선호하는 카페 인테리어는?',
        answers: [
          { type: 'summer', content: '우아하고 로맨틱한 파스텔·핑크 톤' },
          { type: 'autumn', content: '아늑하고 빈티지한 우드·브라운 톤' },
        ],
      },
      {
        which: 'summer-autumn',
        question: '내가 자신있게 입는 컬러 아이템은?',
        answers: [
          { type: 'summer', content: '라벤더, 모브, 파우더 핑크 계열' },
          { type: 'autumn', content: '카멜, 테라코타, 올리브 그린 계열' },
        ],
      },
      {
        which: 'summer-autumn',
        question: '내가 선호하는 헤어 컬러는?',
        answers: [
          { type: 'summer', content: '애쉬 그레이, 쿨 브라운, 라이트 핑크' },
          { type: 'autumn', content: '코퍼, 허니 브라운, 웜 브라운' },
        ],
      },
      // 페어 3: 봄 vs 가을 (웜·밝음 vs 웜·깊음)
      {
        which: 'spring-autumn',
        question: '피부에 잘 어울린다고 느끼는 베이스 톤은?',
        answers: [
          { type: 'spring', content: '밝고 투명한 피치·살구 베이스' },
          { type: 'autumn', content: '골든하고 깊은 황금빛·카키 베이스' },
        ],
      },
      {
        which: 'spring-autumn',
        question: '내가 선호하는 주얼리 스타일은?',
        answers: [
          { type: 'spring', content: '로즈골드 & 파스텔 스톤, 작고 귀여운 것' },
          { type: 'autumn', content: '앤틱 골드 & 어스톤 스톤, 빈티지한 것' },
        ],
      },
      {
        which: 'spring-autumn',
        question: '자연광 아래에서 내 피부는?',
        answers: [
          { type: 'spring', content: '복숭아빛·핑크빛으로 밝게 빛난다' },
          { type: 'autumn', content: '황금빛·구릿빛으로 따뜻하게 빛난다' },
        ],
      },
      // 페어 4: 여름 vs 겨울 (쿨·소프트 vs 쿨·강렬)
      {
        which: 'summer-winter',
        question: '내 자연 립 컬러에 가장 가까운 것은?',
        answers: [
          { type: 'summer', content: '부드럽고 차분한 핑크·로즈 계열' },
          { type: 'winter', content: '선명하고 짙은 버건디·레드 계열' },
        ],
      },
      {
        which: 'summer-winter',
        question: '내가 선호하는 아이 메이크업 계열은?',
        answers: [
          { type: 'summer', content: '핑크, 라일락, 소프트 퍼플 계열' },
          { type: 'winter', content: '차콜, 딥 퍼플, 스모키 블랙 계열' },
        ],
      },
      {
        which: 'summer-winter',
        question: '내 눈동자의 인상을 한 단어로 표현하면?',
        answers: [
          { type: 'summer', content: '맑고 부드럽다' },
          { type: 'winter', content: '강렬하고 선명하다' },
        ],
      },
    ],
    results: [
      {
        season: 'spring',
        colorName: '봄 웜톤',
        hex: '#F7A97C',
        description:
          '밝고 생기넘치며 사랑스러운 분위기의 소유자! 따뜻하고 밝은 빛이 당신을 더욱 빛나게 해요. 코랄, 피치, 살구색, 아이보리처럼 따뜻하고 화사한 컬러가 잘 어울려요.',
        keywords: ['밝음', '따뜻함', '화사함', '귀여움'],
        goodColors: [
          { season: 'autumn', colorName: '가을 웜톤', hex: '#C4733B' },
          { season: 'summer', colorName: '여름 쿨톤', hex: '#B8A9C9' },
        ],
        badColors: [
          { season: 'winter', colorName: '겨울 쿨톤', hex: '#5B6A9C' },
        ],
      },
      {
        season: 'summer',
        colorName: '여름 쿨톤',
        hex: '#B8A9C9',
        description:
          '우아하고 차분하며 로맨틱한 분위기의 소유자! 시원하고 부드러운 빛이 당신의 매력을 극대화해요. 라벤더, 더스티 핑크, 뮤트 블루처럼 은은하고 세련된 컬러가 잘 어울려요.',
        keywords: ['우아함', '차분함', '로맨틱', '소프트'],
        goodColors: [
          { season: 'spring', colorName: '봄 웜톤', hex: '#F7A97C' },
          { season: 'winter', colorName: '겨울 쿨톤', hex: '#5B6A9C' },
        ],
        badColors: [
          { season: 'autumn', colorName: '가을 웜톤', hex: '#C4733B' },
        ],
      },
      {
        season: 'autumn',
        colorName: '가을 웜톤',
        hex: '#C4733B',
        description:
          '깊고 풍요로우며 자연스러운 분위기의 소유자! 따뜻하고 깊은 빛이 당신의 개성을 돋보이게 해요. 카멜, 테라코타, 올리브처럼 풍성하고 어스 컬러 계열이 잘 어울려요.',
        keywords: ['깊이감', '따뜻함', '풍요로움', '자연스러움'],
        goodColors: [
          { season: 'spring', colorName: '봄 웜톤', hex: '#F7A97C' },
          { season: 'winter', colorName: '겨울 쿨톤', hex: '#5B6A9C' },
        ],
        badColors: [
          { season: 'summer', colorName: '여름 쿨톤', hex: '#B8A9C9' },
        ],
      },
      {
        season: 'winter',
        colorName: '겨울 쿨톤',
        hex: '#5B6A9C',
        description:
          '선명하고 강렬하며 세련된 분위기의 소유자! 차갑고 고귀한 빛이 당신을 압도적으로 빛나게 해요. 버건디, 로얄 블루, 에메랄드처럼 선명하고 대비가 강한 컬러가 잘 어울려요.',
        keywords: ['강렬함', '선명함', '세련됨', '고귀함'],
        goodColors: [
          { season: 'summer', colorName: '여름 쿨톤', hex: '#B8A9C9' },
          { season: 'autumn', colorName: '가을 웜톤', hex: '#C4733B' },
        ],
        badColors: [
          { season: 'spring', colorName: '봄 웜톤', hex: '#F7A97C' },
        ],
      },
    ],
  },
];
