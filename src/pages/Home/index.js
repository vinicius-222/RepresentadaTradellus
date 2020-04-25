import React, {useState, useEffect} from 'react';
import { Container } from './styled';
import Loading from '../../components/Loading';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import { isLogged } from '../../helpers/AuthHandler';
import SalatoAPI from '../../helpers/SalatoAPI';

const Home = (props) =>{
    const api = SalatoAPI();

    useEffect(()=>{


        const getQtCartCompra = async () => {
            let jwt = Cookies.get('token');
            const json = await api.getCountCar(jwt);
            props.setqtCart(json.QtCartCompra);
            
            
        }
        if (isLogged()){
            getQtCartCompra();
        }
        
    },[]);

    return(
        <Container>
            <div>Home</div>
        </Container>
    )
} 

const mapStateToProps = (state) => {
    return{
        listRepresentadasRedux:state.representada.listRepresentada
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setListRepresentadaRedux:(listRepresentada)=>dispatch({type:'SET_LISTREPRESENTADA', payload:{listRepresentada}}),
        setqtCart:(qtCart)=>dispatch({type:'SET_QTCART', payload:{qtCart}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Home);