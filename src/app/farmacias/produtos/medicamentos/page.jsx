"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../../app/farmacias/produtos/medicamentos/cadastro.module.css";

const imagemPadrao =
  "https://www.institutoaron.com.br/static/img/large/c28a030a59bae1283321c340cdc846df.webp";

const currency =
  typeof Intl !== "undefined"
    ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
    : { format: (v) => `R$ ${Number(v).toFixed(2)}` };

const medicamentosIniciais = [
  {
    id: 1,
    nome: "Paracetamol",
    dosagem: "500mg",
    quantidade: 20,
    tipo: "Genérico",
    forma: "Comprimido",
    descricao: "Analgésico e antitérmico.",
    laboratorio: "EMS",
    preco: 12.5,
    imagem: "",
  },
  {
    id: 2,
    nome: "Dipirona",
    dosagem: "1g",
    quantidade: 10,
    tipo: "Similar",
    forma: "Comprimido",
    descricao: "Analgésico e antitérmico.",
    laboratorio: "Neo Química",
    preco: 8.9,
    imagem: "",
  },
];

function ListagemMedicamentos() {
  const [medicamentos, setMedicamentos] = useState(medicamentosIniciais);
  const router = useRouter();

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este medicamento?")) {
      setMedicamentos(medicamentos.filter((med) => med.id !== id));
    }
  };

  const handleEditar = (id) => {
    router.push(`/produtos/medicamentos/editar/${id}`);
  };

  return (
    <div className={styles.layout}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>💊 PharmaX</div>
        <nav className={styles.nav}>
          <a href="/farmacias/favoritos" className={styles.active}>⭐ Favoritos</a>
          <a href="/farmacias/produtos/medicamentos">💊 Medicamentos</a>
          <a href="/farmacias/cadastro/funcionario">👩‍⚕️ Funcionários</a>
          <a href="/laboratorio/lista">🏭 Laboratórios</a>
          <a href="/config">⚙️ Configurações</a>
        </nav>
        <button className={styles.logout}>🚪 Sair</button>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <main className={styles.content}>
        <div className={styles.containermed}>
          <h1 className={styles.titulo}>Painel de Controle</h1>
          
<Link
          href="/medicamentos/cadastro"
          className={styles.bottao}
          style={{ maxWidth: 200, textAlign: "center" }}
        >
          + Novo Medicamento
        </Link>
          {medicamentos.length === 0 ? (
            <p className={styles.empty}>Nenhum medicamento cadastrado.</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table className={styles.tabela}>
                <thead>
                  <tr>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Dosagem</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Tipo</th>
                    <th>Forma</th>
                    <th>Laboratório</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {medicamentos.map((med) => (
                    <tr key={med.id}>
                      <td>
                        <img
                          src={med.imagem || imagemPadrao}
                          alt={med.nome}
                          className={styles.imgThumb}
                        />
                      </td>
                      <td>{med.nome}</td>
                      <td>{med.dosagem}</td>
                      <td>{med.quantidade}</td>
                      <td className={styles.money}>
                        {currency.format(Number(med.preco ?? 0))}
                      </td>
                      <td>{med.tipo}</td>
                      <td>{med.forma}</td>
                      <td>{med.laboratorio}</td>
                      <td>
                        <button
                          className={`${styles.botao} ${styles.botaoEditar}`}
                          onClick={() => handleEditar(med.id)}
                        >
                          Editar
                        </button>
                        <button
                          className={`${styles.botao} ${styles.botaoExcluir}`}
                          onClick={() => handleExcluir(med.id)}
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default ListagemMedicamentos;
