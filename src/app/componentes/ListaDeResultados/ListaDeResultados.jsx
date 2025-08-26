// components/ListaDeResultados.jsx
import CardResultado from './CardResultado';
import styles from './ListaDeResultados.module.css';

export default function ListaDeResultados({ resultados }) {
  return (
    <div className={styles.resultsList}>
      {resultados.map((remedio) => {
        const menorPreco = Math.min(...remedio.farmacias.map((f) => f.preco));
        return (
          <CardResultado
            key={remedio.id}
            remedio={remedio}
            menorPreco={menorPreco}
          />
        );
      })}
    </div>
  );
}
