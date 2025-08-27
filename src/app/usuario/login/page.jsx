'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <form className={styles.form}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className={styles.input}
      />
      <button type="button" className={styles.button}>
        Entrar
      </button>
    </form>
  );
}