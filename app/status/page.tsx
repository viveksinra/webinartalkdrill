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
  const baseClasses = "h-16 w-16 drop-shadow-sm";
  
  if (status.isSuccess) {
    return (
      <div className="rounded-full bg-green-100 p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${baseClasses} text-green-600`}
          aria-label="Success"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.11 7.472a.75.75 0 0 0-1.22-.944l-3.236 4.186-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.133-.089l3.739-4.857Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  if (status.isFailure) {
    return (
      <div className="rounded-full bg-red-100 p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${baseClasses} text-red-600`}
          aria-label="Failed"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm2.47 6.53a.75.75 0 0 0-1.06 0L12 10.19 10.59 8.78a.75.75 0 1 0-1.06 1.06L10.94 11.25 9.53 12.66a.75.75 0 0 0 1.06 1.06L12 12.31l1.41 1.41a.75.75 0 1 0 1.06-1.06L13.06 11.25l1.41-1.41a.75.75 0 0 0 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="rounded-full bg-amber-100 p-3">
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
    <div className="mb-6 text-left">
      <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-4 backdrop-blur-sm">
        <h2 className="mb-3 text-sm font-semibold text-gray-800">Payment Details</h2>
        <dl className="grid grid-cols-1 gap-3 text-sm text-gray-700 sm:grid-cols-2">
          {orderId && (
            <div className="flex items-center justify-between gap-3 rounded-md border border-gray-100 bg-white px-4 py-3 shadow-sm">
              <dt className="font-medium text-gray-600">Order ID</dt>
              <dd className="truncate font-mono text-xs text-gray-900" title={orderId}>
                {orderId}
              </dd>
            </div>
          )}
          {paymentId && (
            <div className="flex items-center justify-between gap-3 rounded-md border border-gray-100 bg-white px-4 py-3 shadow-sm">
              <dt className="font-medium text-gray-600">Payment ID</dt>
              <dd className="truncate font-mono text-xs text-gray-900" title={paymentId}>
                {paymentId}
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}

// Error details component
function ErrorDetailsCard({ errorDetails }: { errorDetails: ErrorDetails }) {
  const hasErrorDetails = Object.values(errorDetails).some(Boolean);
  if (!hasErrorDetails) return null;

  return (
    <div className="mb-6 text-left">
      <details className="group rounded-lg border border-red-200 bg-red-50/50 p-4">
        <summary className="cursor-pointer text-sm font-semibold text-red-800 group-open:mb-3">
          Error Details
          <span className="ml-2 text-xs text-red-600 group-open:hidden">
            (Click to expand)
          </span>
        </summary>
        <div className="space-y-2 text-xs text-red-800">
          {errorDetails.code && (
            <div className="rounded bg-white/50 px-3 py-2">
              <span className="font-medium">Code:</span> {errorDetails.code}
            </div>
          )}
          {errorDetails.description && (
            <div className="rounded bg-white/50 px-3 py-2">
              <span className="font-medium">Description:</span> {errorDetails.description}
            </div>
          )}
          {errorDetails.reason && (
            <div className="rounded bg-white/50 px-3 py-2">
              <span className="font-medium">Reason:</span> {errorDetails.reason}
            </div>
          )}
          {errorDetails.step && (
            <div className="rounded bg-white/50 px-3 py-2">
              <span className="font-medium">Step:</span> {errorDetails.step}
            </div>
          )}
          {errorDetails.source && (
            <div className="rounded bg-white/50 px-3 py-2">
              <span className="font-medium">Source:</span> {errorDetails.source}
            </div>
          )}
        </div>
      </details>
    </div>
  );
}

// Action buttons component
function ActionButtons({ status }: { status: PaymentStatus }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      {status.isFailure && (
        <Link
          href="/#register"
          className="group inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-200 hover:from-yellow-300 hover:to-yellow-400 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        >
          <svg 
            className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </Link>
      )}

      {status.isSuccess && (
        <Link
          href="/dashboard"
          className="group inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-green-400 hover:to-green-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          <svg 
            className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Go to Dashboard
        </Link>
      )}

      <Link
        href="/"
        className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-gray-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Go to Home
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
    <div className="mt-8 rounded-lg border border-gray-100 bg-gray-50/50 p-4 text-center">
      <h3 className="mb-2 text-sm font-semibold text-gray-800">Need Help?</h3>
      <p className="mb-3 text-xs text-gray-600">
        Our support team is here to help you with any payment-related questions.
      </p>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
        <a
          href={`mailto:contact@talkdrill.com?subject=${emailSubject}&body=${emailBody}`}
          className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email Support
        </a>
        <span className="text-xs text-gray-500">
          Include your Order ID and Payment ID for faster support
        </span>
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
    <section className="relative min-h-screen w-full bg-gradient-to-br from-gray-50 to-white">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="relative rounded-2xl p-1 shadow-2xl bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-amber-400/20">
            {status.isSuccess && <GlitterEffect />}
            <div className="rounded-xl bg-white/95 p-8 backdrop-blur-sm">
              
              {/* Status Icon */}
              <div className="mb-6 flex justify-center">
                <StatusIcon status={status} />
              </div>

              {/* Title and Description */}
              <div className="mb-8 text-center">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                  {title}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
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
      </Container>
    </section>
  );
}

// Main component with Suspense wrapper
export default function StatusPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    }>
      <StatusPageContent searchParams={searchParams} />
    </Suspense>
  );
}