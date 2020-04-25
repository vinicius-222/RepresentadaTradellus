import styled from 'styled-components';


export const HeaderArea = styled.div`
    display:flex;
    height:100px;

    .container {
        display:flex;
        margin-left:5px;
        flex:1;
        flex-direction:row;
        background-color:#FFF;
        border-bottom:0.5px solid #0000FF;
        color:#000;
        font-size:12px;
        justify-content:space-between;

        .AreaDetail{
            display:flex;

            .AreaMenu{
                display:none;
            }
            .AreaCarrinho{
                display:flex;
                    justify-content:center;
                    align-items:center;
                    border:1px solid #CCC;
                    width:40px;
                    height:35px;
                    background-color:#FFF;
                    border-radius:5px;
                    margin-top:2px;
                    margin-right:20px;
        
                    .areaBdge{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        width:20px;
                        height:20px;
                        border-radius:10px;
                        background-color:#FF0000;
                        margin-right:-20px;
                        margin-top:-30px;
                        font-size:12px
                        color:#FFF;
                        text-decoration:none
                        font-weight:bold;
                    }
        
                    img{
                        height:25px;
                    }
                    &:hover{
                        border:1px solid #FF0000;
                    }
                }
            }
            .button{
                height:20px;
                width:40px;
                margin:10px;
                cursor:pointer;
                font-size:14px;
                color:#0000EE;

                &:hover{
                    color:#000080;
                }
            }
        }
    }
    
    .logo{
        display:flex;
        align-items:center;
        justify-content:center;
        
        img {
            margin-left:40px;
            width:70px;
        }
    }

    @media (max-width:600px){
        height:130px;

        .logo{
            background-color:#FFF;
            img{
                margin:5px 0px;
            }
        }

        .container{
            background-color:#FFF;
            flex-direction:column;
            margin-left:0px;
            
            .AreaDetail{
                align-items:center;
                justify-content:space-between;
                margin-bottom:5px;
                
                .AreaMenu{
                    display:flex;
                    height:25px;
                    width:25px;
    
                    img{
                        height:25px;
                        width:25px;
                    }
                }

                .AreaCarrinho{
                    position:fixed;
                    right:5px;
                    top:10px;
                    margin-left:70px;
                }
            }
        }
    }
`;