'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MdFastfood, MdMenu } from 'react-icons/md';

import styles from './page.module.css';

function Cabecalho() {

  const [mobile, setMobile] = useState(false);

  const rota = usePathname();

  function ativaMenu() {
    if (mobile === false) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  return (
   <div>
    <h1>Bem vindo ao Sistema de Cadastro de Medicamentos</h1>
    <nav>
      <ul>
        <li>
          <Link href="/medicamentos/cadastro">Cadastrar Medicamento</Link>
        </li>
        <li>
          <Link href="/medicamentos">Listar Medicamentos</Link>
        </li>
      </ul>
    </nav>
   </div>
        
         
        

     
  )
}

export default Cabecalho;