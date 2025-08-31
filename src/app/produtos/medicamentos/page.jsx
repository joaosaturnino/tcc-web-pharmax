"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../app/produtos/medicamentos/cadastro.module.css";

const imagemPadrao = "https://www.institutoaron.com.br/static/img/large/c28a030a59bae1283321c340cdc846df.webp";

// Util para formatar preço em BRL com fallback seguro
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
  {
    id: 3,
    nome: "Omeprazol",
    dosagem: "20mg",
    quantidade: 15,
    tipo: "Referência",
    forma: "Cápsula",
    descricao: "Inibidor de bomba de prótons.",
    laboratorio: "AstraZeneca",
    preco: 25.9,
    imagem: "",
  },
];

function ListagemMedicamentos() {
  const [medicamentos, setMedicamentos] = useState(medicamentosIniciais);
  const [busca, setBusca] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const router = useRouter();

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este medicamento?")) {
      setMedicamentos(medicamentos.filter((med) => med.id !== id));
    }
  };

  const handleEditar = (id) => {
    router.push(`/produtos/medicamentos/editar/${id}`);
  };

  // Filtrar medicamentos com base na busca e filtros
  const medicamentosFiltrados = medicamentos.filter(med => {
    const buscaMatch = 
      med.nome.toLowerCase().includes(busca.toLowerCase()) ||
      med.laboratorio.toLowerCase().includes(busca.toLowerCase());
    
    const tipoMatch = filtroTipo === "todos" || med.tipo.toLowerCase() === filtroTipo;
    
    return buscaMatch && tipoMatch;
  });

  return (
    <div className={styles.container}>
      {/* Sidebar Simplificada */}
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.logo}>💊 PharmaSys</h2>
        </div>

        <nav className={styles.sidebarNav}>
          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>Principal</h3>
            <Link href="/dashboard" className={styles.navLink}>
              <span className={styles.navIcon}>📊</span>
              <span>Dashboard</span>
            </Link>
            <Link href="/produtos/medicamentos" className={`${styles.navLink} ${styles.active}`}>
              <span className={styles.navIcon}>💊</span>
              <span>Medicamentos</span>
            </Link>
            <Link href="/vendas" className={styles.navLink}>
              <span className={styles.navIcon}>🛒</span>
              <span>Vendas</span>
            </Link>
          </div>

          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>Cadastros</h3>
            <Link href="/medicamentos/cadastro" className={styles.navLink}>
              <span className={styles.navIcon}>➕</span>
              <span>Novo Medicamento</span>
            </Link>
            <Link href="../../farmacias/cadastro/funcionario" className={styles.navLink}>
              <span className={styles.navIcon}>👥</span>
              <span>Novo Funcionário</span>
            </Link>
            <Link href="/laboratorios/cadastro" className={styles.navLink}>
              <span className={styles.navIcon}>🏭</span>
              <span>Novo Laboratório</span>
            </Link>
          </div>

          <div className={styles.navSection}>
            <h3 className={styles.navTitle}>Gestão</h3>
            <Link href="/estoque" className={styles.navLink}>
              <span className={styles.navIcon}>📦</span>
              <span>Estoque</span>
            </Link>
            <Link href="/fornecedores" className={styles.navLink}>
              <span className={styles.navIcon}>🚚</span>
              <span>Fornecedores</span>
            </Link>
            <Link href="/relatorios" className={styles.navLink}>
              <span className={styles.navIcon}>📈</span>
              <span>Relatórios</span>
            </Link>
          </div>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>AD</div>
            <div className={styles.userDetails}>
              <p className={styles.userName}>Administrador</p>
              <p className={styles.userRole}>Usuário Master</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.titulo}>Medicamentos Cadastrados</h1>
            <p className={styles.subtitulo}>Gerencie seu inventário de medicamentos</p>
          </div>
          
          <div className={styles.headerRight}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Buscar medicamentos..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className={styles.searchInput}
              />
              <span className={styles.searchIcon}>🔍</span>
            </div>
            
            <div className={styles.headerActions}>
              <button className={styles.notificationBtn}>
                <span className={styles.notificationIcon}>🔔</span>
                <span className={styles.notificationBadge}>3</span>
              </button>
              <div className={styles.userMenu}>
                <div className={styles.userAvatarSmall}>AD</div>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          {/* Cards de Estatísticas */}
          <div className={styles.statsCards}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>💊</div>
              <div className={styles.statInfo}>
                <h3>{medicamentos.length}</h3>
                <p>Medicamentos</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>📦</div>
              <div className={styles.statInfo}>
                <h3>{medicamentos.reduce((acc, med) => acc + med.quantidade, 0)}</h3>
                <p>Em Estoque</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>💰</div>
              <div className={styles.statInfo}>
                <h3>{currency.format(medicamentos.reduce((acc, med) => acc + (med.preco * med.quantidade), 0))}</h3>
                <p>Valor Total</p>
              </div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🏭</div>
              <div className={styles.statInfo}>
                <h3>8</h3>
                <p>Laboratórios</p>
              </div>
            </div>
          </div>

          {/* Barra de Ações */}
          <div className={styles.actionsBar}>
            <div className={styles.actionsLeft}>
              <h2 className={styles.sectionTitle}>Lista de Medicamentos</h2>
              <div className={styles.filters}>
                <select 
                  value={filtroTipo} 
                  onChange={(e) => setFiltroTipo(e.target.value)}
                  className={styles.filterSelect}
                >
                  <option value="todos">Todos os tipos</option>
                  <option value="genérico">Genéricos</option>
                  <option value="similar">Similares</option>
                  <option value="referência">Referência</option>
                </select>
              </div>
            </div>
            
            <div className={styles.actionsRight}>
              <Link href="/medicamentos/cadastro" className={styles.primaryButton}>
                <span className={styles.buttonIcon}>💊</span>
                Novo Medicamento
              </Link>
              
              <Link href="../../farmacias/cadastro/funcionario" className={styles.secondaryButton}>
                <span className={styles.buttonIcon}>👥</span>
                Novo Funcionário
              </Link>
              
              <Link href="/laboratorios/cadastro" className={styles.tertiaryButton}>
                <span className={styles.buttonIcon}>🏭</span>
                Novo Laboratório
              </Link>
            </div>
          </div>

          {/* Tabela de Medicamentos */}
          {medicamentosFiltrados.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>💊</div>
              <h3>Nenhum medicamento encontrado</h3>
              <p>{busca || filtroTipo !== "todos" ? "Tente ajustar os filtros de busca" : "Adicione seu primeiro medicamento"}</p>
              <Link href="/medicamentos/cadastro" className={styles.primaryButton}>
                Adicionar Medicamento
              </Link>
            </div>
          ) : (
            <div className={styles.tableContainer}>
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
                  {medicamentosFiltrados.map((med) => (
                    <tr key={med.id}>
                      <td>
                        <img
                          src={med.imagem || imagemPadrao}
                          alt={med.nome}
                          className={styles.medImage}
                        />
                      </td>
                      <td>
                        <div className={styles.medName}>{med.nome}</div>
                        {med.descricao && <div className={styles.medDescription}>{med.descricao}</div>}
                      </td>
                      <td>
                        <span className={styles.tag}>{med.dosagem}</span>
                      </td>
                      <td>
                        <div className={styles.quantity}>
                          <span className={styles.quantityNumber}>{med.quantidade}</span>
                          <span className={styles.unit}>un</span>
                        </div>
                      </td>
                      <td className={styles.price}>
                        {currency.format(Number(med.preco ?? 0))}
                      </td>
                      <td>
                        <span className={`${styles.tag} ${med.tipo.toLowerCase() === 'genérico' ? styles.generico : med.tipo.toLowerCase() === 'similar' ? styles.similar : styles.referencia}`}>
                          {med.tipo}
                        </span>
                      </td>
                      <td>{med.forma}</td>
                      <td>
                        <span className={styles.laboratorioTag}>{med.laboratorio}</span>
                      </td>
                      <td>
                        <div className={styles.actionButtons}>
                          <button
                            className={styles.editButton}
                            title="Editar"
                            onClick={() => handleEditar(med.id)}
                          >
                            ✏️
                          </button>
                          <button
                            className={styles.deleteButton}
                            title="Excluir"
                            onClick={() => handleExcluir(med.id)}
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Rodapé */}
          <div className={styles.footer}>
            <p>Exibindo <strong>{medicamentosFiltrados.length}</strong> de <strong>{medicamentos.length}</strong> medicamentos</p>
            <div className={styles.pagination}>
              <button className={styles.paginationButton}>← Anterior</button>
              <span className={styles.paginationInfo}>Página 1 de 1</span>
              <button className={styles.paginationButton}>Próxima →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListagemMedicamentos;