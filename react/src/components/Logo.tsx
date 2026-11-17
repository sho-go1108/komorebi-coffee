export default function Logo() {
  return (
    <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 17h14v6a7 7 0 0 1-14 0z" fill="currentColor" />
      <path d="M26 19h2a3 3 0 0 1 0 6h-2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 10c-1 2 1 3 0 5M20 9c-1 2 1 3 0 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
