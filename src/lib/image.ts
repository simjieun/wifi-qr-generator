import { toPng, toJpeg } from 'html-to-image';

/**
 * HTML 요소를 PNG 이미지로 변환하여 다운로드
 * @param element 이미지로 변환할 HTML 요소
 * @param fileName 다운로드될 파일 이름 (확장자 제외)
 */
export async function downloadAsPng(element: HTMLElement, fileName: string = 'wifi-card'): Promise<void> {
  try {
    const dataUrl = await toPng(element, { quality: 0.95 });
    const link = document.createElement('a');
    link.download = `${fileName}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('PNG 이미지 다운로드 실패:', error);
    throw new Error('이미지 다운로드 중 오류가 발생했습니다.');
  }
}

/**
 * HTML 요소를 JPEG 이미지로 변환하여 다운로드
 * @param element 이미지로 변환할 HTML 요소
 * @param fileName 다운로드될 파일 이름 (확장자 제외)
 * @param quality 이미지 품질 (0~1)
 */
export async function downloadAsJpeg(
  element: HTMLElement, 
  fileName: string = 'wifi-card', 
  quality: number = 0.95
): Promise<void> {
  try {
    const dataUrl = await toJpeg(element, { quality });
    const link = document.createElement('a');
    link.download = `${fileName}.jpg`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('JPEG 이미지 다운로드 실패:', error);
    throw new Error('이미지 다운로드 중 오류가 발생했습니다.');
  }
} 