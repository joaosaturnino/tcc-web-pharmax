"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./funcionario.module.css"; // deve estar na mesma pasta

export default function CadastroFuncionarioPage() {
  const router = useRouter();

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
    // aqui você pode enviar para API ou salvar localStorage
    console.log("Dados enviados:", form);
    // exemplo: redireciona para lista de funcionarios
    router.push("/funcionarios");
  };

  return (
    <div className={styles.layout}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>💊 PharmaX</div>
        <nav className={styles.nav}>
          <a href="/farmacia/favoritos" className={styles.active}>⭐ Favoritos</a>
          <a href="/farmacias/produtos/medicamentos">💊 Medicamentos</a>
          <a href="/farmacias/cadastro/funcionario">👩‍⚕️ Funcionários</a>
          <a href="/laboratorio/lista">🏭 Laboratórios</a>
          <a href="/config">⚙️ Configurações</a>
        </nav>
        <button className={styles.logout}>🚪 Sair</button>
      </aside>

      {/* CONTEÚDO */}
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Cadastro de Funcionário</h1>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Nome</label>
              <input
                className={styles.input}
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>E-mail</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.fieldHalf}>
                <label className={styles.label}>Telefone</label>
                <input
                  className={styles.input}
                  type="tel"
                  name="telefone"
                  value={form.telefone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.fieldHalf}>
                <label className={styles.label}>Cargo</label>
                <input
                  className={styles.input}
                  type="text"
                  name="cargo"
                  value={form.cargo}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.btnPrimary}>Salvar</button>
              <button type="button" className={styles.btnSecondary} onClick={() => router.back()}>Cancelar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
