"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./funcionario.module.css";

export default function CadastroFuncionarioPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    cpf: "",
    dataNascimento: "",
    endereco: "",
    salario: "",
    dataAdmissao: "",
    turno: "",
    especialidade: ""
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
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button 
            className={styles.menuToggle}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <h1 className={styles.title}>👩‍⚕️ Cadastro de Funcionário</h1>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Buscar funcionários..." 
              className={styles.searchInput}
            />
            <span className={styles.searchIcon}>🔍</span>
          </div>
          <div className={styles.userMenu}>
            <span className={styles.userAvatar}>👤</span>
          </div>
        </div>
      </header>

      <div className={styles.contentWrapper}>
        {/* Sidebar Não Fixa */}
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarHeader}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>💊</span>
              <span className={styles.logoText}>PharmaX</span>
            </div>
            <button 
              className={styles.sidebarClose}
              onClick={() => setSidebarOpen(false)}
            >
              ×
            </button>
          </div>
          
          <nav className={styles.nav}>
            <div className={styles.navSection}>
              <p className={styles.navLabel}>Principal</p>
              <a href="/farmacia/favoritos" className={styles.navLink}>
                <span className={styles.navIcon}>⭐</span>
                <span className={styles.navText}>Favoritos</span>
              </a>
              <a href="/farmacias/produtos/medicamentos" className={styles.navLink}>
                <span className={styles.navIcon}>💊</span>
                <span className={styles.navText}>Medicamentos</span>
              </a>
            </div>
            
            <div className={styles.navSection}>
              <p className={styles.navLabel}>Gestão</p>
              <a href="/farmacias/cadastro/funcionario" className={`${styles.navLink} ${styles.active}`}>
                <span className={styles.navIcon}>👩‍⚕️</span>
                <span className={styles.navText}>Funcionários</span>
              </a>
              <a href="/laboratorio/lista" className={styles.navLink}>
                <span className={styles.navIcon}>🏭</span>
                <span className={styles.navText}>Laboratórios</span>
              </a>
            </div>
            
            <div className={styles.navSection}>
              <p className={styles.navLabel}>Sistema</p>
              <a href="/config" className={styles.navLink}>
                <span className={styles.navIcon}>⚙️</span>
                <span className={styles.navText}>Configurações</span>
              </a>
              <button className={styles.navLink}>
                <span className={styles.navIcon}>🚪</span>
                <span className={styles.navText}>Sair</span>
              </button>
            </div>
          </nav>
          
          <div className={styles.userPanel}>
            <div className={styles.userAvatar}>
              <span>👤</span>
            </div>
            <div className={styles.userInfo}>
              <p className={styles.userName}>Administrador</p>
              <p className={styles.userRole}>Supervisor</p>
            </div>
          </div>
        </aside>

        {/* Overlay para mobile */}
        {sidebarOpen && (
          <div 
            className={styles.overlay}
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Conteúdo Principal */}
        <main className={styles.mainContent}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Novo Funcionário</h2>
              <p>Preencha os dados do novo colaborador</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGrid}>
                {/* Informações Pessoais */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>👤</span>
                    Informações Pessoais
                  </h3>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Nome Completo *
                    </label>
                    <input
                      className={styles.modernInput}
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Digite o nome completo"
                      required
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.inputLabel}>
                        CPF *
                      </label>
                      <input
                        className={styles.modernInput}
                        type="text"
                        name="cpf"
                        value={form.cpf}
                        onChange={handleChange}
                        placeholder="000.000.000-00"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.inputLabel}>
                        Data de Nascimento
                      </label>
                      <input
                        className={styles.modernInput}
                        type="date"
                        name="dataNascimento"
                        value={form.dataNascimento}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      E-mail *
                    </label>
                    <input
                      className={styles.modernInput}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="funcionario@empresa.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Telefone
                    </label>
                    <input
                      className={styles.modernInput}
                      type="tel"
                      name="telefone"
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Endereço
                    </label>
                    <input
                      className={styles.modernInput}
                      type="text"
                      name="endereco"
                      value={form.endereco}
                      onChange={handleChange}
                      placeholder="Endereço completo"
                    />
                  </div>
                </div>

                {/* Informações Profissionais */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>💼</span>
                    Informações Profissionais
                  </h3>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Cargo *
                    </label>
                    <select
                      className={styles.modernInput}
                      name="cargo"
                      value={form.cargo}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione o cargo</option>
                      <option value="Farmacêutico">Farmacêutico</option>
                      <option value="Atendente">Atendente</option>
                      <option value="Gerente">Gerente</option>
                      <option value="Balconista">Balconista</option>
                      <option value="Entregador">Entregador</option>
                      <option value="Estoquista">Estoquista</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Especialidade
                    </label>
                    <input
                      className={styles.modernInput}
                      type="text"
                      name="especialidade"
                      value={form.especialidade}
                      onChange={handleChange}
                      placeholder="Especialização profissional"
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.inputLabel}>
                        Salário (R$)
                      </label>
                      <input
                        className={styles.modernInput}
                        type="number"
                        name="salario"
                        value={form.salario}
                        onChange={handleChange}
                        placeholder="0,00"
                        step="0.01"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.inputLabel}>
                        Data de Admissão
                      </label>
                      <input
                        className={styles.modernInput}
                        type="date"
                        name="dataAdmissao"
                        value={form.dataAdmissao}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Turno de Trabalho
                    </label>
                    <select
                      className={styles.modernInput}
                      name="turno"
                      value={form.turno}
                      onChange={handleChange}
                    >
                      <option value="">Selecione o turno</option>
                      <option value="Manhã">Manhã (08:00 - 12:00)</option>
                      <option value="Tarde">Tarde (13:00 - 17:00)</option>
                      <option value="Noite">Noite (18:00 - 22:00)</option>
                      <option value="Integral">Integral (08:00 - 18:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={styles.formActions}>
                <button 
                  type="button" 
                  className={styles.cancelButton}
                  onClick={() => router.back()}
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  className={styles.submitButton}
                >
                  <span className={styles.buttonIcon}>💾</span>
                  Cadastrar Funcionário
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}