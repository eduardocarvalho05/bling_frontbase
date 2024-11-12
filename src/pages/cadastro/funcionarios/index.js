import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/header/index';
import { ContainerFuncionarios, Title, Title2, FormContainerFuncionarios, FormContainerAuto, StyledInput, FormContainerFuncionarios2, StyledLabel, FormContainerFuncionarios3, FormContainerFuncionarios4, ButtonContainer, StyledButton, StyledButtonCancel } from '../../../styles/cadastro/funcionarios/style';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import ImageUploadButton from '../../../components/imageUploadButton/ImageUploadButton';
import { StyledIconSearch } from '../../../styles/cadastro/clientes/style'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Funcionarios = () => {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        Cpf: '',
        rg: '',
        dataDeNascimento: '',
        cargo: '',
        dataAdmissao: '',
        pisPasep: '',
        ctps: '',
        codigo: '',
        salario: '',
        fone: '',
        celular: '',
        email: '',
        telefoneEmergencial: '',
        cep: '',
        uf: '',
        cidadeBairro: '',
        bairro: '',
        endereco: '',
        numero: '',
        complemento: '',
        obersevacoes: '',
        foto: null,
    });

    const [previewFoto, setPreviewFoto] = useState(null);
    const router = useRouter();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                foto: file,
            });
            setPreviewFoto(URL.createObjectURL(file));
        }
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
            <ContainerFuncionarios>
                <Title>
                    Funcionário
                </Title>
                <Title2>
                    Dados cadastrais
                </Title2>

                <FormContainerFuncionarios
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >

                    <StyledInput
                        name="nomeCompleto"
                        value={formData.nomeCompleto}
                        onChange={handleChange}
                        label="Nome Completo"
                        required
                    />

                    <StyledInput
                        name="Cpf"
                        value={formData.Cpf}
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
                        type="date"
                        name="dataDeNascimento"
                        value={formData.dataDeNascimento}
                        onChange={handleChange}
                        label="Data Nascimento"
                        required
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />

                    <StyledInput
                        name="cargo"
                        value={formData.cargo}
                        onChange={handleChange}
                        label="Cargo"
                        required
                    />

                    <StyledInput
                        type="date"
                        name="dataAdmissao"
                        value={formData.dataAdmissao}
                        onChange={handleChange}
                        label="Data de admissão"
                        required
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                    />

                    <StyledInput
                        name="pisPasep"
                        value={formData.pisPasep}
                        onChange={handleChange}
                        label="PIS/PASEP"
                        required
                    />

                    <StyledInput
                        name="ctps"
                        value={formData.ctps}
                        onChange={handleChange}
                        label="CTPS"
                        required
                    />

                    
                    <FormContainerAuto>
                        <StyledLabel htmlFor="foto">Foto</StyledLabel>
                        <FormControl fullWidth>
                            <ImageUploadButton onChange={handleImageChange} style={{ top: '10px', left: '10px' }} />
                        </FormControl>

                        {previewFoto && (
                            <Box
                                mt={-1}
                                position="relative"
                                width="200px" 

                            >
                                <img
                                    src={previewFoto}
                                    alt="Foto do Funcionário"
                                    style={{
                                        position: 'absolute',
                                        left: '1%',
                                        width: '89px',
                                        height: '82px'
                                    }}
                                />
                            </Box>
                        )}
                    </FormContainerAuto>

                </FormContainerFuncionarios>

                <Title2>
                    Contato
                </Title2>

                <FormContainerFuncionarios2>

                    <StyledInput
                        name="fone"
                        value={formData.fone}
                        onChange={handleChange}
                        label="Fone"
                        required
                    />

                    <StyledInput
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                        label="Celular"
                        required
                    />

                    <StyledInput
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                        required
                    />

                    <StyledInput
                        name="telefoneEmergencial"
                        value={formData.telefoneEmergencial}
                        onChange={handleChange}
                        label="Telefone emergencial"
                        required
                    />
                </FormContainerFuncionarios2>

                <Title2>
                    Endereço
                </Title2>

                <FormContainerFuncionarios2>
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

                    <StyledInput
                        name="cidadeBairro"
                        value={formData.cidadeBairro}
                        onChange={handleChange}
                        label="Cidade"
                        required
                    />

                    <StyledInput
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        label="Bairro"
                        required
                    />

                </FormContainerFuncionarios2>

                <FormContainerFuncionarios3>

                    <StyledInput
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                        label="Endereço"
                        required
                    />

                    <StyledInput
                        name='numero'
                        value={formData.numero}
                        onChange={handleChange}
                        label="Número"
                        required
                    />

                    <StyledInput
                        name='complemento'
                        value={formData.complemento}
                        onChange={handleChange}
                        label="Complemento"
                        required
                    />

                </FormContainerFuncionarios3>

                <FormContainerFuncionarios4>
                    <StyledInput
                        name='observacoes'
                        value={formData.obersevacoes}
                        onChange={handleChange}
                        label="Observações"
                        required
                    />
                </FormContainerFuncionarios4>

                <ButtonContainer>
                    <StyledButton type="submit" onClick={handleSubmit}>
                        Cadastro
                    </StyledButton>
                    <StyledButtonCancel type='button' onClick={handleCancel}>
                        Cancelar
                    </StyledButtonCancel>
                </ButtonContainer>
            </ContainerFuncionarios>
        </>
    );
};

export default Funcionarios;
