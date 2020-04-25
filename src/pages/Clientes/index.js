import React, { useState, useEffect } from 'react';
import SalatoAPI from '../../helpers/SalatoAPI';
import Cookies from 'js-cookie';
import Loading from '../../components/Loading';
import { 
            PageArea
        } from './styled';

let Timer = null;
const Clientes = (props) => {
    const API = SalatoAPI();
    const [DsSearch, setDsSearch] = useState('');
    const [Clientes, setCliente] = useState('');
    const [loading, setLoading] = useState(false);

    const getClientes = async (e) =>{
        e.preventDefault();
        let jwt = Cookies.get('token');
        setLoading(true);

        setTimeout(async()=>{
            const json = await API.getInfoCliente(
                DsSearch,
                jwt
            )
            setCliente(json.Pessoa);
            setLoading(false);
        },1000);
    }   

    return(
        <PageArea>
            <div className="AreaPesquisa">
                <form onSubmit={getClientes}>
                    <input 
                        value={DsSearch}
                        onChange={e=>setDsSearch(e.target.value)}
                        type="text"
                        placeholder="Digite um cliente para pesquisa"
                    />
                    <button>Pesquisar</button>
                </form>
            </div>
            <div className="AreaListaCliente">
                <div className="AreaListaCliente AreaListaCliente--AreaItems">
                    <div className="AreaListaCliente AreaListaCliente--Topo">
                        <h3>Cadastro de Clientes</h3>
                    </div>
                    <div className="AreaLista">
                        {loading &&
                            <div className="AreaLoanding">
                                 <Loading color="#00008B"/>
                            </div>
                        }

                        {Clientes.length !== 0 ?
                            Clientes.map((i,k)=>
                            <div className="ListaClientes" >
                                <div className="ListaClientes--AreaNmPessoa">{i.NmPessoa}</div>
                                <div className="ListaClientes ListaClientes--AreaButton">
                                    <div>
                                        <img src={require('../../assets/images/editar.png')}/>
                                    </div>
                                    <div>
                                        <img src={require('../../assets/images/trash.png')}/>
                                    </div>
                                </div>
                            </div>
                        ):''}
                    </div>
                </div>
            </div>
        </PageArea>
    )
}

export default Clientes;