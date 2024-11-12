import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
    ContainerClientes,
    Title,
    Title2,
    FormContainer,
    FormContainer2,
    StyledInput,
    ButtonContainer,
    StyledButton,
    StyledIconSearch,
    FormContainerAuto,

} from '../../../styles/cadastro/clientes/style';
import Header from '../../../components/header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { StyledButtonCancel } from '@/styles/cadastro/funcionarios/style';

const CadastroClientes = () => {
    const [formData, setFormData] = useState({
        nome: '',
        tipoPessoa: 'PF',
        cpf: '',
        cnpj: '',
        rg: '',
        nomeFantasia: '',
        inscricaoEstadual: '',
        email: '',
        data: '',
        cep: '',
        endereco: '',
        uf: '',
        cidade: '',
        bairro: '',
        numero: '',
        complemento: '',
        estadoCivil: '',
        sexo: '',
        codigo: '',
        clienteDesde: '',
        contribuinte: '',
        orgaoEmissor: '',
        dataNascimento: '',
        infoContatos: '',
        pessoasParaContato: '',
        celular: '',
        fone: '',
        emailParaNF: '',
        webSite: '',
    });

    const router = useRouter();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const fetchEndereco = async (cep) => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const { logradouro, bairro, localidade, uf } = response.data;
            setFormData(prevState => ({
                ...prevState,
                endereco: logradouro || '',
                bairro: bairro || '',
                cidade: localidade || '',
                uf: uf || '',
            }));
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
        }
    };

    const handleCepSearch = () => {
        if (formData.cep) {
            fetchEndereco(formData.cep);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Dados do Formulário:', formData);
        router.push('/');
    };

    const handleCancel = () => {
        console.log("Cadastro cancelado")

        router.push('/')
    }

    return (
        <>
            <Header />
            <ContainerClientes>
                <Title>
                    Cadastro de Clientes ou Fornecedores
                </Title>

                <Title2>
                    Dados cadastrais
                </Title2>
                <FormContainer
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <FormContainerAuto>
                        <StyledInput
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            label="Nome"
                            required
                        />

                        <StyledInput
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            label="Email"
                            required
                        />


                        <FormControl fullWidth>
                            <InputLabel id="tipoPessoa-label">Tipo Pessoa</InputLabel>
                            <Select
                                labelId="tipoPessoa-label"
                                id="tipoPessoa-select"
                                name="tipoPessoa"
                                value={formData.tipoPessoa}
                                onChange={handleChange}
                                label="Tipo Pessoa"
                            >
                                <MenuItem value="PF">Pessoa Física</MenuItem>
                                <MenuItem value="PJ">Pessoa Jurídica</MenuItem>
                            </Select>
                        </FormControl>

                    </FormContainerAuto>

                    <FormContainerAuto>
                        {formData.tipoPessoa === 'PF' && (
                            <>
                                <StyledInput
                                    name="cpf"
                                    value={formData.cpf}
                                    onChange={handleChange}
                                    label="CPF"
                                    required
                                />
                                <StyledInput
                                    name="rg"
                                    value={formData.rg}
                                    onChange={handleChange}
                                    label="RG"
                                    required
                                />

                                <StyledInput
                                    type="text"
                                    name="orgaoEmissor"
                                    value={formData.orgaoEmissor}
                                    onChange={handleChange}
                                    label="Órgão Emissor"
                                    required
                                />
                            </>
                        )}

                        {formData.tipoPessoa === 'PJ' && (
                            <>
                                <StyledInput
                                    name="cnpj"
                                    value={formData.cnpj}
                                    onChange={handleChange}
                                    label="CNPJ"
                                    required
                                />
                                <StyledInput
                                    name="nomeFantasia"
                                    value={formData.nomeFantasia}
                                    onChange={handleChange}
                                    label="Nome Fantasia"
                                    required
                                />
                                <StyledInput
                                    name="inscricaoEstadual"
                                    value={formData.inscricaoEstadual}
                                    onChange={handleChange}
                                    label="Inscrição Estadual"
                                    required
                                />
                            </>
                        )}
                    </FormContainerAuto>

                    <FormContainerAuto>
                        <StyledInput
                            type="number"
                            name="codigo"
                            value={formData.codigo}
                            onChange={handleChange}
                            label="Código"
                            required
                        />

                        <StyledInput
                            type="date"
                            name="clienteDesde"
                            value={formData.clienteDesde}
                            onChange={handleChange}
                            label="Cliente desde"
                            required
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />

                        <FormControl fullWidth>
                            <InputLabel id="contribuinte">Contribuinte</InputLabel>
                            <Select
                                labelId="contribuinte-label"
                                id="contribuinte-select"
                                name="contribuinte"
                                value={formData.contribuinte}
                                onChange={handleChange}
                                label="Contribuinte"
                            >
                                <MenuItem value="contribuinte">Contribuinte</MenuItem>
                                <MenuItem value="naocontribuinte">Não contribuinte</MenuItem>
                                <MenuItem value="outros">Outros</MenuItem>
                            </Select>
                        </FormControl>

                    </FormContainerAuto>

                </FormContainer>

                <Title2>
                    Endereço
                </Title2>
                <FormContainer2
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        flex: '1 1 calc(33.333% - 16px)' 
                    }}>
                        <StyledInput
                            name="cep"
                            value={formData.cep}
                            onChange={handleChange}
                            label="CEP"
                            required
                        />
                        <StyledIconSearch
                            onClick={handleCepSearch}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                            }}
                        />
                    </div>

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
                    />
                    <StyledInput
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        label="Bairro"
                        required
                    />
                    <StyledInput
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        label="Cidade"
                        required
                    />
                    <FormControl fullWidth>
                        <InputLabel id="uf-label">UF</InputLabel>
                        <Select
                            labelId="uf-label"
                            id="uf-select"
                            name="uf"
                            value={formData.uf}
                            onChange={handleChange}
                            label="UF"
                        >
                            <MenuItem value="">Selecione a UF</MenuItem>
                            <MenuItem value="AC">AC - Acre</MenuItem>
                            <MenuItem value="AL">AL - Alagoas</MenuItem>
                            <MenuItem value="AP">AP - Amapá</MenuItem>
                            <MenuItem value="AM">AM - Amazonas</MenuItem>
                            <MenuItem value="BA">BA - Bahia</MenuItem>
                            <MenuItem value="CE">CE - Ceará</MenuItem>
                            <MenuItem value="DF">DF - Distrito Federal</MenuItem>
                            <MenuItem value="ES">ES - Espírito Santo</MenuItem>
                            <MenuItem value="GO">GO - Goiás</MenuItem>
                            <MenuItem value="MA">MA - Maranhão</MenuItem>
                            <MenuItem value="MT">MT - Mato Grosso</MenuItem>
                            <MenuItem value="MS">MS - Mato Grosso do Sul</MenuItem>
                            <MenuItem value="MG">MG - Minas Gerais</MenuItem>
                            <MenuItem value="PA">PA - Pará</MenuItem>
                            <MenuItem value="PB">PB - Paraíba</MenuItem>
                            <MenuItem value="PR">PR - Paraná</MenuItem>
                            <MenuItem value="PE">PE - Pernambuco</MenuItem>
                            <MenuItem value="PI">PI - Piauí</MenuItem>
                            <MenuItem value="RJ">RJ - Rio de Janeiro</MenuItem>
                            <MenuItem value="RN">RN - Rio Grande do Norte</MenuItem>
                            <MenuItem value="RS">RS - Rio Grande do Sul</MenuItem>
                            <MenuItem value="RO">RO - Rondônia</MenuItem>
                            <MenuItem value="RR">RR - Roraima</MenuItem>
                            <MenuItem value="SC">SC - Santa Catarina</MenuItem>
                            <MenuItem value="SP">SP - São Paulo</MenuItem>
                            <MenuItem value="SE">SE - Sergipe</MenuItem>
                            <MenuItem value="TO">TO - Tocantins</MenuItem>
                        </Select>
                    </FormControl>
                </FormContainer2>

                {formData.tipoPessoa === 'PF' && (
                    <>
                        <Title2>
                            Dados adicionais
                        </Title2>

                        <FormContainer>

                            <FormControl fullWidth>
                                <InputLabel id="estadoCivil-label">Estado Civil</InputLabel>
                                <Select
                                    labelId="estadoCivil-label"
                                    id="estadoCivil-select"
                                    name="estadoCivil"
                                    value={formData.estadoCivil}
                                    onChange={handleChange}
                                    label="Estado Civil"
                                >
                                    <MenuItem value="Solteiro">Solteiro</MenuItem>
                                    <MenuItem value="Casado">Casado</MenuItem>
                                    <MenuItem value="Divorciado">Divorciado</MenuItem>
                                    <MenuItem value="Viúvo">Viúvo</MenuItem>
                                </Select>
                            </FormControl>

                            <StyledInput
                                name="sexo"
                                value={formData.sexo}
                                onChange={handleChange}
                                label="Sexo"
                                type="tel" 
                            />

                            <StyledInput
                                type="date"
                                name="dataNascimento"
                                value={formData.dataNascimento}
                                onChange={handleChange}
                                label="Data Nascimento"
                                required
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                        </FormContainer>
                    </>
                )}

                <Title2>
                    Contato
                </Title2>
                <FormContainer>
                    <StyledInput
                        name="infoContatos"
                        value={formData.infoContatos}
                        onChange={handleChange}
                        label="Informações de contato"
                        required
                        type="text" 
                    />

                    <StyledInput
                        name="pessoasParaContato"
                        value={formData.pessoasParaContato}
                        onChange={handleChange}
                        label="Pessoas de contato"
                        type="text" 
                    />

                    <StyledInput
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                        label="Celular"
                        type="tel" 
                    />

                    <StyledInput
                        name="fone"
                        value={formData.fone}
                        onChange={handleChange}
                        label="Telefone"
                        type="tel" 
                    />

                    <StyledInput
                        name="emailParaNF"
                        value={formData.emailParaNF}
                        onChange={handleChange}
                        label="E-mail para NF"
                        type="email" 
                    />

                    <StyledInput
                        name="webSite"
                        value={formData.webSite}
                        onChange={handleChange}
                        label="Website"
                        type="url" 
                    />
                </FormContainer>

                <ButtonContainer>
                    <StyledButton type="submit" onClick={handleSubmit}>
                        Cadastro
                    </StyledButton>
                    <StyledButtonCancel type='button' onClick={handleCancel}>
                        Cancelar
                    </StyledButtonCancel>
                </ButtonContainer>

            </ContainerClientes >
        </>
    );
};

export default CadastroClientes;
