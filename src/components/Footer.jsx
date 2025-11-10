import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-[#002349]  border-[#FFD700] shadow-[0_0_20px_rgba(0.1,0.1,0.1,0.1)] py-3">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div>© {new Date().getFullYear()} AR Construction & Properties</div>
        <div className="mt-2 text-gold-muted">Built with care</div>
      </div>
    </footer>
  );
}
