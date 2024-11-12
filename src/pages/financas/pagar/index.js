import React, { useState } from 'react';
import Header from '../../../components/header/index';
import {
    ContainerContasPagar,
    FormContainerContasPagar1,
    FormContainerContasPagar2,
    FormContainerContasPagar3,
    FormContainerContasPagar4,
    Title,
    Title2,
    StyledInput,
    StyledIconSearch,
    ButtonContainer,
    StyledButton,
    StyledButtonCancel,
    StyledDiv,
} from '../../../styles/financas/pagar/style.js';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ImageUploadButton from '@/components/imageUploadButton/ImageUploadButton';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { FakeApi } from '../../api/fakeApi/FakeApi';

const contasApagar = () => {
    const [formData, setFormData] = useState({
        filter: '',
        nomeFornecedor: '',
        vencimentoOrigian: '',
        vencimento: '',
        valor: '',
        dataDaEmissao: '',
        documento: '',
        competencia: '',
        historico: '',
        formaDePagamento: '',
        portador: '',
        categoria: '',
        ocorrencia: '',
        foto: null,
    })

    const [nomeFilter, setNomeFilter] = useState("");
    const [filtrosFakeApi, setFiltrosFakeApi] = useState([]);
    const [previewFoto, setPreviewFoto] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const router = useRouter();

    const handleSearchClick = () => {
        const filteredResults = FakeApi.filter((item) => {
            if (nomeFilter) {
                return item.nomeFilter && item.nomeFilter.toLowerCase().includes(nomeFilter.toLowerCase());
            } else {
                return false;
            }
        });
        setFiltrosFakeApi(filteredResults);
    };

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

    const handleIncluirContaClick = () => {
        setShowForm(true)
    }

    const handleCancelarContaClick = () => {
        setShowForm(false)
    }

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
            < Header />
            <ContainerContasPagar>
                <Title>
                    Contas a pagar
                </Title>

                <Title2>
                    Filtrar por:
                </Title2>

                <FormContainerContasPagar1>
                    <div style={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        flex: '1 1 calc(33.333% - 16px)'
                    }}>
                        <StyledInput
                            type='text'
                            name="filter"
                            value={nomeFilter}
                            onChange={(e) => setNomeFilter(e.target.value)}
                            label="Pesquise por nome, e-mail, CPF/CNPJ, número ou histórico"
                            required
                        />
                        <StyledIconSearch
                            onClick={handleSearchClick}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                            }}
                        />
                    </div>
                </FormContainerContasPagar1>

                
                <FormContainerContasPagar2>
                    <StyledDiv>
                        {filtrosFakeApi.length > 0 ? (
                            filtrosFakeApi.map((item) => (
                                <Box key={item.id} mb={2}>
                                    <p><strong>Nome:</strong> {item.nomeFilter}</p>
                                    <p><strong>Email:</strong> {item.email}</p>
                                    <p><strong>CPF:</strong> {item.cpf}</p>
                                    <p><strong>Número:</strong> {item.numero}</p>
                                    <p><strong>Histórico:</strong> {item.historico}</p>
                                </Box>
                            ))
                        ) : (
                            <p>Nenhum resultado encontrado.</p>
                        )}
                    </StyledDiv>
                </FormContainerContasPagar2>

                <ButtonContainer>
                    <StyledButton onClick={handleIncluirContaClick}>
                        Incluir Conta
                    </StyledButton>
                    <StyledButtonCancel type='button' onClick={handleCancelarContaClick}>
                        Cancelar
                    </StyledButtonCancel>
                </ButtonContainer>

                {showForm && (
                    <>
                        <FormContainerContasPagar3>
                            <StyledInput
                                name="nomeFornecedor"
                                value={formData.nomeFornecedor}
                                onChange={handleChange}
                                label="Nome do fornecedor"
                                required
                            />
                            <StyledInput
                                type="date"
                                name="vencimento"
                                value={formData.vencimento}
                                onChange={handleChange}
                                label="Vencimento"
                                required
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <StyledInput
                                name="valor"
                                value={formData.valor}
                                onChange={handleChange}
                                label="Valor (R$)"
                                required
                            />
                            <StyledInput
                                type="date"
                                name="dataDaEmissao"
                                value={formData.dataDaEmissao}
                                onChange={handleChange}
                                label="Data da emissão"
                                required
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <StyledInput
                                name="documento"
                                value={formData.documento}
                                onChange={handleChange}
                                label="Número do documento"
                                required
                            />
                            <StyledInput
                                type="date"
                                name="competencia"
                                value={formData.competencia}
                                onChange={handleChange}
                                label="Competência"
                                required
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <StyledInput
                                name="banco"
                                value={formData.banco}
                                onChange={handleChange}
                                label="Número do banco"
                                required
                            />
                        </FormContainerContasPagar3>

                        <FormContainerContasPagar1>
                            <StyledInput
                                name="historico"
                                value={formData.historico}
                                onChange={handleChange}
                                label="Histórico"
                                required
                            />
                        </FormContainerContasPagar1>

                        <FormContainerContasPagar3>
                            <FormControl fullWidth>
                                <InputLabel id="formaDePagamento">
                                    Forma de pagamento
                                </InputLabel>
                                <Select
                                    labelId="formaDePagamento"
                                    id="formaDePagamento"
                                    name="formaDePagamento"
                                    value={formData.formaDePagamento}
                                    onChange={handleChange}
                                    label="Forma de pagamento"
                                >
                                    <MenuItem value="Pix">Pix</MenuItem>
                                    <MenuItem value="Débito">Débito</MenuItem>
                                    <MenuItem value="Crédito">Crédito</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="portador">
                                    Portador
                                </InputLabel>
                                <Select
                                    labelId="portador"
                                    id="portador"
                                    name="portador"
                                    value={formData.portador}
                                    onChange={handleChange}
                                    label="Portador"
                                >
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="categoria">
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
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                </Select>
                            </FormControl>

                            <StyledInput
                                name="vendedor"
                                value={formData.vendedor}
                                onChange={handleChange}
                                label="Vendedor"
                                required
                            />

                            <FormControl fullWidth>
                                <InputLabel id="categoria">
                                    Ocorrêcia
                                </InputLabel>
                                <Select
                                    labelId="categoria"
                                    id="categoria"
                                    name="categoria"
                                    value={formData.categoria}
                                    onChange={handleChange}
                                    label="Categoria"
                                >
                                    <MenuItem value="Única">Única</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                </Select>
                            </FormControl>
                        </FormContainerContasPagar3>

                        <FormContainerContasPagar4>
                            <div className='upload-container'>
                                <FormControl fullWidth>
                                    <ImageUploadButton
                                        onChange={handleImageChange}
                                        style={{ top: '10px', left: '10px' }} />
                                </FormControl>

                                {previewFoto && (
                                    <Box
                                        mt={-1.5}
                                        position="relative"
                                        width="200px"
                                    >
                                        <img
                                            src={previewFoto}
                                            alt="Foto do Funcionário"
                                            style={{
                                                position: 'absolute',
                                                left: '6%',
                                                width: '120px',
                                                height: '86px'
                                            }}
                                        />
                                    </Box>
                                )}
                            </div>
                        </FormContainerContasPagar4>

                        <ButtonContainer>
                            <StyledButton type="submit" onClick={handleSubmit}>
                                Cadastro
                            </StyledButton>
                            <StyledButtonCancel type='button' onClick={handleCancel}>
                                Cancelar
                            </StyledButtonCancel>
                        </ButtonContainer>
                    </>
                )}
            </ContainerContasPagar>
        </>
    );
};

export default contasApagar;