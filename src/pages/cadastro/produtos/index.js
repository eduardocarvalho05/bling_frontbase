import React, { useState } from 'react';
import Header from '../../../components/header/index';
import { ContainerProdutos, Title, FormContainerProdutos1, FormContainerProdutos2, FormContainerProdutos3, StyledInput, InputRadio, StyledRadioButtonsGroup, Title2, ButtonContainer, StyledButton, StyledButtonCancel } from '@/styles/cadastro/produtos/style';
import { useRouter } from 'next/router';
import ImageUploadButton from '@/components/imageUploadButton/ImageUploadButton';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';  
import MenuItem from '@mui/material/MenuItem';  
import InputLabel from '@mui/material/InputLabel';  
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Produtos = () => {
    const router = useRouter();
    const [previewFoto, setPreviewFoto] = useState(null);
    const [formData, setFormData] = useState({
        nome: '',
        foto: null,
        codigo: '',
        formato: '',
        tipo: '',
        precoVenda: '',
        unidade: '',
        condicao: '',
        marca: '',
        pesoLiquido: '',
        pesoBruto: '',
        largura: '',
        altura: '',
        profundidade: '',
        volumes: '',
        itensPcaixa: '',
        unidadeDeMedida: '',
        descricao: '',
        categoria: '',
    })

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
            < Header />
            <ContainerProdutos>
                <Title>
                    Produtos
                </Title>

                <FormContainerProdutos1
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >

                    <StyledInput
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        label="Nome Completo"
                        required
                    />


                </FormContainerProdutos1>

                <FormContainerProdutos2>
                    <StyledInput
                        className='inputLateral1'
                        name="codigo"
                        value={formData.codigo}
                        onChange={handleChange}
                        label="Código(SKU)"
                        required
                    />

                    <FormControl fullWidth>
                        <InputLabel id="formato">Formato</InputLabel>
                        <Select
                            labelId="formato"
                            id="formato"
                            name="formato"
                            value={formData.formato}
                            onChange={handleChange}
                            label="Formato"
                        >
                            <MenuItem value="Simples">Simples</MenuItem>
                            <MenuItem value="Variável">Variável</MenuItem>
                        </Select>
                    </FormControl>

                    <StyledInput
                        className='inputLateral2'
                        name="precoVenda"
                        value={formData.precoVenda}
                        onChange={handleChange}
                        label="Preço venda"
                        required
                    />

                    <StyledInput
                        className='inputLateral3'
                        name="unidade"
                        value={formData.unidade}
                        onChange={handleChange}
                        label="Unidade"
                        required
                    />

                    <div className='upload-container'>
                        <FormControl fullWidth>
                            <ImageUploadButton onChange={handleImageChange} />
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
                                        left: '2%',
                                        width: '116px',
                                        height: '86px'
                                    }}
                                />
                            </Box>
                        )}
                    </div>
                    <FormGroup
                        className='radio'
                    >
                        <FormControlLabel
                            control={<Switch />}
                            label="Desativar/Ativar"
                        />
                    </FormGroup>

                </FormContainerProdutos2>

                <FormContainerProdutos3>
                    <Title2>
                        Características do produto
                    </Title2>

                    <div className='row1'>
                        <StyledInput
                            name="marca"
                            value={formData.marca}
                            onChange={handleChange}
                            label="Marca do produto"
                            required
                        />
                    </div>
                    <div className='row2'>
                        <StyledInput
                            name="pesoLiquido"
                            value={formData.pesoLiquido}
                            onChange={handleChange}
                            label="Peso Liquido"
                            required
                        />
                        <StyledInput
                            name="pesoBruto"
                            value={formData.pesoBruto}
                            onChange={handleChange}
                            label="Peso Bruto"
                            required
                        />
                        <StyledInput
                            name="largura"
                            value={formData.largura}
                            onChange={handleChange}
                            label="Largura"
                            required
                        />
                        <StyledInput
                            name="altura"
                            value={formData.altura}
                            onChange={handleChange}
                            label="Altura"
                            required
                        />
                        <StyledInput
                            name="profundidade"
                            value={formData.profundidade}
                            onChange={handleChange}
                            label="Profundidade"
                            required
                        />
                        <StyledInput
                            name="volume"
                            value={formData.volumes}
                            onChange={handleChange}
                            label="Volumes"
                            required
                        />
                        <StyledInput
                            name="itensPcaixa"
                            value={formData.itensPcaixa}
                            onChange={handleChange}
                            label="Itens p/Caixa"
                            required
                        />

                        <FormControl fullWidth>
                            <InputLabel id="unidade-de-medida">
                                Unidade de medida
                            </InputLabel>
                            <Select
                                labelId="unidade-de-medida"
                                id="unidade-de-medida"
                                name="unidade-de-medida"
                                value={formData.unidadeDeMedida}
                                onChange={handleChange}
                                label="Unidade de medida"
                            >
                                <MenuItem value="MM">Milímetro</MenuItem>
                                <MenuItem value="CM">Centímetro</MenuItem>
                                <MenuItem value="M">Metro</MenuItem>
                                <MenuItem value="KM">Quilômetro</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <Title2>
                        Descrição curta do produto
                    </Title2>

                    <StyledInput
                        name="descricao"
                        value={formData.descricao}
                        onChange={handleChange}
                        label="Descrição curta do produto"
                        required
                    />
                    <Title2>Categoria</Title2>
                    <FormControl fullWidth
                        className='categoria'
                    >
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
                            <MenuItem value="SemCategoria">Sem categoria</MenuItem>
                            <MenuItem value="ComCategoria">Com categoria</MenuItem>
                        </Select>
                    </FormControl>
                </FormContainerProdutos3>

                <ButtonContainer>
                    <StyledButton type="submit" onClick={handleSubmit}>
                        Cadastro
                    </StyledButton>
                    <StyledButtonCancel type='button' onClick={handleCancel}>
                        Cancelar
                    </StyledButtonCancel>
                </ButtonContainer>

            </ContainerProdutos>
        </>
    );
};

export default Produtos;