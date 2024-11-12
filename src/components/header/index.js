// src/components/Header.js
import React from 'react';
import { HeaderContainer } from '../header/style';
import DropdownMenu from '../menuDropDown/index.js';

const Header = () => {
  const headerOptions = [
    {
      buttonTitle: 'Cadastro',
      menuList: [
        { value: 'Clientes', href: '/cadastro/clientes' },
        { value: 'Funcionários', href: '/cadastro/funcionarios' },
        { value: 'Produtos', href: '/cadastro/produtos' }
      ]
    },
    {
      buttonTitle: 'Finanças',
      menuList: [
        { value: 'Caixas e Bancos', href: '/financas/bancos' },
        { value: 'Contas a Pagar', href: '/financas/pagar' },
        { value: 'Contas a Receber', href: '/financas/receber' }
      ]
    },
    {
      buttonTitle: 'Suprimentos',
      menuList: [
        { value: 'Controle de Estoque', href: '/suprimentos/estoque' },
        { value: 'Notas de Entrada', href: '/suprimentos/notas' }
      ]
    },
    {
      buttonTitle: 'Vendas',
      menuList: [
        { value: 'Pedidos de Vendas', href: '/vendas/pedidosVendas' }
      ]
    },
  ];

  return (
    <HeaderContainer>
      {headerOptions.map((item, index) => (
        <DropdownMenu key={index} buttonTitle={item.buttonTitle} menuList={item.menuList} />
      ))}
    </HeaderContainer>
  );
};

export default Header;
