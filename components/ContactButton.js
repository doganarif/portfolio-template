export default function ContactButton({ href, icon: Icon, text }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#e9e9e7] hover:bg-[#f1f1ef] transition-colors text-sm text-[#37352f]"
    >
      <Icon size={16} />
      {text}
    </a>
  );
}