"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./funcionario.module.css";

export default function CadastroFuncionarioPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    tipoAcesso: "basico", // Novo campo: tipo de acesso
    login: "", // Novo campo: login de acesso
    senha: "", // Novo campo: senha inicial
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
      </div>
    </div>
  );
}