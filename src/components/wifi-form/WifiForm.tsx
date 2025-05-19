import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export interface WifiFormData {
  brandName: string;
  ssid: string;
  password: string;
  backgroundColor: string;
}

interface WifiFormProps {
  onSubmit: SubmitHandler<WifiFormData>;
  defaultValues?: Partial<WifiFormData>;
}

export function WifiForm({ onSubmit, defaultValues }: WifiFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<WifiFormData>({
    defaultValues: {
      brandName: defaultValues?.brandName || '',
      ssid: defaultValues?.ssid || '',
      password: defaultValues?.password || '',
      backgroundColor: defaultValues?.backgroundColor || '#ffffff',
    },
  });

  // 실시간으로 색상 값 감시
  const bgColor = watch('backgroundColor');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="brandName">브랜드 이름</Label>
        <Input
          id="brandName"
          placeholder="카페 이름, 매장 이름 등"
          {...register('brandName', { required: '브랜드 이름을 입력해주세요' })}
        />
        {errors.brandName && (
          <p className="text-sm text-red-500">{errors.brandName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="ssid">네트워크 이름 (SSID)</Label>
        <Input
          id="ssid"
          placeholder="WiFi 네트워크 이름"
          {...register('ssid', { required: 'WiFi 네트워크 이름을 입력해주세요' })}
        />
        {errors.ssid && (
          <p className="text-sm text-red-500">{errors.ssid.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="text"
          placeholder="WiFi 비밀번호"
          {...register('password', { required: 'WiFi 비밀번호를 입력해주세요' })}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="backgroundColor">배경색</Label>
        <div className="flex space-x-2">
          <Input
            id="backgroundColor"
            type="color"
            className="w-12 h-10 p-1 cursor-pointer"
            {...register('backgroundColor')}
          />
          <Input
            type="text"
            value={bgColor}
            className="flex-1"
            readOnly
          />
        </div>
        <div 
          className="h-8 w-full rounded-md mt-1"
          style={{ backgroundColor: bgColor }}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? '생성 중...' : '카드 생성하기'}
      </Button>
    </form>
  );
} 