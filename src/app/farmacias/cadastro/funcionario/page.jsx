"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./funcionario.module.css";

export default function CadastroFuncionarioPage() {
  const router = useRouter();
<<<<<<< HEAD
=======
  const [sidebarOpen, setSidebarOpen] = useState(false);
>>>>>>> b8bb1be887749ecadb992fbb5e35deec18eb1910

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
<<<<<<< HEAD
    cargo: "",
    tipoAcesso: "basico", // Novo campo: tipo de acesso
    login: "", // Novo campo: login de acesso
    senha: "", // Novo campo: senha inicial
=======
    cpf: "",
    dataNascimento: "",
    endereco: "",
    usuario: "",
    senha: "",
    nivelAcesso: "",
>>>>>>> b8bb1be887749ecadb992fbb5e35deec18eb1910
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Definição dos níveis de acesso
  const niveisAcesso = [
    { value: "basico", label: "Básico", descricao: "Acesso apenas ao sistema de vendas" },
    { value: "intermediario", label: "Intermediário", descricao: "Acesso ao sistema de vendas e gestão de estoque" },
    { value: "avancado", label: "Avançado", descricao: "Acesso completo, exceto configurações do sistema" },
    { value: "administrador", label: "Administrador", descricao: "Acesso total ao sistema" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

<<<<<<< HEAD
  const validateForm = () => {
    const newErrors = {};
    
    if (!form.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!form.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "E-mail inválido";
    }
    if (!form.telefone.trim()) newErrors.telefone = "Telefone é obrigatório";
    if (!form.cargo.trim()) newErrors.cargo = "Cargo é obrigatório";
    if (!form.login.trim()) newErrors.login = "Login de acesso é obrigatório";
    if (!form.senha.trim()) {
      newErrors.senha = "Senha é obrigatória";
    } else if (form.senha.length < 6) {
      newErrors.senha = "Senha deve ter pelo menos 6 caracteres";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateRandomPassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let password = "";
    for (let i = 0; i < 10; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setForm({ ...form, senha: password });
    
    // Limpar erro de senha se existir
    if (errors.senha) {
      setErrors({ ...errors, senha: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simular uma requisição assíncrona
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Dados enviados:", form);
      
      // Mensagem personalizada com base no nível de acesso
      const nivelSelecionado = niveisAcesso.find(nivel => nivel.value === form.tipoAcesso);
      alert(`Funcionário cadastrado com sucesso!\nNível de acesso: ${nivelSelecionado.label}`);
      
      // Redireciona para a página de listagem
      router.push("/produtos/medicamentos");
    } catch (error) {
      console.error("Erro ao cadastrar funcionário:", error);
      alert("Erro ao cadastrar funcionário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.containerModerno}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Cadastro de Funcionário</h1>
          <p className={styles.subtitle}>Preencha os dados do novo funcionário e defina seu nível de acesso</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Dados Pessoais</h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="nome" className={styles.label}>
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite o nome completo"
                value={form.nome}
                onChange={handleChange}
                className={`${styles.input} ${errors.nome ? styles.inputError : ''}`}
              />
              {errors.nome && <span className={styles.errorMessage}>{errors.nome}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemplo@farmacia.com"
                value={form.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="telefone" className={styles.label}>
                Telefone *
              </label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                placeholder="(11) 99999-9999"
                value={form.telefone}
                onChange={handleChange}
                className={`${styles.input} ${errors.telefone ? styles.inputError : ''}`}
              />
              {errors.telefone && <span className={styles.errorMessage}>{errors.telefone}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cargo" className={styles.label}>
                Cargo *
              </label>
              <select
                id="cargo"
                name="cargo"
                value={form.cargo}
                onChange={handleChange}
                className={`${styles.select} ${errors.cargo ? styles.inputError : ''}`}
              >
                <option value="">Selecione um cargo</option>
                <option value="Farmacêutico">Farmacêutico</option>
                <option value="Atendente">Atendente</option>
                <option value="Caixa">Caixa</option>
                <option value="Gerente">Gerente</option>
                <option value="Entregador">Entregador</option>
                <option value="Outro">Outro</option>
              </select>
              {errors.cargo && <span className={styles.errorMessage}>{errors.cargo}</span>}
            </div>
          </div>

          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Acesso ao Sistema</h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="login" className={styles.label}>
                Login de Acesso *
              </label>
              <input
                type="text"
                id="login"
                name="login"
                placeholder="Digite o login para acesso"
                value={form.login}
                onChange={handleChange}
                className={`${styles.input} ${errors.login ? styles.inputError : ''}`}
              />
              {errors.login && <span className={styles.errorMessage}>{errors.login}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="senha" className={styles.label}>
                Senha Inicial *
              </label>
              <div className={styles.passwordContainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="senha"
                  name="senha"
                  placeholder="Digite a senha inicial"
                  value={form.senha}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.senha ? styles.inputError : ''}`}
                />
                <button 
                  type="button" 
                  className={styles.togglePassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
                <button 
                  type="button" 
                  className={styles.generatePassword}
                  onClick={generateRandomPassword}
                  title="Gerar senha aleatória"
                >
                  🔄
                </button>
              </div>
              {errors.senha && <span className={styles.errorMessage}>{errors.senha}</span>}
              <div className={styles.passwordHint}>
                A senha deve ter pelo menos 6 caracteres
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tipoAcesso" className={styles.label}>
                Nível de Acesso *
              </label>
              <select
                id="tipoAcesso"
                name="tipoAcesso"
                value={form.tipoAcesso}
                onChange={handleChange}
                className={styles.select}
              >
                {niveisAcesso.map((nivel) => (
                  <option key={nivel.value} value={nivel.value}>
                    {nivel.label}
                  </option>
                ))}
              </select>
              
              <div className={styles.accessDescription}>
                <strong>
                  {niveisAcesso.find(n => n.value === form.tipoAcesso)?.label}:
                </strong> 
                {" " + niveisAcesso.find(n => n.value === form.tipoAcesso)?.descricao}
              </div>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button 
              type="button" 
              onClick={() => router.back()}
              className={styles.cancelButton}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Cadastrando...
                </>
              ) : (
                <>
                  <span className={styles.icon}>✓</span>
                  Cadastrar Funcionário
                </>
              )}
            </button>
          </div>
        </form>
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
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

                {/* Informações de Acesso */}
                <div className={styles.formSection}>
                  <h3 className={styles.sectionTitle}>
                    <span className={styles.sectionIcon}>🔐</span>
                    Acesso ao Sistema
                  </h3>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Nome de Usuário *
                    </label>
                    <input
                      className={styles.modernInput}
                      type="text"
                      name="usuario"
                      value={form.usuario}
                      onChange={handleChange}
                      placeholder="Digite o nome de usuário"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Senha *
                    </label>
                    <input
                      className={styles.modernInput}
                      type="password"
                      name="senha"
                      value={form.senha}
                      onChange={handleChange}
                      placeholder="Digite a senha"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Nível de Acesso *
                    </label>
                    <select
                      className={styles.modernInput}
                      name="nivelAcesso"
                      value={form.nivelAcesso}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione o nível de acesso</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Gerente">Gerente</option>
                      <option value="Supervisor">Supervisor</option>
                      <option value="Funcionário">Funcionário</option>
                      <option value="Visitante">Visitante (Somente leitura)</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>
                      Permissões Especiais
                    </label>
                    <div className={styles.checkboxGroup}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="acessoRelatorios" />
                        <span className={styles.checkboxText}>Acesso a relatórios</span>
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="acessoEstoque" />
                        <span className={styles.checkboxText}>Gerenciar estoque</span>
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="acessoFinanceiro" />
                        <span className={styles.checkboxText}>Acesso financeiro</span>
                      </label>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" name="acessoConfiguracoes" />
                        <span className={styles.checkboxText}>Configurações do sistema</span>
                      </label>
                    </div>
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
>>>>>>> b8bb1be887749ecadb992fbb5e35deec18eb1910
      </div>
    </div>
  );
}