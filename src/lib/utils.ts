import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 여러 클래스 이름을 결합하여 하나의 문자열로 만듭니다.
 * clsx와 tailwind-merge를 사용하여 중복된 클래스를 처리합니다.
 * 
 * @param inputs 클래스 이름 배열
 * @returns 결합된 클래스 이름 문자열
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
