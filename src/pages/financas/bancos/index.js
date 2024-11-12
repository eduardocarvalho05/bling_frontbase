import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/header/index';
import { FakeApi } from '../../api/fakeApi/FakeApi';
import Box from '@mui/material/Box';
import {
    ContainerBancos,
    Title,
    FormContainerBancos1,
    FormContainerBancos2,
    StyledInput,
    StyledIconSearch,
    StyledDiv,
    ButtonContainer,
    StyledButton,
    StyledButtonCancel,
}
    from '../../../styles/financas/bancos/style'
import { Title2 } from '@/styles/vendas/style';


const bancos = () => {
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
            <ContainerBancos>
                <Title>
                    Caixas e Bancos
                </Title>
                <Title2>
                    Filtrar por:
                </Title2>
                <FormContainerBancos1>
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
                </FormContainerBancos1>

                
                <FormContainerBancos2>
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
                </FormContainerBancos2>

            </ContainerBancos>
        </>
    );
};

export default bancos;