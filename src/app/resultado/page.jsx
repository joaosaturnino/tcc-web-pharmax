// src/app/resultado/page.jsx

import CardResultado from '@/app/componentes/CardResultado';
import styles from './page.module.css';

// Dados de exemplo atualizados para usar a imagem local
const resultadosDeExemplo = [
  {
    id: '1',
    nome: 'Paracetamol 750mg - 20 Comprimidos',
    principioAtivo: 'Paracetamol',
    // ATUALIZAÇÃO AQUI: Caminho para a imagem local
    imagemUrl: '/temp/arvore.jpg', 
    menorPreco: 17.99,
  },
  {
    id: '2',
    nome: 'Dipirona 500mg/ml - Gotas 20ml',
    principioAtivo: 'Dipirona Monoidratada',
    // ATUALIZAÇÃO AQUI: Caminho para a imagem local
    imagemUrl: '/temp/arvore.jpg',
    menorPreco: 8.75,
  },
  {
    id: '3',
    nome: 'Ibuprofeno 400mg - 10 Cápsulas',
    principioAtivo: 'Ibuprofeno',
    // ATUALIZAÇÃO AQUI: Caminho para a imagem local
    imagemUrl: '/temp/arvore.jpg',
    menorPreco: 11.50,
  },
];

// O resto do componente permanece o mesmo
export default function PaginaDeResultados() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Resultados para: <span className={styles.searchTerm}>Paracetamol</span>
        </h1>
      </header>
      <div className={styles.lista}>
        {resultadosDeExemplo.map((remedio) => (
          <CardResultado
            key={remedio.id}
            nome={remedio.nome}
            principioAtivo={remedio.principioAtivo}
            imagemUrl={remedio.imagemUrl}
            menorPreco={remedio.menorPreco}
          />
        ))}
      </div>
    </main>
  );
}
