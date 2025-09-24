const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ onPress, disabled, correct, wrong }) {
  return (
    <div className="keyboard" role="group" aria-label="Teclado do jogo">
      {KEYS.map(k => {
        const ok = (correct || []).includes(k);
        const no = (wrong || []).includes(k);
        return (
          <button
            key={k}
            className={`key ${ok ? "ok" : ""} ${no ? "no" : ""}`}
            onClick={() => onPress(k)}
            disabled={disabled || ok || no}
            aria-label={`Letra ${k}`}
            type="button"
          >
            {k}
          </button>
        );
      })}
    </div>
  );
}
