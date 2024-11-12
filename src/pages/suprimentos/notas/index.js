import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../../components/header/index';
import { useRouter } from 'next/router';
import { FakeApi } from '../../api/fakeApi/FakeApi';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {
    ContainerNotaFiscal,
    FormContainerNotaFiscal1,
    FormContainerNotaFiscal2,
    FormContainerNotaFiscal3,
    FormContainerNotaFiscal4,
    FormContainerNotaFiscal5,
    Title,
    Title2,
    StyledInput,
    ButtonContainer,
    StyledButton
} from '../../../styles/suprimentos/notasDeEntrada/style.js';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const notasDeEntrada = () => {
    const [autoCalculate, setAutoCalculate] = useState(false);
    const [formData, setFormData] = useState({
        tipoDeEntrada: '',
        serie: '',
        numero: '',
        loja: '',
        unidadeDeNegocio: '',
        codigoTributario: '',
        finalidade: '',
        indicadorDePresenca: '',
        nomeContato: '',
        tipoDePessoa: '',
        cnpj: '',
        cep: '',
        uf: '',
        municipio: '',
        bairro: '',
        endereco: '',
        numero: '',
        complemento: '',
        fone: '',
        email: '',
        totalProdutos: '',
        valorFrete: '',
        valorSeguro: '',
        outrasDespesas: '',
        desconto: '',
        totalNota: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sum = () => {
        const { totalProdutos, valorFrete, valorSeguro, outrasDespesas, desconto } = formData;

        const total =
            (parseFloat(totalProdutos) || 0) +
            (parseFloat(valorFrete) || 0) +
            (parseFloat(valorSeguro) || 0) +
            (parseFloat(outrasDespesas) || 0) -
            (parseFloat(desconto) || 0);

        return total.toFixed(2); 
    };

    
    useEffect(() => {
        if (autoCalculate) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                totalNota: sum(), 
            }));
        }
    }, [formData.totalProdutos, formData.valorFrete, formData.valorSeguro, formData.outrasDespesas, formData.desconto, autoCalculate]);

    const handleAutoCalculateChange = (event) => {
        setAutoCalculate(event.target.checked); 
    };

    return (
        <>
            <Header />
            <ContainerNotaFiscal>
                <Title>
                    Notas Fiscais de Entrada
                </Title>

                <Title2>
                    Nota fiscal
                </Title2>

                <FormContainerNotaFiscal1>
                    <FormControl fullWidth>
                        <InputLabel id="tipoDeEntrada">
                            Tipo de Entrada
                        </InputLabel>
                        <Select
                            labelId="tipoDeEntrada"
                            id="tipoDeEntrada"
                            name="tipoDeEntrada"
                            value={formData.tipoDeEntrada}
                            onChange={handleChange}
                            label="Tipo de Entrada"
                        >
                            <MenuItem value="Emitida por Terceiros">
                                Emitida por Terceiros
                            </MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                    </FormControl>
                    <StyledInput
                        name="serie"
                        value={formData.serie}
                        onChange={handleChange}
                        label="Série"
                        required
                    />
                    <StyledInput
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                        label="Número"
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
                            <MenuItem value="Todas as lojas">
                                Todas as lojas
                            </MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="unidadeDeNegocio">
                            Unidade de negócio
                        </InputLabel>
                        <Select
                            labelId="unidadeDeNegocio"
                            id="unidadeDeNegocio"
                            name="unidadeDeNegocio"
                            value={formData.unidadeDeNegocio}
                            onChange={handleChange}
                            label="Unidade de negócio"
                        >
                            <MenuItem value="Nenhuma unidade">
                                Nenhuma unidade
                            </MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                    </FormControl>
                </FormContainerNotaFiscal1>

                <FormContainerNotaFiscal2>

                    <FormControl fullWidth>
                        <InputLabel id="codigoTributario">
                            Código do regime tributário
                        </InputLabel>
                        <Select
                            labelId="codigoTributario"
                            id="codigoTributario"
                            name="codigoTributario"
                            value={formData.codigoTributario}
                            onChange={handleChange}
                            label="Código do regime tributário"
                        >
                            <MenuItem value="Simples nacional">
                                Simples nacional
                            </MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="finalidade">
                            Finalidade
                        </InputLabel>
                        <Select
                            labelId="finalidade"
                            id="finalidade"
                            name="finalidade"
                            value={formData.finalidade}
                            onChange={handleChange}
                            label="Finalidade"
                        >
                            <MenuItem value="NF-e normal">
                                NF-e normal
                            </MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="indicadorDePresenca">
                            Indicador de presença
                        </InputLabel>
                        <Select
                            labelId="indicadorDePresenca"
                            id="indicadorDePresenca"
                            name="indicadorDePresenca"
                            value={formData.indicadorDePresenca}
                            onChange={handleChange}
                            label="Indicador de presença"
                        >
                            <MenuItem value="Não se ">
                                Emitida por Terceiros
                            </MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </Select>
                    </FormControl>

                </FormContainerNotaFiscal2>

                <Title2>Remetente</Title2>

                <FormContainerNotaFiscal3>

                    <StyledInput
                        name="nomeContato"
                        value={formData.nomeContato}
                        onChange={handleChange}
                        label="Nome para contato"
                        required
                    />

                    <FormControl fullWidth>
                        <InputLabel id="tipoDePessoa">
                            Tipo de pessoa
                        </InputLabel>
                        <Select
                            labelId="tipoDePessoa"
                            id="tipoDePessoa"
                            name="tipoDePessoa"
                            value={formData.tipoDePessoa}
                            onChange={handleChange}
                            label="Tipo de pessoa"
                        >
                            <MenuItem value=" Jurídica">
                                Jurídica
                            </MenuItem>
                            <MenuItem value="Física">
                                Física
                            </MenuItem>
                        </Select>
                    </FormControl>

                    <StyledInput
                        name="cnpj"
                        value={formData.cnpj}
                        onChange={handleChange}
                        label="CNPJ"
                        required
                    />
                </FormContainerNotaFiscal3>

                <FormContainerNotaFiscal4>

                    <StyledInput
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        label="CEP"
                        required
                    />

                    <StyledInput
                        name="uf"
                        value={formData.uf}
                        onChange={handleChange}
                        label="UF"
                        required
                    />

                    <StyledInput
                        name="Municipio"
                        value={formData.municipio}
                        onChange={handleChange}
                        label="Municipio"
                        required
                    />

                    <StyledInput
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        label="Bairro"
                        required
                    />

                    <StyledInput
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                        label="Endereço"
                        required
                    />

                    <StyledInput
                        name="numero"
                        value={formData.numero}
                        onChange={handleChange}
                        label="Número"
                        required
                    />

                    <StyledInput
                        name="complemento"
                        value={formData.complemento}
                        onChange={handleChange}
                        label="Complemento"
                        required
                    />

                    <StyledInput
                        name="fone"
                        value={formData.fone}
                        onChange={handleChange}
                        label="Fone/Fax"
                        required
                    />

                    <StyledInput
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="E-mail"
                        required
                    />

                </FormContainerNotaFiscal4>


                <Title2>Cálculo de imposto</Title2>


                <FormContainerNotaFiscal5>
                    <StyledInput
                        name="totalProdutos"
                        value={formData.totalProdutos}
                        onChange={handleChange}
                        label="Total dos Produtos (R$)"
                        required
                    />

                    <StyledInput
                        name="valorFrete"
                        value={formData.valorFrete}
                        onChange={handleChange}
                        label="Valor do Frete (R$)"
                        required
                    />

                    <StyledInput
                        name="valorSeguro"
                        value={formData.valorSeguro}
                        onChange={handleChange}
                        label="Valor do Seguro (R$)"
                        required
                    />

                    <StyledInput
                        name="outrasDespesas"
                        value={formData.outrasDespesas}
                        onChange={handleChange}
                        label="Outras Despesas (R$)"
                        required
                    />

                    <StyledInput
                        name="desconto"
                        value={formData.desconto}
                        onChange={handleChange}
                        label="Desconto"
                        required
                    />

                    <StyledInput
                        name="totalNota"
                        value={formData.totalNota}
                        onChange={handleChange}
                        label="Total da Nota (R$)"
                        required
                        disabled={autoCalculate} 
                    />
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={autoCalculate} onChange={handleAutoCalculateChange} />}
                            label="Cálculo Automático"
                        />
                    </FormGroup>
                </FormContainerNotaFiscal5>

            </ContainerNotaFiscal>
        </>
    )
}

export default notasDeEntrada