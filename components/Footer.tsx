import Image from "next/image";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="py-6 flex flex-col items-center justify-between gap-4 text-sm text-black/70 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/logo/logo-full.svg"
            alt="TalkDrill"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden sm:inline-block">© {new Date().getFullYear()} TalkDrill. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#" aria-label="X (Twitter)" className="group rounded-full p-2 ring-1 ring-black/10 hover:bg-black/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black/70 group-hover:text-black">
              <path d="M13.545 10.808 20.24 3h-1.584l-5.781 6.668L7.72 3H2l6.993 10.01L2 21h1.584l6.082-7.016L16.28 21H22l-8.455-10.192Zm-2.154 2.485-.705-.986-5.61-7.85h2.415l4.53 6.34.705.986 5.894 8.245h-2.415l-4.814-6.735Z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="group rounded-full p-2 ring-1 ring-black/10 hover:bg-black/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black/70 group-hover:text-black">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.84v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8Z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="group rounded-full p-2 ring-1 ring-black/10 hover:bg-black/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black/70 group-hover:text-black">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.403.61.21 1.045.463 1.503.92.457.458.71.893.92 1.503.163.46.348 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.403 2.43a3.89 3.89 0 0 1-.92 1.503 3.89 3.89 0 0 1-1.503.92c-.46.163-1.26.348-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.403a3.89 3.89 0 0 1-1.503-.92 3.89 3.89 0 0 1-.92-1.503c-.163-.46-.348-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.403-2.43.21-.61.463-1.045.92-1.503.458-.457.893-.71 1.503-.92.46-.163 1.26-.348 2.43-.403C8.416 2.175 8.796 2.163 12 2.163Zm0 1.837c-3.16 0-3.53.012-4.78.07-.98.045-1.51.21-1.86.35-.47.182-.8.397-1.15.747-.35.35-.565.68-.747 1.15-.14.35-.305.88-.35 1.86-.058 1.25-.07 1.62-.07 4.78s.012 3.53.07 4.78c.045.98.21 1.51.35 1.86.182.47.397.8.747 1.15.35.35.68.565 1.15.747.35.14.88.305 1.86.35 1.25.058 1.62.07 4.78.07s3.53-.012 4.78-.07c.98-.045 1.51-.21 1.86-.35.47-.182.8-.397 1.15-.747.35-.35.565-.68.747-1.15.14-.35.305-.88.35-1.86.058-1.25.07-1.62.07-4.78s-.012-3.53-.07-4.78c-.045-.98-.21-1.51-.35-1.86-.182-.47-.397-.8-.747-1.15a2.89 2.89 0 0 0-1.15-.747c-.35-.14-.88-.305-1.86-.35-1.25-.058-1.62-.07-4.78-.07Zm0 3.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2Zm0 1.8a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm5.5-3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="group rounded-full p-2 ring-1 ring-black/10 hover:bg-black/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black/70 group-hover:text-black">
              <path d="M23.5 6.2a3.09 3.09 0 0 0-2.17-2.18C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.33.52A3.09 3.09 0 0 0 .5 6.2 32.3 32.3 0 0 0 0 12a32.3 32.3 0 0 0 .5 5.8 3.09 3.09 0 0 0 2.17 2.18C4.5 20.5 12 20.5 12 20.5s7.5 0 9.33-.52a3.09 3.09 0 0 0 2.17-2.18c.34-1.9.5-3.8.5-5.8s-.16-3.9-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="group rounded-full p-2 ring-1 ring-black/10 hover:bg-black/5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black/70 group-hover:text-black">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.06h3.127V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.098 2.795.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.316h3.591l-.468 3.646h-3.123V24h6.127C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0Z"/>
            </svg>
          </a>
        </div>
      </Container>
      <Container className="pb-6 pt-0 text-center text-xs text-black/60 sm:hidden">
        © {new Date().getFullYear()} TalkDrill. All rights reserved.
      </Container>
    </footer>
  );
}


