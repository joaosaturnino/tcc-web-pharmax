// src/app/componentes/CardResultado/index.jsx

"use client"; // <--- ADICIONE ESTA LINHA NO TOPO DO ARQUIVO

import Image from 'next/image';
import styles from './index.module.css';

// Agora este é um Client Component e pode usar event handlers como onClick.
export default function CardResultado({ nome, principioAtivo, imagemUrl, menorPreco }) {
  return (
    <div className={styles.card}>
      <Image
        src={imagemUrl}
        alt={`Imagem do remédio ${nome}`}
        width={100}
        height={100}
        className={styles.image}
      />
      <div className={styles.info}>
        <h2 className={styles.nome}>{nome}</h2>
        <p className={styles.principioAtivo}>{principioAtivo}</p>
        <div className={styles.precoContainer}>
          <span className={styles.precoLabel}>a partir de</span>
          <p className={styles.precoValor}>
            {menorPreco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
      </div>
      {/* Este onClick agora é permitido, pois o componente é 'use client' */}
      <a href="#" className={styles.verOfertasBtn} onClick={(e) => e.preventDefault()}>
        Ver Ofertas
      </a>
    </div>
  );
}
