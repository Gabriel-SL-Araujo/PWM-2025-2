export default function HangmanDrawing({ errors = 0 }) {
  const parts = {
    base: <line x1="10" y1="240" x2="150" y2="240" stroke="currentColor" strokeWidth="6" />,
    pole: <line x1="40" y1="240" x2="40" y2="20" stroke="currentColor" strokeWidth="6" />,
    arm:  <line x1="37" y1="20" x2="180" y2="20" stroke="currentColor" strokeWidth="6" />,
    rope: <line x1="180" y1="20" x2="180" y2="55" stroke="currentColor" strokeWidth="6" />,
    head: <circle cx="180" cy="80" r="24" stroke="currentColor" strokeWidth="6" fill="none" />,
    body: <line x1="180" y1="104" x2="180" y2="160" stroke="currentColor" strokeWidth="6" />,
    armL: <line x1="180" y1="120" x2="155" y2="140" stroke="currentColor" strokeWidth="6" />,
    armR: <line x1="180" y1="120" x2="205" y2="140" stroke="currentColor" strokeWidth="6" />,
    legL: <line x1="180" y1="160" x2="160" y2="200" stroke="currentColor" strokeWidth="6" />,
    legR: <line x1="180" y1="160" x2="200" y2="200" stroke="currentColor" strokeWidth="6" />
  };

  const order = ["base","pole","arm","rope","head","body","armL","armR","legL","legR"];
  const toShow = order.slice(0, Math.min(errors + 4, order.length));

  return (
    <div className="hangman">
      <svg viewBox="0 0 260 260" aria-label="Desenho da Forca">
        {toShow.map(key => <g key={key}>{parts[key]}</g>)}
      </svg>
    </div>
  );
}
