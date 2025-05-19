import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Wi-Fi QR 코드 생성기</h1>
        <p className="text-lg text-gray-600">매장 Wi-Fi 접속을 위한 QR 코드 카드를 쉽게 만들어보세요</p>
        <Link href="/wifi/generator">
          <Button size="lg">시작하기</Button>
        </Link>
      </div>
    </main>
  );
}
