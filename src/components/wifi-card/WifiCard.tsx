import React, { useEffect, useState } from 'react';
import { generateWifiQRCode } from '@/lib/qrcode';
import Image from 'next/image';

interface WifiCardProps {
  brandName: string;
  ssid: string;
  password: string;
  backgroundColor: string;
}

export const WifiCard = React.forwardRef<HTMLDivElement, WifiCardProps>(
  ({ brandName, ssid, password, backgroundColor }, ref) => {
    const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
    
    useEffect(() => {
      const generateQRCode = async () => {
        try {
          if (ssid && password) {
            const qrCode = await generateWifiQRCode(ssid, password, {
              width: 160,
              margin: 0,
              color: {
                dark: '#000000', 
                light: '#ffffff'
              }
            });
            setQrCodeUrl(qrCode);
          }
        } catch (error) {
          console.error('QR 코드 생성 실패:', error);
        }
      };
      
      generateQRCode();
    }, [ssid, password]);

    return (
      <div 
        ref={ref}
        className="relative rounded-lg overflow-hidden shadow-md"
        style={{ 
          width: '256px', 
          height: '341px', /* 3:4 비율 (256 * 4/3) */
          backgroundColor: backgroundColor || '#ffffff',
        }}
      >
        {/* 상단: "WIFI 접속" 텍스트 */}
        <div className="pt-6 px-6 text-center">
          <h2 className="text-xl font-bold">WIFI 접속</h2>
        </div>
        
        {/* 중앙: QR 코드 */}
        <div className="flex justify-center items-center py-4">
          {qrCodeUrl ? (
            <div className="bg-white p-2 rounded-lg">
              <Image
                src={qrCodeUrl}
                alt="WiFi QR Code"
                width={160}
                height={160}
                className="block"
              />
            </div>
          ) : (
            <div className="w-[160px] h-[160px] bg-gray-200 animate-pulse rounded-lg"></div>
          )}
        </div>
        
        {/* 하단: 브랜드 이름 */}
        <div className="px-6 pb-4 text-center">
          <h3 className="text-lg font-semibold">{brandName || '브랜드 이름'}</h3>
        </div>
        
        {/* 하단 오른쪽 구석: "by joy" 레이블 */}
        <div className="absolute bottom-2 right-3">
          <span className="text-xs text-gray-600">by joy</span>
        </div>
      </div>
    );
  }
);

WifiCard.displayName = 'WifiCard'; 