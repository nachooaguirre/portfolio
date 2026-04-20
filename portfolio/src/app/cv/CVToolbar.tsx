"use client";

import Link from "next/link";

export default function CVToolbar() {
  return (
    <div className="print:hidden sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm px-6 py-3 flex items-center justify-between gap-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors shrink-0"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Volver al portfolio
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 text-sm bg-gray-900 text-white px-4 py-1.5 rounded-full hover:bg-gray-700 transition-colors shrink-0"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M6 2h12a2 2 0 0 1 2 2v6H4V4a2 2 0 0 1 2-2ZM4 12h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1v-3H5v3H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Zm7 8h2v-4h-2v4Z" />
        </svg>
        Guardar como PDF
      </button>
    </div>
  );
}
