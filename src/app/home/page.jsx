// Importa o componente Link do Next.js para navegação entre páginas
// O Link é superior às âncoras tradicionais pois faz pré-carregamento das páginas
import Link from 'next/link';

// Importa os estilos CSS modulares específicos para esta página
// Os estilos são escopados apenas para este componente
import styles from './page.module.css';

// Componente principal da página Home
// Exportado como default para ser o componente principal da rota /home
export default function Home() {
  return (
    // Container principal da página - usa a classe CSS do módulo
    <div className={styles.container}>
      
      {/* 
        CABEÇALHO DA PÁGINA 
        Contém o logo e o menu de navegação
      */}
      <header className={styles.header}>
        {/* Container do logo da empresa */}
        <div className={styles.logo}>
          {/* Nome da empresa - pode ser substituído por uma imagem */}
          <h1>Pharmax</h1>
        </div>
        
        {/* Menu de navegação principal */}
        <nav className={styles.nav}>
          {/* 
            Link para a página inicial - com classe especial para indicar página atual 
            O href aponta para a rota /home
          */}
          <Link href="/home" className={styles.active}>Home</Link>
          
          {/* Link para a página Sobre */}
          <Link href="/sobre">Sobre</Link>
          
          {/* Link para a página de Contato */}
          <Link href="/contato">Contato</Link>
          
          {/* 
            Link para a área do usuário - com estilo diferenciado de botão
            Provavelmente leva para login/cadastro ou área logada
          */}
          <Link href="/usuario" className={styles.userBtn}>Minha Conta</Link>
        </nav>
      </header>

      {/* 
        SEÇÃO HERÓI (PRINCIPAL)
        Área de destaque com mensagem principal e campo de busca
      */}
      <section className={styles.hero}>
        {/* Container do conteúdo herói para centralização e limitação de largura */}
        <div className={styles.heroContent}>
          {/* Título principal da página - mensagem de impacto */}
          <h2>Sua saúde em primeiro lugar</h2>
          
          {/* Subtítulo ou descrição complementar */}
          <p>Encontre os medicamentos que precisa com praticidade e confiança</p>
          
          {/* 
            CAIXA DE BUSCA
            Campo de entrada e botão para pesquisar medicamentos
          */}
          <div className={styles.searchBox}>
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
      <section className={styles.features}>
        {/* Título da seção */}
        <h3>Por que escolher a Pharmax?</h3>
        
        {/* 
          Grid responsivo com os cards de recursos
          Usa CSS Grid para layout adaptável
        */}
        <div className={styles.featureGrid}>
          {/* 
            CARD DE RECURSO 1 - Entrega Rápida
            Cada card contém um ícone, título e descrição
          */}
          <div className={styles.featureCard}>
            {/* Ícone representativo (usando emoji) - poderia ser substituído por SVG */}
            <div className={styles.featureIcon}>🚚</div>
            
            {/* Título do recurso */}
            <h4>Entrega Rápida</h4>
            
            {/* Descrição detalhada do recurso */}
            <p>Entregamos em até 2 horas na sua região</p>
          </div>
          
          {/* CARD DE RECURSO 2 - Medicamentos Originais */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💊</div>
            <h4>Medicamentos Originais</h4>
            <p>Garantia de produtos autênticos e de qualidade</p>
          </div>
          
          {/* CARD DE RECURSO 3 - Preços Competitivos */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💰</div>
            <h4>Preços Competitivos</h4>
            <p>Os melhores preços do mercado farmacêutico</p>
          </div>
        </div>
      </section>

      {/* 
        SEÇÃO DE PRODUTOS EM DESTAQUE
        Mostra alguns medicamentos principais para catálogo rápido
      */}
      <section className={styles.products}>
        {/* Título da seção */}
        <h3>Medicamentos em Destaque</h3>
        
        {/* 
          Grid responsivo com os cards de produtos
          Layout similar ao de recursos mas com foco em produtos
        */}
        <div className={styles.productGrid}>
          {/* 
            CARD DE PRODUTO 1 - Paracetamol
            Cada card contém imagem, nome, descrição, preço e botão de ação
          */}
          <div className={styles.productCard}>
            {/* 
              Container para imagem do produto
              Atualmente vazio - seria preenchido dinamicamente
            */}
            <div className={styles.productImage}></div>
            
            {/* Nome do medicamento */}
            <h4>Paracetamol</h4>
            
            {/* Descrição ou tipo do medicamento */}
            <p>Analgésico e antitérmico</p>
            
            {/* Preço do produto - destacado visualmente */}
            <span className={styles.price}>R$ 12,90</span>
            
            {/* Botão para adicionar ao carrinho de compras */}
            <button>Adicionar ao Carrinho</button>
          </div>
          
          {/* CARD DE PRODUTO 2 - Omeprazol */}
          <div className={styles.productCard}>
            <div className={styles.productImage}></div>
            <h4>Omeprazol</h4>
            <p>Protetor gástrico</p>
            <span className={styles.price}>R$ 15,50</span>
            <button>Adicionar ao Carrinho</button>
          </div>
          
          {/* CARD DE PRODUTO 3 - Dipirona */}
          <div className={styles.productCard}>
            <div className={styles.productImage}></div>
            <h4>Dipirona</h4>
            <p>Analgésico e antitérmico</p>
            <span className={styles.price}>R$ 8,90</span>
            <button>Adicionar ao Carrinho</button>
          </div>
        </div>
      </section>

      {/* 
        RODAPÉ DA PÁGINA
        Contém informações de contato, links úteis e copyright
      */}
      <footer className={styles.footer}>
        {/* 
          Conteúdo principal do rodapé organizado em colunas
          Usa CSS Grid para layout responsivo
        */}
        <div className={styles.footerContent}>
          {/* 
            SEÇÃO 1: Identidade da marca
            Nome da empresa e slogan/tagline
          */}
          <div className={styles.footerSection}>
            <h4>Pharmax</h4>
            <p>Sua farmácia digital de confiança</p>
          </div>
          
          {/* 
            SEÇÃO 2: Links de navegação rápida
            Links importantes para acesso rápido
          */}
          <div className={styles.footerSection}>
            <h4>Links Rápidos</h4>
            {/* Usa componente Link para as mesmas rotas do header */}
            <Link href="/home">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
          </div>
          
          {/* 
            SEÇÃO 3: Informações de contato
            E-mail e telefone para contato com a empresa
          */}
          <div className={styles.footerSection}>
            <h4>Contato</h4>
            {/* E-mail de contato - poderia ser um link mailto: */}
            <p>contato@pharmax.com</p>
            
            {/* Telefone de contato - poderia ser um link tel: */}
            <p>(11) 99999-9999</p>
          </div>
        </div>
        
        {/* 
          ÁREA INFERIOR DO RODAPÉ
          Direitos autorais e informações legais
        */}
        <div className={styles.footerBottom}>
          {/* Texto de copyright com ano dinâmico (seria 2024 atualmente) */}
          <p>&copy; 2024 Pharmax - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}