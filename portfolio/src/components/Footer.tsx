export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-foreground/8 py-8">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/40">
          © {year} Ignacio Aguirre · Full Stack Developer
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:ignacioaguirre.site@gmail.com"
            className="text-foreground/40 hover:text-foreground/80 transition-colors"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.4-.5 7.1 5.1c.3.22.7.22 1 0L19.6 6H4.4Z" />
            </svg>
          </a>
          <a
            href="https://github.com/nachooaguirre"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/40 hover:text-foreground/80 transition-colors"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.86-.01-1.69-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05.8-.23 1.66-.35 2.51-.35.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ignacioaguirresite/"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/40 hover:text-foreground/80 transition-colors"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-3.8V8z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-foreground/25 hidden sm:block">
          Santa Fe, Argentina
        </p>
      </div>
    </footer>
  );
}
