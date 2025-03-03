const BASE_WIDTH = 360; // Figma 기준 디자인 해상도
const isStorybook = process.env.STORYBOOK === 'true';
/**
 * px → vw 변환 함수
 * @param value - px 값 (공백으로 구분된 다중 값 지원)
 * @param baseWidth - 기준 해상도 (기본값: 414)
 */
export const pxToVw = (value: number | string | (number | string)[], baseWidth: number = BASE_WIDTH): string => {
  if (Array.isArray(value)) {
    return value.map((v) => pxToVw(v, baseWidth)).join(' ');
  }
  if (isStorybook) {
    return `${value}px`; // ✅ Storybook에서는 px로 유지
  }
  if (typeof value === 'number') {
    return `calc(${value} * 100 / ${baseWidth} * 1vw)`;
  }

  if (typeof value === 'string') {
    return value
      .split(' ')
      .map((v) => (isNaN(Number(v)) ? v : `calc(${v} * 100 / ${baseWidth} * 1vw)`))
      .join(' ');
  }

  throw new Error('pxToVw: 지원되지 않는 값 형식입니다.');
};
