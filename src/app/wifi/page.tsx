import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Wi-Fi QR 생성기</h1>
        <p className="text-lg text-gray-600">어떤 카드를 생성하시겠습니까?</p>
        <div className="flex gap-4">
          <Link href="/wifi/generator">
            <Button size="lg">새 카드 만들기</Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 