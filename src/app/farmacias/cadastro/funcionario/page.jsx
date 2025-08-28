"use client";

import { useState } from "react";
import styles from "./funcionario.module.css";

export default function CadastroFuncionarioPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
    alert("Funcionário cadastrado com sucesso!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cadastro de Funcionário</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="cargo"
          placeholder="Cargo"
          value={form.cargo}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Salvar
        </button>
      </form>
    </div>
  );
}
