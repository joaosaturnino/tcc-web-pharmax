"use client";

import { useEffect, useState } from "react";
import styles from "./favoritos.module.css";

export default function FavoritosFarmaciaPage() {
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock para desenvolvimento (substituir pelo fetch real)
    setTimeout(() => {
      setFavoritos([
        {
          userId: "u1",
          userName: "Ana Souza",
          userEmail: "ana.souza@example.com",
          favoritedAt: "2025-08-01T10:22:00Z",
          meds: [
            { id: "m1", nome: "Paracetamol 500mg", dosagem: "500mg", status: "em_estoque" },
            { id: "m2", nome: "Omeprazol 20mg", dosagem: "20mg", status: "pendente" }
          ]
        },
        {
          userId: "u2",
          userName: "Carlos Lima",
          userEmail: "carlos.lima@example.com",
          favoritedAt: "2025-08-05T15:12:00Z",
          meds: [
            { id: "m3", nome: "Cetirizina 10mg", dosagem: "10mg", status: "indisponivel" }
          ]
        }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <div className={styles.loader}>Carregando favoritos...</div>;
  }

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
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

      {/* Conteúdo */}
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Medicamentos Favoritados</h1>
          <button className={styles.actionBtn}>Exportar CSV</button>
        </header>

        <div className={styles.grid}>
          {favoritos.map((user) => (
            <div className={styles.card} key={user.userId}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>{user.userName}</h2>
                  <p>{user.userEmail}</p>
                </div>
                <button
                  className={styles.contactBtn}
                  onClick={() => (window.location.href = `mailto:${user.userEmail}`)}
                >
                  ✉️
                </button>
              </div>

              <ul className={styles.medList}>
                {user.meds.map((med) => (
                  <li key={med.id} className={styles.medItem}>
                    <div>
                      <strong>{med.nome}</strong>
                      <span className={styles.dosagem}>{med.dosagem}</span>
                    </div>
                    <span
                      className={`${styles.badge} ${
                        med.status === "em_estoque"
                          ? styles.inStock
                          : med.status === "indisponivel"
                          ? styles.outStock
                          : styles.pending
                      }`}
                    >
                      {med.status === "em_estoque"
                        ? "Disponível"
                        : med.status === "indisponivel"
                        ? "Indisponível"
                        : "Pendente"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
