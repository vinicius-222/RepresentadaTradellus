import styled from 'styled-components';

export const PageArea = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:auto;
    padding:0px 5px;

    .AreaPesquisa{
        display:flex;
        justify-content:center;
        align-items:center;
        height:70px;
        border-top:1px solid #CCC;
        border-bottom:1px solid #CCC;
        width:99.7%;
        background-color:#EEE;

        form{
            height:auto;
            display:flex;
            justify-content:center;
            align-items:center;
            
            .AreaDsPesquisa{
                display:flex;
                width:100%;

                .InputNmPessoa{
                    padding:5px;
                    height:30px;
                    width:400px;
                    border-radius:5px;
                    autline:0;
                    border:1px solid #999;
                    font-size:18px;
                    padding:5px;
                    outline:0;
                    margin-right:10px;
                    transition:ease all 0.5s;
                    &:hover {
                        border:1px solid #0000CD;
                    }
                    &:focus{
                        border:1px solid #0000CD;
                    }
                }
            }
            .AreaDatas{
                display:flex;
                justify-content:space-between;
                align-items:center;
                flex-direction:row;
                width:310px;

                .DateInicio{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:160px;
                    margin:0px;
                    
                    input{
                        font-size:18px;
                        color:#696969;
                        background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #eeeeee;  /* Imagem de fundo (Seta) */
                        background-position: 100% center;  /*Posição da imagem do background*/
                        height:30px;
                        width:90%;
                        border-radius:5px;
                        autline:0;
                        border:1px solid #999;
                        font-size:18px;
                        padding:5px;
                        outline:0;
                        margin-right:10px;
                        transition:ease all 0.5s;
                        &:hover {
                            border:1px solid #0000CD;
                        }
                        &:focus{
                            border:1px solid #0000CD;
                        }

                    }
                }
            }

            button{
                margin:0px 10px;
                background-color:#0089FF;
                font-size:15px;
                border:0;
                border-radius:5px;
                color:#FFF;
                height:50px;
                padding:0 20px;
                cursor:pointer;
            }
            
            .AreaBtns{
                display:flex;
                margin-left:5px;

                .BtnAcoes{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:40px;
                    width:110px;
                    font-family:Tahoma;
                    font-size:14px;
                    color:#FFF;
                    border-radius:5px;
                    margin:0px;
                    transition:ease all 0.4s;
                    background-color:#104E8B;
                    cursor:pointer;
                }
            }
        }
    }

    .AreaListaCliente{
        display:flex;
        width:100%;
        height:400px;
        margin-bottom:15px;

        h3{
            margin-left:30px;
            color:#696969;   
            font-size:22px;   
        }

        .AreaListaCliente--AreaItems{
            display:flex;
            margin-top:10px;
            flex-direction:column;
            width:99.6%;
            height:100%;
            border:1px solid #CCC;
            border-radius:5px;

            .AreaListaCliente--Topo{
                width:100%;
                justify-content:space-between;
                align-items:center;
                height:45px;                
                align-items:center;
                background-color:#EEE;
                border-bottom:1px solid #CCC;
    
                .AreaAdd{
                    display:flex;
                    justify-content:center  ;
                    align-items:center;
                    cursor:pointer;
                    img{
                        margin-right:15px;
                        width:30px;
                        height:30px;
                    }
                }
    
            }

            .AreaLista{
                display:block;
                height:100%;
                width:100%;
                overflow:scroll;

                .AreaLoanding{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100%;
                }
            }

            .ListaClientes{
                display:flex;
                padding:0px 5px;
                align-items:center;
                justify-content:space-between;
                margin:5px 10px;
                border:1px solid #CCC;
                border-radius:5px;
                height:30px;
                transition:ease all 0.3s;
                color:#696969;
                &:hover {
                    border:1px solid #0000CD;
                    background-color:#CCC;
                }

                .ListaClientes--AreaNmPessoa{
                    border:0px;
                }

                .ListaClientes--AreaDetails{
                    display:flex;
                    border:0px;
                    .ListaClientes--AreaInfo{
                        margin:0px;
                        padding:0px;
                        border:0px;
                        div{
                            display:flex;
                            margin:0px;
                            padding:0px;
                            width:100px;
                            align-items:center;
                            justify-content:space-between;
    
                            img{
                                height:20px;
                                width:20px;
                            }
                        }
                    }
                    .ListaClientes--AreaButton{
                        display:flex;
                        justify-content:flex-end;
                        align-items:center;
                        margin:5px 0px;
                        border:0px;
                        div{
                            display:flex;
                            margin:0px;
                            padding:0px;
                            width:40px;
                            align-items:center;
                            justify-content:space-between;
        
                            img{
                                height:20px;
                                width:20px;
                            }
                        }
                    }
                }
            }
        }
    }

    .AreaRodape{
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#EEE;
        width:100%;
        height:80px;
    }

    @media (max-width:700px){
        padding:0px;

        .AreaPesquisa{
            height:auto;
            width:100%;

            form{
                justify-content:flex-start;
                align-items:center;
                flex-direction:column;
                width:100%;
                padding:0px 10px;
                margin-top:5px;
                
                .AreaDsPesquisa{
                    .InputNmPessoa{
                        width:100%;
                        margin-right:0px;
                    }
                }

                button{
                    margin-top:5px;
                    width:100%;
                    margin-bottom:5px;
                }
                
                .AreaDatas{
                    width:100%;
                    justify-content:space-between;
                    align-items:center;
                    margin:10px 0px;

                    .DateInicio{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        width:100%;
                        input{
                            width:93%;
                            margin:0px;
                        }
                        .AreaPic{
                            position:absolute;
                            right:-165px;
                            background-color:#FFF;
                            box-shadow:1px 0px 0px 1px #CCC;
                            border-radius:3px;
                        }
                    }
                }

                .AreaBtns{
                    margin-left:0px;
                    width:100%;
                    
                    .BtnAcoes{
                        width:100%;
                    }
                }
            }
        }

        .AreaListaCliente{
            height:400px;
            .AreaListaCliente--AreaItems{
                height:auto;
                .ListaClientes{
                    height:auto;
                    display:flex;
                    flex-direction:column;
                    justify-content:flex-start;
                    align-items:flex-start;
                    
                    .ListaClientes--AreaNmPessoa{
                        padding:5px;
                        justify-content:flex-start;
                        align-items:flex-start;
                        width:100%;
                        height:50%;
                    }

                    .ListaClientes--AreaDetails{
                        justify-content:center;
                        align-items:center;
                        flex-direction:row;
                        padding:0px;
                        margin:0px;
                        width:100%;
                        height:100%;
                        margin-bottom:3px;

                        .ListaClientes--AreaInfo{
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            flex-direction:row;
                            width:100%;
                            height:100%;

                            div{
                                width:auto;
                                margin:0px 5px;
                                height:20px;
                            }
                        }

                        .ListaClientes--AreaButton{
                            flex-direction:row;
                            height:100%;
                            width:50px;
                            margin:0px;
                            
                            div{
                                width:20px;
                                margin:0px 3px;
                            }
                        }
                    }
                }
            }
        }
    }
`;