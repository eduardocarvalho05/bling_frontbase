import React, { useState } from 'react';
import Header from '../../../components/header/index';
import { useRouter } from 'next/router';
import { FakeApi } from '../../api/fakeApi/FakeApi';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {
    ContainerVendas,
    FormContainerVendas1,
    FormContainerVendas2,
    FormContainerVendas3,
    FormContainerVendas4,
    Title,
    Title2,
    StyledInput,
    ButtonContainer,
    StyledButton
} from '../../../styles/vendas/style.js';

const pedidosVendas = () => {
    const [formData, setFormData] = useState({
        cliente: '',
        vendedor: '',
        loja: '',
        unidade: '',
        listaDePreco: '',
        itens: '',
        quantidades: '',
        descontoVenda: '',
        prazoDeEntrega: '',
        despesas: '',
        desconto: '',
        totalDeComissões: '',
        descontoItens: '',
        PrazoDeEntrega: '',
        totalItens: '',
        outrasDespesas: '',
        totalVenda: '',
        codPagamento: '',
        categoria: '',
        nome: '',
        fretePorConta: '',
        quantidade: '',
        pesoBruto: '',
        frete: '',
        logistica: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData
            ({
                ...formData,
                [name]: value,
            })
    }

    return (
        <>
            <Header />
            <ContainerVendas>
                <Title>
                    Pedido de venda
                </Title>

                <Title2>
                    Dados do cliente
                </Title2>

                <FormContainerVendas1>
                    <StyledInput
                        name="cliente"
                        value={formData.cliente}
                        onChange={handleChange}
                        label="Cliente"
                        required
                    />
                    <StyledInput
                        name="vendedor"
                        value={formData.vendedor}
                        onChange={handleChange}
                        label="Vendedor"
                        required
                    />
                    <FormControl fullWidth>
                        <InputLabel id="loja">
                            Loja
                        </InputLabel>
                        <Select
                            labelId="loja"
                            id="loja"
                            name="loja"
                            value={formData.loja}
                            onChange={handleChange}
                            label="Loja"
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="loja">
                            Unidade de negócio
                        </InputLabel>
                        <Select
                            labelId="unidade"
                            id="unidade"
                            name="unidade"
                            value={formData.unidade}
                            onChange={handleChange}
                            label="Unidade de negócio"
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="listaDePreco">
                            Lista de preço
                        </InputLabel>
                        <Select
                            labelId="listaDePreco"
                            id="listaDePreco"
                            name="listaDePreco"
                            value={formData.listaDePreco}
                            onChange={handleChange}
                            label="Lista de preço"
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                    </FormControl>
                </FormContainerVendas1>
                <Title2>
                    Totais
                </Title2>
                <FormContainerVendas2>
                    <StyledInput
                        type="number"
                        name="itens"
                        value={formData.itens}
                        onChange={handleChange}
                        label="Nº de itens"
                        required
                    />

                    <StyledInput
                        type="number"
                        name="quantidades"
                        value={formData.quantidades}
                        onChange={handleChange}
                        label="Soma das quantidades"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="desconto"
                        value={formData.desconto}
                        onChange={handleChange}
                        label="Desconto"
                        required
                    />

                    <StyledInput
                        type="number"
                        name="prazoDeEntrega"
                        value={formData.prazoDeEntrega}
                        onChange={handleChange}
                        label="Prazo de entrega"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="outrasDespesas"
                        value={formData.outrasDespesas}
                        onChange={handleChange}
                        label="Outras despesas"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="descontoVenda"
                        value={formData.descontoVenda}
                        onChange={handleChange}
                        label="Desconto total de venda"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="totalDeComissões"
                        value={formData.totalDeComissões}
                        onChange={handleChange}
                        label="Total de comissões"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="descontoItens"
                        value={formData.descontoItens}
                        onChange={handleChange}
                        label="Desconto total dos itens"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="descontoItens"
                        value={formData.descontoItens}
                        onChange={handleChange}
                        label="Desconto total dos itens"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="totalItens"
                        value={formData.totalItens}
                        onChange={handleChange}
                        label="Total dos itens"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="totalDaVenda"
                        value={formData.totalVenda}
                        onChange={handleChange}
                        label="Total da venda"
                        required
                    />
                </FormContainerVendas2>
                <Title2>
                    Pagamento
                </Title2>
                <FormContainerVendas3>
                    <StyledInput
                        // type="number"
                        name="codPagamento"
                        value={formData.codPagamento}
                        onChange={handleChange}
                        label="Condição de pagamento"
                        required
                    />
                    <ButtonContainer>
                        <StyledButton type="submit" >
                            Gerar parcelas
                        </StyledButton>
                    </ButtonContainer>
                    <FormControl fullWidth>
                        <InputLabel id="formaDePagamento">
                            Categoria
                        </InputLabel>
                        <Select
                            labelId="categoria"
                            id="categoria"
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            label="Categoria"
                        >
                            <MenuItem value="Sem categoria">Sem categoria</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                        </Select>
                    </FormControl>
                </FormContainerVendas3>
                <Title2>
                    Transportador
                </Title2>

                <FormContainerVendas4>

                    <StyledInput
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        label="Nome"
                        required
                    />

                    <FormControl fullWidth>
                        <InputLabel id="fretePorConta">
                            Frete por conta
                        </InputLabel>
                        <Select
                            labelId="fretePorConta"
                            id="fretePorConta"
                            name="fretePorConta"
                            value={formData.fretePorConta}
                            onChange={handleChange}
                            label="Frete por conta"
                        >
                            <MenuItem value="Contratação do Frete por conta">
                                Contratação do Frete por conta
                            </MenuItem>
                            <MenuItem value="2">2</MenuItem>
                        </Select>
                    </FormControl>

                    <StyledInput
                        type="number"
                        name="quantidade"
                        value={formData.quantidade}
                        onChange={handleChange}
                        label="Quantidade"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="pesoBruto"
                        value={formData.pesoBruto}
                        onChange={handleChange}
                        label="Peso bruto"
                        required
                    />
                    <StyledInput
                        type="number"
                        name="frete"
                        value={formData.frete}
                        onChange={handleChange}
                        label="Frete"
                        required
                    />

                    <FormControl fullWidth>
                        <InputLabel id="fretePorConta">
                            Logística
                        </InputLabel>
                        <Select
                            labelId="logistica"
                            id="logistica"
                            name="logistica"
                            value={formData.logistica}
                            onChange={handleChange}
                            label="Logística"
                        >
                            <MenuItem value="Selecione a integração">
                                Selecione a integração
                            </MenuItem>
                            <MenuItem value="2">2</MenuItem>
                        </Select>
                    </FormControl>
                </FormContainerVendas4>
            </ContainerVendas>
        </>
    )
}

export default pedidosVendas