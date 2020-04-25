import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { isLogged } from './helpers/AuthHandler';

import { Template, SubTemplate, Body } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import MenuLateral from './components/partials/MenuLateral';
import Routes from './Routes';


const Page = (props) => {
    let logged = isLogged();
    return(
        <BrowserRouter>

                <SubTemplate>
                    {logged && 
                        <MenuLateral/>
                    }
                    <Body>
                        {logged && 
                            <Header />
                        }
                        <Routes />
                    </Body>
                </SubTemplate>
                {logged &&
                    <Footer />}

     </BrowserRouter>
   )
}
const mapStateToProps = (state) => {
  return{
    user:state.user
  };
}

const mapDispatchToProps = (dispatch) =>{
  return{

  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);