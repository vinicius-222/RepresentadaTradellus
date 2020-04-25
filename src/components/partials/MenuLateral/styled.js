import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    aside{
        width:50px;
        height:100%;
        transition:all ease .2s;
        overflow-x:hidden;
        background-color:#EEE;
        border-radius:5px;

        .Menu-Opem{
            display:flex;
            height:90px;
            width:100%;
            padding:10px 0px;
            flex-direction:column;
            justify-content:space-between;
            align-items:center;
            cursor:pointer;
            background-color:#E8E8E8;
            border-bottom:0.5px solid #CCC;

            .AreaFoto{
                display:flex;
                width:100%;
                border-top:0.5px solid #CCC;
                justify-content:center;
                align-items:center;
                backgroung-color:#FF0000;
                transition:all ease 5s;
    
                img{
                    margin-top:5px;
                    height:50px;
                    width:50px;
                }
            }
            
            img{
                height:25px;
                width:25px;
            }
        }
        .AreaMenuClose{
            display:none;
            transition:all ease 5s;
        }
        .AreaMenu {
            display:flex;
            height:250px;
            text-decoration:none;
            transition:all ease 5s;
            
            nav {
                transition:all ease 1s;
                padding:10px 0px;

                ul, li{
                    padding-left:15px;
                    margin:10px 0px;;
                    outline:100px;
                    list-style:none;
                    text-decoration:none;
                  

                    li{
                        display-flex;
                        justify-content:flex-start;
                        align-items:flex-start;
                        height:25px;
                        border-bottom:0.5px solid #0000CD;
                        padding-left:5px;
                        a {
                            background:none;
                            color:#8B8989;
                            font-family:'Hepta Slab';
                            text-decoration:none;
                            cursor:pointer;
                            outline:100px;
                            transition:all ease .3s;
            
                            &:hover{
                                color:#00008B;
                            }
            
                            &.button{
                                font-size:15px;
                                border-radius:4px;
                                color:#FF0000;
                                padding:2px 5px;
                            }
                            &.button:hover {
                                color:#999;
                            }
                        }
                    }
                }
            }
        }
    }
   
    .show{
        width:170px;
        transition:all ease .2s;
    }

    @media (max-width:600px){

        aside{
            width:0px;
        }

        .show{
            width:170px;
            transition:all ease .2s;
        }
    }
`;
