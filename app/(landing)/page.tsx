"use client";// app/(landing)/LandingPage.tsx
import React from 'react';
import { LandingNavbar } from '@/components/landing-navbar';
import { LandingHero } from '@/components/landing-hero';
import { LandingContent } from '@/components/landing-content';
import { useRouter } from 'next/navigation';
import RefundCancellationPolicy from '@/pages/refund-cancellation';

const LandingPage: React.FC = () => {
  const router = useRouter();

  const handlePrivacyPolicyClick = () => {
    router.push('/privacy-policy');
  };

  const handleTermsAndConditionsClick = () => {
    router.push('/terms-and-conditions');
  };

  const refundcancellationpolicyClick = () => {
    router.push('/refund-cancellation');
  };

  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />

      {/* Footer Section */}
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-sm text-gray-600">
          By using this site, you agree to our{' '}
          <span
            onClick={handlePrivacyPolicyClick}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Privacy Policy
          </span>{' '}
          and{' '}
          <span
            onClick={handleTermsAndConditionsClick}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Terms and Conditions
          </span>{' '}
          and{' '}
          <span
            onClick={refundcancellationpolicyClick}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Refund and cancellation 
          </span>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;

