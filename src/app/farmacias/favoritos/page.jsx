"use client";

import { useEffect, useState } from "react";
import styles from "./favoritos.module.css";

export default function FavoritosFarmaciaPage() {
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock (simulação) — depois substitua por chamada real da API
    setTimeout(() => {
      setFavoritos([
        {
          userId: "u1",
          userName: "Ana Souza",
          userEmail: "ana.souza@example.com",
          favoritedAt: "2025-08-01T10:22:00Z",
          meds: [
            { id: "m1", nome: "Paracetamol 500mg", dosagem: "500mg" },
            { id: "m2", nome: "Omeprazol 20mg", dosagem: "20mg" }
          ]
        },
        {
          userId: "u2",
          userName: "Carlos Lima",
          userEmail: "carlos.lima@example.com",
          favoritedAt: "2025-08-05T15:12:00Z",
          meds: [
            { id: "m3", nome: "Cetirizina 10mg", dosagem: "10mg" }
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
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>⭐ Medicamentos Favoritados</h1>
        <button className={styles.actionBtn}>Exportar CSV</button>
      </header>

      {/* Tabela */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Email</th>
              <th>Medicamento</th>
              <th>Dosagem</th>
              <th>Data Favorito</th>
              
            </tr>
          </thead>
          <tbody>
            {favoritos.map((user) =>
              user.meds.map((med) => (
                <tr key={`${user.userId}-${med.id}`}>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>{med.nome}</td>
                  <td>{med.dosagem}</td>
                  <td>{new Date(user.favoritedAt).toLocaleDateString("pt-BR")}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
