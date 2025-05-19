'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WifiForm, WifiFormData } from "@/components/wifi-form/WifiForm";
import { WifiCard } from "@/components/wifi-card/WifiCard";
import { downloadAsPng } from "@/lib/image";
import { useState, useRef } from "react";

export default function Page() {
  const [cardData, setCardData] = useState<WifiFormData>({
    brandName: '',
    ssid: '',
    password: '',
    backgroundColor: '#ffffff'
  });
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = (data: WifiFormData) => {
    setCardData(data);
    setShowCard(true);
  };

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        await downloadAsPng(cardRef.current, `wifi-card-${cardData.brandName}`);
      } catch (error) {
        console.error('이미지 다운로드 실패:', error);
        alert('이미지 다운로드 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/">
              <Button variant="outline" size="sm">홈</Button>
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/wifi">
              <Button variant="outline" size="sm">Wi-Fi</Button>
            </Link>
            <span className="text-gray-400">/</span>
            <span>생성기</span>
          </div>
          <h1 className="text-3xl font-bold">Wi-Fi QR 코드 카드 생성기</h1>
          <p className="text-gray-600 mt-2">매장 Wi-Fi 접속을 위한 QR 코드 카드를 생성하세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">카드 정보 입력</h2>
              <WifiForm onSubmit={handleFormSubmit} defaultValues={cardData} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">미리보기</h2>
              <div className="flex justify-center mb-4">
                {showCard ? (
                  <WifiCard
                    ref={cardRef}
                    brandName={cardData.brandName}
                    ssid={cardData.ssid}
                    password={cardData.password}
                    backgroundColor={cardData.backgroundColor}
                  />
                ) : (
                  <div className="aspect-[3/4] w-[256px] bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">카드 정보를 입력하세요</p>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <Button 
                  className="w-full" 
                  disabled={!showCard}
                  onClick={handleDownload}
                >
                  이미지 다운로드
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 