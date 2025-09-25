"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Keyboard from "../components/Keyboard";
import HangmanDrawing from "../components/HangmanDrawing";

const POKEMON_WORDS = [
  "PIKACHU","GRENINJA","MALAMAR","BLASTOISE","JOLTEON","SNORLAX","HITMONLEE","VILEPLUME",
  "LUCARIO","GARCHOMP","ELECTRODE","SYLVEON","DRAGONITE","GYARADOS","ARCANINE",
  "JIGGLYPUFF","RATTATA","GIRATINA","ONIX","PRIMEAPE","HAUNTER","MAGIKARP","LAPRAS",
  "KYUREM","ZEKROM","RAPIDASH","PIPLUP","TORTERRA","INFERNAPE","STARAPTOR","BUIZEL",
  "GARDEVOIR","KABUTO","LARVITAR","SCIZOR"
];

const MAX_ERRORS = 6;

export default function ForcaPage() {
  const router = useRouter();
  const [secret, setSecret] = useState("");
  const [correct, setCorrect] = useState([]);
  const [wrong, setWrong] = useState([]);
  const [status, setStatus] = useState("playing");

  const start = () => {
    const word = POKEMON_WORDS[Math.floor(Math.random() * POKEMON_WORDS.length)];
    setSecret(word);
    setCorrect([]);
    setWrong([]);
    setStatus("playing");
  };

  useEffect(() => { start(); }, []);

  const distinct = useMemo(() => Array.from(new Set(secret.split(""))), [secret]);

  useEffect(() => {
    if (!secret) return;
    if (distinct.every(l => correct.includes(l))) setStatus("win");
    if (wrong.length >= MAX_ERRORS) setStatus("lose");
  }, [correct, wrong, distinct, secret]);

  const tryLetter = (letter) => {
    if (status !== "playing") return;
    const L = letter.toUpperCase();
    if (correct.includes(L) || wrong.includes(L)) return;
    if (secret.includes(L)) setCorrect(p => [...p, L]); else setWrong(p => [...p, L]);
  };

    useEffect(() => {
        if (status !== "playing") return;

        const h = (e) => {
            if (e.key === "Enter" || e.key === " ") return;
            const k = e.key?.toUpperCase();
            if (/^[A-Z]$/.test(k)) {
            e.preventDefault();
            tryLetter(k);
            }
        };

        window.addEventListener("keydown", h);
        return () => window.removeEventListener("keydown", h);
    }, [status, secret, correct, wrong]);


  const errors = wrong.length;
  const chances = MAX_ERRORS - errors;

  return (
    <main className="container">
      <h1>Jogo da Forca — Pokémon Edition</h1>

      <HangmanDrawing errors={errors} />

      <div className={`status ${status === "win" ? "win" : ""} ${status === "lose" ? "lose" : ""}`} aria-live="polite">
        <strong>Tentativas restantes:</strong> {chances}
        {" • "}
        <strong>Letras usadas:</strong> {wrong.concat(correct).join(" ") || "—"}
      </div>

      <div className="word" aria-label="Palavra secreta">
        {secret.split("").map((ch, i) => {
          const show = correct.includes(ch) || status !== "playing";
          return (
            <span key={i} className={show ? "revealed" : ""}>
              {show ? ch : "_"}
            </span>
          );
        })}
      </div>

      {status === "win" && <div className="status win">🎉 Parabéns! Você adivinhou <strong>{secret}</strong>.</div>}
      {status === "lose" && <div className="status lose">😵 Você perdeu. A palavra era <strong>{secret}</strong>.</div>}

      <Keyboard onPress={tryLetter} disabled={status !== "playing"} correct={correct} wrong={wrong} />

      <div style={{display:"flex", gap:12, justifyContent:"center", marginTop:12}}>
        <button className="btn" onClick={start} type="button">Reiniciar</button>
        <button
            className="btn secondary"
            type="button"
            onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof window !== "undefined" && window.history.length > 1) {
                router.back();         
            } else {
                router.replace("/");   
            }
            }}
        >
            Voltar
        </button>
    </div>
    </main>
  );
}
