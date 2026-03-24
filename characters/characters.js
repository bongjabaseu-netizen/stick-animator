// 졸라맨 스타일 캐릭터 10종 정의
// 각 캐릭터는 SVG 파츠로 분리되어 JavaScript 애니메이션 가능

export const CHARACTERS = {
  // ── 1. 기본 졸라맨 (원본 참조) ──────────────────
  basic: {
    name: '기본이',
    desc: '기본 졸라맨',
    head: {
      shape: 'circle', r: 50, fill: '#f0f0e8', stroke: '#222', strokeWidth: 4,
      hair: { type: 'cap', fill: '#666', desc: '반원 모자형 머리' },
    },
    face: {
      eyes: { type: 'oval', w: 6, h: 12, fill: '#222', spacing: 24 },
      mouth: { type: 'line', w: 30, fill: '#222' },
      nose: { type: 'dots', count: 4, fill: '#888' },
    },
    body: { type: 'rect', w: 8, h: 60, fill: '#222' },
    arms: { type: 'line', length: 40, strokeWidth: 6, stroke: '#222' },
    legs: { type: 'line', length: 50, strokeWidth: 6, stroke: '#222', spread: 20 },
    feet: { type: 'line', w: 15, stroke: '#222', strokeWidth: 4 },
    color: '#222',
  },

  // ── 2. 여자 캐릭터 ──────────────────
  girl: {
    name: '소녀',
    desc: '긴 머리 여자 캐릭터',
    head: {
      shape: 'circle', r: 50, fill: '#fff5ee', stroke: '#222', strokeWidth: 4,
      hair: { type: 'long', fill: '#4a3728', desc: '긴 갈색 머리' },
    },
    face: {
      eyes: { type: 'round', r: 7, fill: '#222', spacing: 22, eyelash: true },
      mouth: { type: 'smile', w: 20, fill: '#e88' },
      nose: { type: 'none' },
      blush: { r: 8, fill: '#ffb6c1', opacity: 0.5 },
    },
    body: { type: 'trapezoid', w1: 10, w2: 30, h: 55, fill: '#ff6b8a' },
    arms: { type: 'line', length: 35, strokeWidth: 5, stroke: '#222' },
    legs: { type: 'line', length: 45, strokeWidth: 5, stroke: '#222', spread: 16 },
    feet: { type: 'line', w: 12, stroke: '#222', strokeWidth: 4 },
    accessory: { type: 'ribbon', fill: '#ff4757', pos: 'head-right' },
    color: '#ff6b8a',
  },

  // ── 3. 안경 캐릭터 ──────────────────
  nerd: {
    name: '안경이',
    desc: '안경 쓴 똑똑이',
    head: {
      shape: 'circle', r: 50, fill: '#f5f0dc', stroke: '#222', strokeWidth: 4,
      hair: { type: 'spiky', fill: '#333', desc: '삐죽 머리' },
    },
    face: {
      eyes: { type: 'glasses', r: 12, fill: '#222', spacing: 26, frameColor: '#555' },
      mouth: { type: 'line', w: 20, fill: '#222' },
      nose: { type: 'none' },
    },
    body: { type: 'rect', w: 10, h: 55, fill: '#222' },
    arms: { type: 'line', length: 38, strokeWidth: 5, stroke: '#222' },
    legs: { type: 'line', length: 48, strokeWidth: 5, stroke: '#222', spread: 18 },
    feet: { type: 'line', w: 14, stroke: '#222', strokeWidth: 4 },
    accessory: { type: 'book', fill: '#3498db', pos: 'hand-left' },
    color: '#3498db',
  },

  // ── 4. 모자 캐릭터 ──────────────────
  hat: {
    name: '모자',
    desc: '모자 쓴 캐릭터',
    head: {
      shape: 'circle', r: 50, fill: '#ffeaa7', stroke: '#222', strokeWidth: 4,
      hair: { type: 'none' },
    },
    face: {
      eyes: { type: 'dot', r: 5, fill: '#222', spacing: 22 },
      mouth: { type: 'grin', w: 28, fill: '#222' },
      nose: { type: 'none' },
    },
    body: { type: 'rect', w: 10, h: 58, fill: '#222' },
    arms: { type: 'line', length: 42, strokeWidth: 6, stroke: '#222' },
    legs: { type: 'line', length: 50, strokeWidth: 6, stroke: '#222', spread: 20 },
    feet: { type: 'line', w: 15, stroke: '#222', strokeWidth: 4 },
    accessory: { type: 'tophat', fill: '#2d3436', pos: 'head-top' },
    color: '#fdcb6e',
  },

  // ── 5. 근육 캐릭터 ──────────────────
  muscle: {
    name: '근육이',
    desc: '강한 근육 캐릭터',
    head: {
      shape: 'circle', r: 45, fill: '#ffdab9', stroke: '#222', strokeWidth: 5,
      hair: { type: 'crew', fill: '#8B4513', desc: '짧은 스포츠 머리' },
    },
    face: {
      eyes: { type: 'angry', w: 8, h: 6, fill: '#222', spacing: 20 },
      mouth: { type: 'teeth', w: 24, fill: '#222' },
      nose: { type: 'none' },
    },
    body: { type: 'rect', w: 18, h: 55, fill: '#222' },
    arms: { type: 'thick', length: 40, strokeWidth: 10, stroke: '#222' },
    legs: { type: 'thick', length: 48, strokeWidth: 8, stroke: '#222', spread: 22 },
    feet: { type: 'line', w: 16, stroke: '#222', strokeWidth: 5 },
    color: '#e17055',
  },

  // ── 6. 꼬마 캐릭터 ──────────────────
  kid: {
    name: '꼬마',
    desc: '작고 귀여운 어린이',
    head: {
      shape: 'circle', r: 55, fill: '#fff5ee', stroke: '#222', strokeWidth: 4,
      hair: { type: 'bowl', fill: '#222', desc: '바가지 머리' },
    },
    face: {
      eyes: { type: 'big-round', r: 10, fill: '#222', spacing: 24, sparkle: true },
      mouth: { type: 'o', r: 6, fill: '#222' },
      nose: { type: 'none' },
      blush: { r: 10, fill: '#ffb6c1', opacity: 0.4 },
    },
    body: { type: 'rect', w: 8, h: 35, fill: '#222' },
    arms: { type: 'line', length: 25, strokeWidth: 5, stroke: '#222' },
    legs: { type: 'line', length: 30, strokeWidth: 5, stroke: '#222', spread: 14 },
    feet: { type: 'line', w: 10, stroke: '#222', strokeWidth: 3 },
    color: '#55efc4',
  },

  // ── 7. 할아버지 캐릭터 ──────────────────
  grandpa: {
    name: '할배',
    desc: '지팡이 짚은 할아버지',
    head: {
      shape: 'circle', r: 48, fill: '#f5e6ca', stroke: '#222', strokeWidth: 4,
      hair: { type: 'bald-side', fill: '#ccc', desc: '옆머리만 흰색' },
    },
    face: {
      eyes: { type: 'squint', w: 12, h: 3, fill: '#222', spacing: 20 },
      mouth: { type: 'frown', w: 18, fill: '#222' },
      nose: { type: 'none' },
      wrinkles: true,
    },
    body: { type: 'rect', w: 8, h: 55, fill: '#222' },
    arms: { type: 'line', length: 38, strokeWidth: 5, stroke: '#222' },
    legs: { type: 'bent', length: 45, strokeWidth: 5, stroke: '#222', spread: 16 },
    feet: { type: 'line', w: 14, stroke: '#222', strokeWidth: 4 },
    accessory: { type: 'cane', fill: '#8B4513', pos: 'hand-right' },
    color: '#b2bec3',
  },

  // ── 8. 요리사 캐릭터 ──────────────────
  chef: {
    name: '요리사',
    desc: '요리 모자 쓴 셰프',
    head: {
      shape: 'circle', r: 48, fill: '#fff0e0', stroke: '#222', strokeWidth: 4,
      hair: { type: 'none' },
    },
    face: {
      eyes: { type: 'happy', w: 10, fill: '#222', spacing: 22 },
      mouth: { type: 'smile-wide', w: 26, fill: '#e88' },
      nose: { type: 'round', r: 4, fill: '#ddd' },
      mustache: { w: 30, fill: '#555' },
    },
    body: { type: 'rect', w: 14, h: 55, fill: '#222' },
    arms: { type: 'line', length: 40, strokeWidth: 6, stroke: '#222' },
    legs: { type: 'line', length: 48, strokeWidth: 6, stroke: '#222', spread: 18 },
    feet: { type: 'line', w: 15, stroke: '#222', strokeWidth: 4 },
    accessory: { type: 'chef-hat', fill: '#fff', pos: 'head-top' },
    color: '#fff',
  },

  // ── 9. 닌자 캐릭터 ──────────────────
  ninja: {
    name: '닌자',
    desc: '마스크 쓴 닌자',
    head: {
      shape: 'circle', r: 48, fill: '#2d3436', stroke: '#222', strokeWidth: 4,
      hair: { type: 'none' },
    },
    face: {
      eyes: { type: 'slit', w: 16, h: 5, fill: '#fff', spacing: 20 },
      mouth: { type: 'hidden' },
      nose: { type: 'none' },
      mask: { fill: '#2d3436', band: '#e74c3c' },
    },
    body: { type: 'rect', w: 10, h: 55, fill: '#2d3436' },
    arms: { type: 'line', length: 40, strokeWidth: 6, stroke: '#2d3436' },
    legs: { type: 'line', length: 48, strokeWidth: 6, stroke: '#2d3436', spread: 20 },
    feet: { type: 'line', w: 14, stroke: '#2d3436', strokeWidth: 4 },
    accessory: { type: 'sword', fill: '#bbb', pos: 'back' },
    color: '#e74c3c',
  },

  // ── 10. 로봇 캐릭터 ──────────────────
  robot: {
    name: '로봇',
    desc: '귀여운 로봇',
    head: {
      shape: 'roundRect', w: 90, h: 80, r: 15, fill: '#b8c6d4', stroke: '#666', strokeWidth: 4,
      hair: { type: 'antenna', fill: '#e74c3c', desc: '안테나' },
    },
    face: {
      eyes: { type: 'screen', w: 16, h: 16, fill: '#00ff88', spacing: 28, glow: true },
      mouth: { type: 'led', w: 30, fill: '#00ff88', segments: 5 },
      nose: { type: 'none' },
    },
    body: { type: 'box', w: 40, h: 50, fill: '#8e9eab', stroke: '#666' },
    arms: { type: 'segmented', length: 38, strokeWidth: 8, stroke: '#8e9eab' },
    legs: { type: 'segmented', length: 40, strokeWidth: 8, stroke: '#8e9eab', spread: 24 },
    feet: { type: 'block', w: 20, h: 8, fill: '#666' },
    color: '#00ff88',
  },
};

