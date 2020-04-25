import React, { useState }from 'react';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MenuLateral = (props) => {

    const HandleStMenu = () =>{
        if (props.StMenu){
            props.setStMenu(false);
        }else{
            props.setStMenu(true);
        }
    }

    return(
        <Container>
            <aside className={props.StMenu ? 'show' : ''}>
                <div onClick={()=>HandleStMenu()} className="Menu-Opem">
                    <img src={require('../../../assets/images/canais_inative.png')} />
                    <div className="AreaFoto"> 
                        <img src={require('../../../assets/images/conta_active.png')}/>
                    </div>
                </div>
                <div className={props.StMenu ? 'AreaMenu' : 'AreaMenuClose'} >
                    <nav>  
                        <ul>
                            <li>
                                <Link to='/Perfil'>Perfil</Link>
                            </li>
                            <li>
                                <Link to='/Representadas'>Representadas</Link>
                            </li>
                            <li>
                                <Link to='/Produtos'>Produtos</Link>
                            </li>
                            <li>
                                <Link to='/Clientes'>Clientes</Link>
                            </li>
                            <li>
                                <Link to='/Pedidos'>Pedidos</Link>
                            </li>
                            <li>
                                <Link to='/CanaisDeVendas'>Canais de Vendas</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return{
        StMenu:state.user.StMenu,

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setStMenu:(StMenu)=>dispatch({type:'SET_MENU', payload:{StMenu}}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (MenuLateral);