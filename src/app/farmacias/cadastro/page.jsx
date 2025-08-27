'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './farmacia.module.css';

export default function CadastroFarmacia() {
  const router = useRouter();

  const [farmacia, setFarmacia] = useState({
    nome: '',
    cnpj: '',
    endereco: '',
    telefone: '',
    email: '',
    senha: '',
    logo: null, // vai guardar o File
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmacia({ ...farmacia, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFarmacia({ ...farmacia, logo: file });
      setPreview(URL.createObjectURL(file)); // gera preview temporário
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Se for enviar para backend: usar FormData
    const formData = new FormData();
    formData.append('nome', farmacia.nome);
    formData.append('cnpj', farmacia.cnpj);
    formData.append('endereco', farmacia.endereco);
    formData.append('telefone', farmacia.telefone);
    formData.append('email', farmacia.email);
    formData.append('senha', farmacia.senha);
    if (farmacia.logo) formData.append('logo', farmacia.logo);

    alert('Farmácia cadastrada com sucesso!');
    // Aqui você pode fazer fetch POST para API: fetch('/api/farmacias', { method: 'POST', body: formData })
    router.push('/farmacias'); // volta para listagem
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Cadastro de Farmácia</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="nome">Nome da Farmácia:</label>
          <input
            className={styles.input}
            type="text"
            id="nome"
            name="nome"
            value={farmacia.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="cnpj">CNPJ:</label>
          <input
            className={styles.input}
            type="text"
            id="cnpj"
            name="cnpj"
            value={farmacia.cnpj}
            onChange={handleChange}
            placeholder="00.000.000/0000-00"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="endereco">Endereço:</label>
          <input
            className={styles.input}
            type="text"
            id="endereco"
            name="endereco"
            value={farmacia.endereco}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="telefone">Telefone:</label>
          <input
            className={styles.input}
            type="tel"
            id="telefone"
            name="telefone"
            value={farmacia.telefone}
            onChange={handleChange}
            placeholder="(00) 0000-0000"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">E-mail:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={farmacia.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* 🔑 Campo de Senha */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="senha">Senha de Acesso:</label>
          <input
            className={styles.input}
            type="password"
            id="senha"
            name="senha"
            value={farmacia.senha}
            onChange={handleChange}
            required
          />
        </div>

        {/* 🖼️ Campo de Logo (arquivo) */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="logo">Logo:</label>
          <input
            className={styles.input}
            type="file"
            id="logo"
            name="logo"
            accept="image/*"
            onChange={handleFileChange}
          />
          {preview && (
            <img
              src={preview}
              alt="Pré-visualização da logo"
              className={styles.logoPreview}
            />
          )}
        </div>

        <button type="submit" className={styles.botao}>
          Salvar Farmácia
        </button>
      </form>
    </div>
  );
}
