import Image from 'next/image'; 
import Link from 'next/link';
import style from './page.module.css';

export default function PaginaInicial() {
  return (
    <div className={style.container}>
      {/* 
        SEÇÃO PRINCIPAL
        Área de destaque com mensagem principal e campo de busca
      */}
      <section className={style.principal}>
        <div className={style.conteudoPrincipal}>
          <h2>Sua saúde em primeiro lugar</h2>
          <p>Encontre os medicamentos que precisa com praticidade e confiança</p>
          <div className={style.caixaBusca}>
            <input type="text" placeholder="Buscar medicamentos..." />
            <button>Buscar</button>
          </div>
        </div>
      </section>

      {/* 
        SEÇÃO DE RECURSOS/DIFERENCIAIS
        Apresenta os principais benefícios de usar a plataforma
      */}
      <section className={style.recursos}>
        <h3>Por que escolher a Pharmax?</h3>
        <div className={style.gradeRecursos}>
          <div className={style.cartaoRecurso}>
            <div className={style.iconeRecurso}>🚚</div>
            <h4>Entrega Rápida</h4>
            <p>Entregamos em até 2 horas na sua região</p>
          </div>
          <div className={style.cartaoRecurso}>
            <div className={style.iconeRecurso}>💊</div>
            <h4>Medicamentos Originais</h4>
            <p>Garantia de produtos autênticos e de qualidade</p>
          </div>
          <div className={style.cartaoRecurso}>
            <div className={style.iconeRecurso}>💰</div>
            <h4>Preços Competitivos</h4>
            <p>Os melhores preços do mercado farmacêutico</p>
          </div>
        </div>
      </section>

      {/* 
        SEÇÃO DE PRODUTOS EM DESTAQUE
        Mostra alguns medicamentos principais para catálogo rápido
      */}
      <section className={style.produtos}>
        <h3>Medicamentos em Destaque</h3>
        <div className={style.gradeProdutos}>
          <div className={style.cartaoProduto}>
            <div className={style.containerImagemProduto}>
              <Image src={'/paracetamol.jpg'} width={200} height={200} alt='paracetamol' className={style.imagemProduto }/>
            </div>
            <h4>Paracetamol</h4>
            <p>Analgésico e antitérmico</p>
            <span className={style.preco}>R$ 12,90</span>
            <button>Adicionar ao Carrinho</button>
          </div>
          <div className={style.cartaoProduto}>
            <div className={style.containerImagemProduto}>
              <Image src={'/omeprazol.jpg'} width={200} height={200} alt='omeprazol' className={style.imagemProduto }/>
            </div>
            <h4>Omeprazol</h4>
            <p>Protetor gástrico</p>
            <span className={style.preco}>R$ 15,50</span>
            <button>Adicionar ao Carrinho</button>
          </div>
          <div className={style.cartaoProduto}>
            <div className={style.containerImagemProduto}>
              <Image src={'/dipirona.jpg'} width={200} height={200} alt='dipirona' className={style.imagemProduto }/>
            </div>
            <h4>Dipirona</h4>
            <p>Analgésico e antitérmico</p>
            <span className={style.preco}>R$ 8,90</span>
            <button>Adicionar ao Carrinho</button>
          </div>
        </div>
      </section>
      </div>
  );
}
