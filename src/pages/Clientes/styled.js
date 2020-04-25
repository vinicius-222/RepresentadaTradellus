import styled from 'styled-components';

export const PageArea = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:auto;
    margin:5px;

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

            input{
                padding:5px;
                height:30px;
                width:550px;
                border-radius:5px;
                autline:0;
                border:1px solid #999;
                font-size:18px;
                padding:5px;
                outline:0;
                transition:ease all 0.5s;
                &:hover {
                    border:1px solid #0000CD;
                }
                &:focus{
                    border:1px solid #0000CD;
                }
            }
            button{
                margin:0px 10px;
                background-color:#0089FF;
                font-size:15px;
                border:0;
                border-radius:5px;
                color:#FFF;
                height:40px;
                padding:0 20px;
                cursor:pointer;
            }
        }
    }

    .AreaListaCliente{
        display:flex;
        width:100%;
        height:400px;

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

                .ListaClientes--AreaButton{
                    border:0px;
                    margin:0px;
                    padding:0px;
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

        .AreaListaCliente--Topo{
            width:100%;
            height:45px;                
            align-items:center;
            background-color:#EEE;
            border-bottom:1px solid #CCC;

        }
    }

`;