'use client';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="text-15px font-medium text-clr-black-900/50 transition-colors duration-200 hover:text-clr-orange-900"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export default BackButton;
