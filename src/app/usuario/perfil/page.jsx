"use client";

import styles from "./perfil.module.css";
import { useRouter } from "next/navigation";

export default function PerfilFarmaciaPage() {
  const router = useRouter();

  const perfil = {
    nome: "Farmácia Central",
    email: "farmacia@exemplo.com",
    telefone: "(11) 99999-9999",
    endereco: "Rua das Flores, 123 - São Paulo/SP",
    cnpj: "12.345.678/0001-99",
  };

  const handleLogout = () => {
    // Aqui você pode limpar tokens, cookies ou localStorage
    console.log("Logout realizado!");
    alert("Você saiu do sistema.");
    router.push("/"); // redireciona para a página inicial
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Perfil da Farmácia</h1>

      <div className={styles.card}>
        <p><strong>Nome:</strong> {perfil.nome}</p>
        <p><strong>E-mail:</strong> {perfil.email}</p>
        <p><strong>Telefone:</strong> {perfil.telefone}</p>
        <p><strong>Endereço:</strong> {perfil.endereco}</p>
        <p><strong>CNPJ:</strong> {perfil.cnpj}</p>
      </div>

      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
