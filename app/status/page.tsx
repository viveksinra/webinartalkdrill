import Container from "@/components/Container";
import GlitterEffect from "@/components/GlitterEffect";
import AddToCalendar from "@/components/AddToCalendar";
import Link from "next/link";
import { Suspense } from "react";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

// Type definitions for better type safety
interface PaymentDetails {
  paymentId?: string;
  orderId?: string;
}

interface ErrorDetails {
  code?: string;
  description?: string;
  reason?: string;
  step?: string;
  source?: string;
  paymentId?: string;
  orderId?: string;
}

interface PaymentStatus {
  isSuccess: boolean;
  isFailure: boolean;
  isUnknown: boolean;
}

// Utility function to safely extract search param values
function getSearchParam(searchParams: SearchParams, key: string): string | undefined {
  const value = searchParams[key];
  return Array.isArray(value) ? value[0] : (value as string | undefined);
}

// Extract payment details from search params
function extractPaymentDetails(searchParams: SearchParams): PaymentDetails {
  return {
    paymentId: getSearchParam(searchParams, "razorpay_payment_id"),
    orderId: getSearchParam(searchParams, "razorpay_order_id"),
  };
}

// Extract error details from search params (handles both bracket and underscore notation)
function extractErrorDetails(searchParams: SearchParams): ErrorDetails {
  return {
    code: getSearchParam(searchParams, "error[code]") || getSearchParam(searchParams, "error_code"),
    description: getSearchParam(searchParams, "error[description]") || getSearchParam(searchParams, "error_description"),
    reason: getSearchParam(searchParams, "error[reason]") || getSearchParam(searchParams, "error_reason"),
    step: getSearchParam(searchParams, "error[step]") || getSearchParam(searchParams, "error_step"),
    source: getSearchParam(searchParams, "error[source]") || getSearchParam(searchParams, "error_source"),
    paymentId: getSearchParam(searchParams, "error[metadata][payment_id]") || getSearchParam(searchParams, "error_payment_id"),
    orderId: getSearchParam(searchParams, "error[metadata][order_id]") || getSearchParam(searchParams, "error_order_id"),
  };
}

// Determine payment status from search params
function getPaymentStatus(searchParams: SearchParams): PaymentStatus {
  const rawStatus = getSearchParam(searchParams, "paymentStatus");
  const normalizedStatus = rawStatus?.toLowerCase();

  // Accept common misspelling "sucess" as well as "success"
  const isSuccess = normalizedStatus === "success" || normalizedStatus === "sucess";
  const isFailure = normalizedStatus === "failure" || 
                   normalizedStatus === "failed" || 
                   normalizedStatus === "error";

  return {
    isSuccess,
    isFailure,
    isUnknown: !isSuccess && !isFailure,
  };
}