// 표정 프리셋 (모든 캐릭터 공통)
export const EXPRESSIONS = {
  normal: { eyes: 'default', mouth: 'default', brows: 'default' },
  happy: { eyes: 'default', mouth: 'smile', brows: 'up' },
  sad: { eyes: 'down', mouth: 'frown', brows: 'down' },
  angry: { eyes: 'angry', mouth: 'teeth', brows: 'angry' },
  surprised: { eyes: 'wide', mouth: 'o', brows: 'up-high' },
  talking1: { eyes: 'default', mouth: 'open-small', brows: 'default' },
  talking2: { eyes: 'default', mouth: 'open-wide', brows: 'default' },
  talking3: { eyes: 'default', mouth: 'o', brows: 'default' },
  wink: { eyes: 'wink', mouth: 'smile', brows: 'default' },
  sleep: { eyes: 'closed', mouth: 'zzz', brows: 'default' },
};

// 애니메이션 프리셋
export const ANIMATIONS = {
  idle: { desc: '가만히 서기 (미세한 움직임)', loop: true, duration: 2000 },
  walk: { desc: '걷기', loop: true, duration: 800 },
  run: { desc: '달리기', loop: true, duration: 400 },
  wave: { desc: '손 흔들기', loop: false, duration: 1000 },
  jump: { desc: '점프', loop: false, duration: 600 },
  nod: { desc: '고개 끄덕이기', loop: false, duration: 500 },
  shake: { desc: '고개 흔들기', loop: false, duration: 500 },
  talk: { desc: '말하기 (입 애니메이션)', loop: true, duration: 300 },
  dance: { desc: '춤추기', loop: true, duration: 1200 },
  sit: { desc: '앉기', loop: false, duration: 500 },
};
