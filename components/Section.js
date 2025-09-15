export default function Section({ title, icon: Icon, children }) {
  return (
    <section>
      <h2 className="text-sm font-medium text-[#787774] mb-3 flex items-center gap-2">
        {Icon && <Icon size={16} />}
        {title}
      </h2>
      {children}
    </section>
  );
}