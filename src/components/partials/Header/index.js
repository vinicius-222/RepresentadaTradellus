import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import SalatoAPI from '../../../helpers/SalatoAPI';
import { HeaderArea } from './styled';
import { connect } from 'react-redux';
import { isLogged, doLogout, doLogin } from '../../../helpers/AuthHandler';


const Header = (props) => {
    let logged = isLogged();
    const api = SalatoAPI();
    const [StDisplay, setStDisplay] = useState(false);

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    const getRepresentadas = async () =>{
        const json = await api.getRepresentadas();
        props.setListRepresentadaRedux(json.Itens);
    }

    const handleSetMenu = () =>{
        if (props.StMenu){
            props.setStMenu(false);
        }else{
            props.setStMenu(true);
        }
    }

    useEffect(()=>{
        getRepresentadas();
    },[])


    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={require('../../../assets/images/LogoTradellus.jpeg')}/>
                    </Link>
                </div>
                <div className="AreaDetail">
                     <div className="AreaMenu" onClick={handleSetMenu}>
                        {!props.StMenu && 
                            <img src={require('../../../assets/images/canais_inative.png')}/>
                        }
                     </div>
                    <Link to="/Produtos" onClick={()=>props.setStCart(true)} className="AreaCarrinho">
                        <img src={require('../../../assets/images/Carrinho.png')} />
                        {props.qtCart > 0 &&
                            <div className="areaBdge">
                                {props.qtCart}
                            </div>
                        }
                    </Link>
                    <div className="button" onClick={handleLogout}>Sair</div>
                </div>
            </div>
        </HeaderArea>
    
    );
}

const mapStateToProps = (state) => {
    return{
        listRepresentadasRedux:state.representada.listRepresentada,
        StCart:state.pedidos.StCart,
        qtCart:state.pedidos.qtCart,
        StMenu:state.user.StMenu
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setStMenu:(StMenu)=>dispatch({type:'SET_MENU', payload:{StMenu}}),
        setListRepresentadaRedux:(listRepresentada)=>dispatch({type:'SET_LISTREPRESENTADA', payload:{listRepresentada}}),
        setStCart:(StCart)=>dispatch({type:'SET_STCART', payload:{StCart}}),
        setQtCart:(qtCart)=>dispatch({type:'SET_QTCART', payload:{qtCart}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);