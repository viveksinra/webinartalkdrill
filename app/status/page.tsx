import Container from "@/components/Container";
import Link from "next/link";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function StatusPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const rawStatus = Array.isArray(searchParams?.paymentStatus)
    ? searchParams?.paymentStatus?.[0]
    : searchParams?.paymentStatus;

  const normalizedStatus = rawStatus?.toString().toLowerCase();

  // Accept common misspelling "sucess" as well as "success"
  const isSuccess = normalizedStatus === "success" || normalizedStatus === "sucess";
  const isFailure = normalizedStatus === "failure" || normalizedStatus === "failed" || normalizedStatus === "error";

  const title = isSuccess
    ? "Payment Successful"
    : isFailure
    ? "Payment Failed"
    : "Payment Status";

  const description = isSuccess
    ? "You're successfully registered for the webinar. Check your email for details."
    : isFailure
    ? "We couldn't process your payment. You can try again or contact support."
    : "We couldn't determine the payment status from the link.";

  // Razorpay params: success
  const paymentId = Array.isArray(searchParams?.razorpay_payment_id)
    ? searchParams?.razorpay_payment_id?.[0]
    : (searchParams?.razorpay_payment_id as string | undefined);
  const orderId = Array.isArray(searchParams?.razorpay_order_id)
    ? searchParams?.razorpay_order_id?.[0]
    : (searchParams?.razorpay_order_id as string | undefined);
  // Signature is typically for server verification; avoid rendering it publicly by default
  // const signature = Array.isArray(searchParams?.razorpay_signature)
  //   ? searchParams?.razorpay_signature?.[0]
  //   : (searchParams?.razorpay_signature as string | undefined);

  // Razorpay error params (from Checkout or Hosted pages)
  const errorCode = (searchParams?.["error[code]"] as string | undefined) || (searchParams?.error_code as string | undefined);
  const errorDescription = (searchParams?.["error[description]"] as string | undefined) || (searchParams?.error_description as string | undefined);
  const errorReason = (searchParams?.["error[reason]"] as string | undefined) || (searchParams?.error_reason as string | undefined);
  const errorStep = (searchParams?.["error[step]"] as string | undefined) || (searchParams?.error_step as string | undefined);
  const errorSource = (searchParams?.["error[source]"] as string | undefined) || (searchParams?.error_source as string | undefined);
  const errorPaymentId = (searchParams?.["error[metadata][payment_id]"] as string | undefined) || (searchParams?.error_payment_id as string | undefined);
  const errorOrderId = (searchParams?.["error[metadata][order_id]"] as string | undefined) || (searchParams?.error_order_id as string | undefined);

  const Icon = () => {
    if (isSuccess) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-14 w-14 text-green-600"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.11 7.472a.75.75 0 0 0-1.22-.944l-3.236 4.186-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.133-.089l3.739-4.857Z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    if (isFailure) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-14 w-14 text-red-600"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm2.47 6.53a.75.75 0 0 0-1.06 0L12 10.19 10.59 8.78a.75.75 0 1 0-1.06 1.06L10.94 11.25 9.53 12.66a.75.75 0 0 0 1.06 1.06L12 12.31l1.41 1.41a.75.75 0 1 0 1.06-1.06L13.06 11.25l1.41-1.41a.75.75 0 0 0 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-14 w-14 text-yellow-500"
        aria-hidden
      >
        <path d="M11.25 3a.75.75 0 0 1 1.5 0v9.19l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4-4A.75.75 0 0 1 11.25 12V3Z" />
        <path d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9 7.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
      </svg>
    );
  };

  return (
    <section className="relative w-full">
      <Container className="py-10 sm:py-14">
        <div className="mx-auto max-w-xl">
          <div className="rounded-2xl p-[3px] shadow-xl bg-[linear-gradient(135deg,#8a6b00_0%,#ffd700_25%,#ffcc33_50%,#b8860b_75%,#8a6b00_100%)]">
            <div className="rounded-xl bg-white p-8 text-center">
              <div className="mb-4 flex justify-center">
                <Icon />
              </div>
              <h1 className="mb-2 text-2xl font-extrabold text-gray-900">{title}</h1>
              <p className="mb-6 text-sm text-gray-600">{description}</p>

              {/* Payment Details when available */}
              {(paymentId || orderId || errorPaymentId || errorOrderId) ? (
                <div className="mb-6 text-left">
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                    <h2 className="mb-3 text-sm font-semibold text-gray-800">Payment Details</h2>
                    <dl className="grid grid-cols-1 gap-2 text-xs text-gray-700 sm:grid-cols-2">
                      {orderId ? (
                        <div className="flex items-center justify-between gap-3 rounded-md bg-white px-3 py-2 shadow-sm">
                          <dt className="font-medium text-gray-600">Order ID</dt>
                          <dd className="truncate text-gray-900">{orderId}</dd>
                        </div>
                      ) : null}
                      {paymentId ? (
                        <div className="flex items-center justify-between gap-3 rounded-md bg-white px-3 py-2 shadow-sm">
                          <dt className="font-medium text-gray-600">Payment ID</dt>
                          <dd className="truncate text-gray-900">{paymentId}</dd>
                        </div>
                      ) : null}
                      {!orderId && errorOrderId ? (
                        <div className="flex items-center justify-between gap-3 rounded-md bg-white px-3 py-2 shadow-sm">
                          <dt className="font-medium text-gray-600">Order ID</dt>
                          <dd className="truncate text-gray-900">{errorOrderId}</dd>
                        </div>
                      ) : null}
                      {!paymentId && errorPaymentId ? (
                        <div className="flex items-center justify-between gap-3 rounded-md bg-white px-3 py-2 shadow-sm">
                          <dt className="font-medium text-gray-600">Payment ID</dt>
                          <dd className="truncate text-gray-900">{errorPaymentId}</dd>
                        </div>
                      ) : null}
                    </dl>
                  </div>
                </div>
              ) : null}

              {/* Error details on failure */}
              {isFailure && (errorCode || errorDescription || errorReason || errorStep || errorSource) ? (
                <div className="mb-6 text-left">
                  <div className="rounded-lg border border-red-100 bg-red-50 p-4">
                    <h2 className="mb-2 text-sm font-semibold text-red-800">Error details</h2>
                    <ul className="list-inside list-disc text-xs text-red-800">
                      {errorCode ? <li><span className="font-medium">Code:</span> {errorCode}</li> : null}
                      {errorDescription ? <li><span className="font-medium">Description:</span> {errorDescription}</li> : null}
                      {errorReason ? <li><span className="font-medium">Reason:</span> {errorReason}</li> : null}
                      {errorStep ? <li><span className="font-medium">Step:</span> {errorStep}</li> : null}
                      {errorSource ? <li><span className="font-medium">Source:</span> {errorSource}</li> : null}
                    </ul>
                  </div>
                </div>
              ) : null}

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                {isFailure ? (
                  <Link
                    href="/#register"
                    className="inline-flex items-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-black shadow hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                  >
                    Try Again
                  </Link>
                ) : null}

                <Link
                  href="/"
                  className="inline-flex items-center rounded-full bg-black px-5 py-2 text-sm font-semibold text-white shadow hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Go to Home
                </Link>
              </div>

              {/* Support section */}
              <div className="mt-6 text-center text-xs text-gray-600">
                Need help? Email
                {" "}
                <a href="mailto:contact@talkdrill.com" className="font-semibold text-[#4537e6] hover:underline">
                  contact@talkdrill.com
                </a>
                . Please include your Order ID and Payment ID for faster support.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


