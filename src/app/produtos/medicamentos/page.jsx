import Link from 'next/link';

function Medicamentos() {
  return (
    <div>
      <h1>Lista de Medicamentos</h1>
      <p>Aqui você pode visualizar todos os medicamentos cadastrados.</p>
      <Link href="/medicamentos/cadastro">Cadastrar Novo Medicamento</Link>
      {/* Aqui você pode adicionar a lógica para listar os medicamentos cadastrados */}
    </div>
  );
}

export default Medicamentos;