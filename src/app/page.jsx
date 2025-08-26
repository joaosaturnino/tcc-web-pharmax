import Image from 'next/image'; 
// Importa o componente Link do Next.js para navegação entre páginas
// O Link é superior às âncoras tradicionais pois faz pré-carregamento das páginas
import Link from 'next/link';
import styles from './page.module.css';

// Importa os estilos CSS modulares específicos para esta página
// Os estilos são escopados apenas para este componente
import estilos from './page.module.css';

// Componente principal da página Home
// Exportado como default para ser o componente principal da rota /home
export default function PaginaInicial() {
  return (
    // Container principal da página - usa a classe CSS do módulo
    <div className={estilos.container}>
      
    
    
      {/* 
        SEÇÃO PRINCIPAL
        Área de destaque com mensagem principal e campo de busca
      */}
      <section className={estilos.principal}>
        {/* Container do conteúdo principal para centralização e limitação de largura */}
        <div className={estilos.conteudoPrincipal}>
          {/* Título principal da página - mensagem de impacto */}
          <h2>Sua saúde em primeiro lugar</h2>
          
          {/* Subtítulo ou descrição complementar */}
          <p>Encontre os medicamentos que precisa com praticidade e confiança</p>
          
          {/* 
            CAIXA DE BUSCA
            Campo de entrada e botão para pesquisar medicamentos
          */}
          <div className={estilos.caixaBusca}>
            {/* 
              Campo de texto para inserir o termo de busca
              Placeholder dá uma dica do que pode ser pesquisado
            */}
            <input type="text" placeholder="Buscar medicamentos..." />
            
            {/* Botão para acionar a busca */}
            <button>Buscar</button>
          </div>
        </div>
      </section>

      {/* 
        SEÇÃO DE RECURSOS/DIFERENCIAIS
        Apresenta os principais benefícios de usar a plataforma
      */}
      <section className={estilos.recursos}>
        {/* Título da seção */}
        <h3>Por que escolher a Pharmax?</h3>
        
        {/* 
          Grid responsivo com os cards de recursos
          Usa CSS Grid para layout adaptável
        */}
        <div className={estilos.gradeRecursos}>
          {/* 
            CARD DE RECURSO 1 - Entrega Rápida
            Cada card contém um ícone, título e descrição
          */}
          <div className={estilos.cartaoRecurso}>
            {/* Ícone representativo (usando emoji) - poderia ser substituído por SVG */}
            <div className={estilos.iconeRecurso}>🚚</div>
            
            {/* Título do recurso */}
            <h4>Entrega Rápida</h4>
            
            {/* Descrição detalhada do recurso */}
            <p>Entregamos em até 2 horas na sua região</p>
          </div>
          
          {/* CARD DE RECURSO 2 - Medicamentos Originais */}
          <div className={estilos.cartaoRecurso}>
            <div className={estilos.iconeRecurso}>💊</div>
            <h4>Medicamentos Originais</h4>
            <p>Garantia de produtos autênticos e de qualidade</p>
          </div>
          
          {/* CARD DE RECURSO 3 - Preços Competitivos */}
          <div className={estilos.cartaoRecurso}>
            <div className={estilos.iconeRecurso}>💰</div>
            <h4>Preços Competitivos</h4>
            <p>Os melhores preços do mercado farmacêutico</p>
          </div>
        </div>
      </section>

      {/* 
        SEÇÃO DE PRODUTOS EM DESTAQUE
        Mostra alguns medicamentos principais para catálogo rápido
      */}
      <section className={estilos.produtos}>
        {/* Título da seção */}
        <h3>Medicamentos em Destaque</h3>
        
        {/* 
          Grid responsivo com os cards de produtos
          Layout similar ao de recursos mas com foco em produtos
        */}
        <div className={estilos.gradeProdutos}>
          {/* 
            CARD DE PRODUTO 1 - Paracetamol
            Cada card contém imagem, nome, descrição, preço e botão de ação
          */}
          <div className={estilos.cartaoProduto}>
            {/* 
              Container para imagem do produto
              Atualmente vazio - seria preenchido dinamicamente
            */}
            <div className={estilos.containerImagemProduto}>
              <Image src={'/paracetamol.jpg'} width={200} height={200} alt='paracetamol' className={estilos.imagemProduto }/>
            </div>
            
            {/* Nome do medicamento */}
            <h4>Paracetamol</h4>
            
            {/* Descrição ou tipo do medicamento */}
            <p>Analgésico e antitérmico</p>
            
            {/* Preço do produto - destacado visualmente */}
            <span className={estilos.preco}>R$ 12,90</span>
            
            {/* Botão para adicionar ao carrinho de compras */}
            <button>Adicionar ao Carrinho</button>
          </div>
          
          {/* CARD DE PRODUTO 2 - Omeprazol */}
          <div className={estilos.cartaoProduto}>
            <div className={estilos.containerImagemProduto}><Image src={'/omeprazol.jpg'} width={200} height={200} alt='omeprazol' className={estilos.imagemProduto }/>
            </div>
            <h4>Omeprazol</h4>
            <p>Protetor gástrico</p>
            <span className={estilos.preco}>R$ 15,50</span>
            <button>Adicionar ao Carrinho</button>
          </div>
          
          {/* CARD DE PRODUTO 3 - Dipirona */}
          <div className={estilos.cartaoProduto}>
            <div className={estilos.containerImagemProduto}><Image src={'/dipirona.jpg'} width={200} height={200} alt='dipirona' className={estilos.imagemProduto }/></div>
            <h4>Dipirona</h4>
            <p>Analgésico e antitérmico</p>
            <span className={estilos.preco}>R$ 8,90</span>
            <button>Adicionar ao Carrinho</button>
          </div>
        </div>
      </section>

     
    </div>
  );
}