// Status icon component
function StatusIcon({ status }: { status: PaymentStatus }) {
  const baseClasses = "h-20 w-20 drop-shadow-lg";
  
  if (status.isSuccess) {
    return (
      <div className="relative">
        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-30 blur-xl"></div>
        <div className="relative rounded-full bg-gradient-to-br from-green-100 to-emerald-100 p-4 shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${baseClasses} text-green-600 animate-bounce-slow`}
            aria-label="Success"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.11 7.472a.75.75 0 0 0-1.22-.944l-3.236 4.186-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.133-.089l3.739-4.857Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (status.isFailure) {
    return (
      <div className="relative">
        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-red-400 to-rose-400 opacity-30 blur-xl"></div>
        <div className="relative rounded-full bg-gradient-to-br from-red-100 to-rose-100 p-4 shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${baseClasses} text-red-600 animate-shake`}
            aria-label="Failed"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm2.47 6.53a.75.75 0 0 0-1.06 0L12 10.19 10.59 8.78a.75.75 0 1 0-1.06 1.06L10.94 11.25 9.53 12.66a.75.75 0 0 0 1.06 1.06L12 12.31l1.41 1.41a.75.75 0 1 0 1.06-1.06L13.06 11.25l1.41-1.41a.75.75 0 0 0 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 opacity-30 blur-xl"></div>
      <div className="relative rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 p-4 shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${baseClasses} text-amber-600`}
          aria-label="Unknown status"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

// Payment details component
function PaymentDetailsCard({ paymentDetails, errorDetails }: { 
  paymentDetails: PaymentDetails; 
  errorDetails: ErrorDetails; 
}) {
  const orderId = paymentDetails.orderId || errorDetails.orderId;
  const paymentId = paymentDetails.paymentId || errorDetails.paymentId;

  if (!orderId && !paymentId) return null;

  return (
    <div className="mb-8 text-left animate-fade-in-up">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 shadow-lg">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="relative">
          <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-800">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Payment Details
          </h2>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {orderId && (
              <div className="group relative overflow-hidden rounded-xl bg-white/80 px-5 py-4 shadow-md transition-all hover:shadow-lg hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <dt className="relative mb-1 text-sm font-semibold text-gray-700">Order ID</dt>
                <dd className="relative truncate font-mono text-sm text-gray-900" title={orderId}>
                  {orderId}
                </dd>
              </div>
            )}
            {paymentId && (
              <div className="group relative overflow-hidden rounded-xl bg-white/80 px-5 py-4 shadow-md transition-all hover:shadow-lg hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <dt className="relative mb-1 text-sm font-semibold text-gray-700">Payment ID</dt>
                <dd className="relative truncate font-mono text-sm text-gray-900" title={paymentId}>
                  {paymentId}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}

// Error details component
function ErrorDetailsCard({ errorDetails }: { errorDetails: ErrorDetails }) {
  const hasErrorDetails = Object.values(errorDetails).some(Boolean);
  if (!hasErrorDetails) return null;

  return (
    <div className="mb-8 text-left animate-fade-in-up delay-200">
      <details className="group relative overflow-hidden rounded-2xl border-2 border-red-200/50 bg-gradient-to-br from-red-50 to-rose-50 shadow-lg transition-all hover:shadow-xl">
        <summary className="cursor-pointer flex items-center justify-between p-6 text-base font-bold text-red-800 transition-colors hover:bg-red-100/50">
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Error Details
          </span>
          <span className="text-sm font-normal text-red-600 transition-transform group-open:rotate-180">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </summary>
        <div className="border-t border-red-200/50 bg-white/30 p-6 backdrop-blur-sm">
          <div className="space-y-3">
            {errorDetails.code && (
              <div className="flex items-start gap-3 rounded-lg bg-white/70 px-4 py-3 shadow-sm">
                <span className="text-sm font-semibold text-red-700 min-w-[80px]">Code:</span>
                <span className="text-sm text-red-800 font-mono">{errorDetails.code}</span>
              </div>
            )}
            {errorDetails.description && (
              <div className="flex items-start gap-3 rounded-lg bg-white/70 px-4 py-3 shadow-sm">
                <span className="text-sm font-semibold text-red-700 min-w-[80px]">Description:</span>
                <span className="text-sm text-red-800">{errorDetails.description}</span>
              </div>
            )}
            {errorDetails.reason && (
              <div className="flex items-start gap-3 rounded-lg bg-white/70 px-4 py-3 shadow-sm">
                <span className="text-sm font-semibold text-red-700 min-w-[80px]">Reason:</span>
                <span className="text-sm text-red-800">{errorDetails.reason}</span>
              </div>
            )}
            {errorDetails.step && (
              <div className="flex items-start gap-3 rounded-lg bg-white/70 px-4 py-3 shadow-sm">
                <span className="text-sm font-semibold text-red-700 min-w-[80px]">Step:</span>
                <span className="text-sm text-red-800">{errorDetails.step}</span>
              </div>
            )}
            {errorDetails.source && (
              <div className="flex items-start gap-3 rounded-lg bg-white/70 px-4 py-3 shadow-sm">
                <span className="text-sm font-semibold text-red-700 min-w-[80px]">Source:</span>
                <span className="text-sm text-red-800">{errorDetails.source}</span>
              </div>
            )}
          </div>
        </div>
      </details>
    </div>
  );
}

// Action buttons component
function ActionButtons({ status }: { status: PaymentStatus }) {
  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up delay-300">
      {status.isFailure && (
        <Link
          href="/#register"
          className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 px-8 py-4 text-base font-bold text-gray-900 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/50 focus:ring-offset-2"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 opacity-0 transition-opacity group-hover:opacity-100"></span>
          <svg 
            className="relative mr-2 h-5 w-5 transition-transform group-hover:rotate-180" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="relative">Try Again</span>
        </Link>
      )}

      {status.isSuccess && (
        <Link
          href="/dashboard"
          className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-400/50 focus:ring-offset-2"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 opacity-0 transition-opacity group-hover:opacity-100"></span>
          <svg 
            className="relative mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <span className="relative">Go to Dashboard</span>
        </Link>
      )}

      <Link
        href="/"
        className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-600/50 focus:ring-offset-2"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 transition-opacity group-hover:opacity-100"></span>
        <svg className="relative mr-2 h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="relative">Go to Home</span>
      </Link>
    </div>
  );
}

// Support section component
function SupportSection({ paymentDetails, errorDetails }: { 
  paymentDetails: PaymentDetails; 
  errorDetails: ErrorDetails; 
}) {
  const orderId = paymentDetails.orderId || errorDetails.orderId;
  const paymentId = paymentDetails.paymentId || errorDetails.paymentId;
  
  const emailSubject = encodeURIComponent("Payment Support Request");
  const emailBody = encodeURIComponent(
    `Hi,

I need help with my payment.

${orderId ? `Order ID: ${orderId}` : ''}
${paymentId ? `Payment ID: ${paymentId}` : ''}

Please describe your issue:
[Please describe your issue here]

Thank you!`
  );

  return (
    <div className="mt-10 animate-fade-in-up delay-500">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center shadow-lg">
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        <div className="relative">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 shadow-md">
            <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="mb-3 text-lg font-bold text-gray-800">Need Help?</h3>
          <p className="mb-6 text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
            Our support team is here to help you with any payment-related questions. We typically respond within 24 hours.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href={`mailto:contact@talkdrill.com?subject=${emailSubject}&body=${emailBody}`}
              className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:ring-offset-2"
            >
              <svg className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support Team
            </a>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Include your Order ID and Payment ID for faster support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main status page content component
function StatusPageContent({ searchParams }: { searchParams: SearchParams }) {
  const status = getPaymentStatus(searchParams);
  const paymentDetails = extractPaymentDetails(searchParams);
  const errorDetails = extractErrorDetails(searchParams);

  const getStatusMessage = () => {
    if (status.isSuccess) {
      return {
        title: "Payment Successful! 🎉",
        description: "You're successfully registered for the webinar. Check your email for confirmation details and access information.",
      };
    }
    if (status.isFailure) {
      return {
        title: "Payment Failed",
        description: "We couldn't process your payment. Don't worry - you can try again or contact our support team for assistance.",
      };
    }
    return {
      title: "Payment Status Unknown",
      description: "We couldn't determine the payment status from the provided information. Please check your email or contact support.",
    };
  };

  const { title, description } = getStatusMessage();

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 animate-gradient-shift"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <Container className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            {/* Success-specific glow effect */}
            {status.isSuccess && (
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-green-400/20 blur-3xl animate-pulse"></div>
            )}
            
            {/* Main card */}
            <div className="relative rounded-3xl p-1 shadow-2xl bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl">
              {status.isSuccess && <GlitterEffect />}
              <div className="rounded-[1.4rem] bg-white/90 p-8 sm:p-12 backdrop-blur-sm">
                
                {/* Status Icon */}
                <div className="mb-8 flex justify-center animate-fade-in-down">
                  <StatusIcon status={status} />
                </div>

                {/* Title and Description */}
                <div className="mb-10 text-center animate-fade-in-up">
                  <h1 className="mb-4 text-3xl font-extrabold text-gray-900 sm:text-5xl leading-tight">
                    {title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
                    {description}
                  </p>
                </div>

                {/* Payment Details */}
                <PaymentDetailsCard 
                  paymentDetails={paymentDetails} 
                  errorDetails={errorDetails} 
                />

                {/* Error Details (only shown on failure) */}
                {status.isFailure && (
                  <ErrorDetailsCard errorDetails={errorDetails} />
                )}

                {/* Action Buttons */}
                <ActionButtons status={status} />

                {/* Join + Add to Calendar (only on success) */}
                {status.isSuccess && <AddToCalendar />}

                {/* Support Section */}
                <SupportSection 
                  paymentDetails={paymentDetails} 
                  errorDetails={errorDetails} 
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      
    </section>
  );
}

// Main component with Suspense wrapper
export default async function StatusPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  // Await searchParams before using them
  const resolvedSearchParams = await searchParams;
  
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    }>
      <StatusPageContent searchParams={resolvedSearchParams} />
    </Suspense>
  );
}