import QRCode from 'qrcode';

/**
 * WiFi 접속 정보를 담은 QR 코드 문자열 생성
 * @param ssid WiFi 네트워크 이름
 * @param password WiFi 비밀번호
 * @param encryption 암호화 방식 (기본값: WPA)
 * @returns WiFi 접속 문자열
 */
export function generateWifiQRString(ssid: string, password: string, encryption: 'WPA' | 'WEP' | 'nopass' = 'WPA'): string {
  return `WIFI:S:${ssid};T:${encryption};P:${password};;`;
}

/**
 * WiFi QR 코드 데이터 URL 생성
 * @param ssid WiFi 네트워크 이름
 * @param password WiFi 비밀번호
 * @param options QR 코드 옵션
 * @returns Promise<string> QR 코드 데이터 URL
 */
export async function generateWifiQRCode(
  ssid: string, 
  password: string, 
  options: {
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
    encryption?: 'WPA' | 'WEP' | 'nopass';
  } = {}
): Promise<string> {
  const defaultOptions = {
    width: 200,
    margin: 1,
    color: {
      dark: '#000000',
      light: '#ffffff'
    },
    encryption: 'WPA' as const
  };

  const mergedOptions = { ...defaultOptions, ...options };
  const qrString = generateWifiQRString(ssid, password, mergedOptions.encryption);

  return QRCode.toDataURL(qrString, {
    width: mergedOptions.width,
    margin: mergedOptions.margin,
    color: mergedOptions.color
  });
}

/**
 * QR 코드 테스트 및 유효성 검증
 * @param qrString QR 코드에 포함될 문자열
 * @returns Promise<boolean> QR 코드 생성 성공 여부
 */
export async function testQRCode(qrString: string): Promise<boolean> {
  try {
    await QRCode.toDataURL(qrString);
    return true;
  } catch (error) {
    console.error('QR 코드 생성 실패:', error);
    return false;
  }
} 