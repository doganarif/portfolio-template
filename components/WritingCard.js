"use client";

import { ArrowUpRight } from "lucide-react";

export default function WritingCard({ title, description, url, onClick }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 rounded-lg hover:bg-[#f1f1ef] transition-colors group"
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[#37352f] font-medium mb-1">{title}</h3>
          <p className="text-sm text-[#787774]">{description}</p>
        </div>
        <ArrowUpRight
          size={16}
          className="text-[#b8b8b5] opacity-0 group-hover:opacity-100 transition-opacity mt-1"
        />
      </div>
    </a>
  );
}