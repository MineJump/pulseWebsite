import Button from "./Button.jsx";

export default function SubtleArrowLink({ href, label, className = "" }) {
  return (
    <Button href={href} variant="ghost" iconRight={<span>→</span>} className={className}>
      {label}
    </Button>
  );
}
