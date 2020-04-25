import React, { useState, useEffect } from 'react';
import SalatoAPI from '../../helpers/SalatoAPI';
import Cookies from 'js-cookie';
import Loading from '../../components/Loading';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import {parseISO, format} from 'date-fns';
import dateFnsFormat from 'date-fns/format'; 
import dateFnsParse from 'date-fns/parse';
import { 
        PageArea
    } from './styled';

const Pedidos = (props) => {
    const API = SalatoAPI();
    const [Pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [idPessoaVendedor, setidPessoaVendedor] = useState(' ');
    const [dtinicialEmi, setdtinicialEmi] = useState('');
    const [dtfinalEmi, setdtfinalEmi] = useState('');
    const [dtinicialEnt, setdtinicialEnt] = useState('');
    const [dtfinalEnt, setdtfinalEnt] = useState('');
    const [TpPedido, setTpPedido] = useState('');  
    const [NmPessoa, setNmPessoa] = useState('');
    const [per_page, setper_page] = useState(100);
    const [excludes, setexcludes] = useState('');
    const [VlTotalPedidos, setVlTotalPedidos] = useState(0);

    const getClientes = async (e) =>{
        e.preventDefault();
        setLoading(true);

        setTimeout(async()=>{
            let jwt = Cookies.get('token');
            const json = await API.getPedidosDeVenda(
                idPessoaVendedor,
                dtinicialEmi,
                dtfinalEmi,
                dtinicialEnt,
                dtfinalEnt,
                TpPedido,
                NmPessoa,
                per_page,
                excludes,
                jwt)
            setPedidos(json.PedidoDeVenda);
            setVlTotalPedidos(parseFloat(json.VlPedido).toFixed(2));
            setLoading(false);
        },1);
    }   

    const handleDtFinal = (str, format, locale) =>{
        let dt = parseDate(str, format, locale);
        if (dt){
            setdtfinalEmi(formatDate(dt, 'yyyy-LL-dd', locale));
        }
    }

    const handleDtInicio = (str, format, locale) =>{
        let dt = parseDate(str, format, locale);
        if(dt){
            setdtinicialEmi(formatDate(dt, 'yyyy-LL-dd', locale));
        }
    }
    
    const parseDate = (str, format, locale) => {
        const parsed = dateFnsParse(str, format, new Date(), { locale });
        if (DateUtils.isDate(parsed)) {
            return parsed;
        }
        return undefined;
    }

    const formatDate = (date, format, locale) => {
        return dateFnsFormat(date, format, { locale });
    }

    const handleData = (i) => {
        let x = parseISO(i);
        return format(x,FORMAT );
    }

    const FORMAT = 'dd/LL/yyyy';
    return(
        <PageArea>
            <div className="AreaPesquisa">
                <form onSubmit={getClientes}>
                    <div className="AreaDsPesquisa">
                        <input 
                            className="InputNmPessoa"
                            value={NmPessoa}
                            onChange={e=>setNmPessoa(e.target.value)}
                            type="text"
                            placeholder="Digite um cliente para pesquisa"
                        />
                    </div>
                    <div className="AreaDatas">
                        <div className="DateInicio">
                            <DayPickerInput
                                readOnly
                                formatDate={formatDate}
                                format={FORMAT}
                                parseDate={handleDtInicio}
                                placeholder="Data Inicio"
                                dayPickerProps={{
                                    weekdaysShort:['Dom', 'Seg', 'Ter', 'Qua','Qui','Sex','Sab'],
                                    months:['Janeiro','Fevereiro','Marco','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembbro']
                                }}
                            />
                        </div>
                        <div className="DateInicio">
                            <DayPickerInput
                                readOnly
                                formatDate={formatDate}  
                                format={FORMAT}
                                parseDate={handleDtFinal}
                                placeholder="Data Final"
                                dayPickerProps={{
                                    weekdaysShort:['Dom', 'Seg', 'Ter', 'Qua','Qui','Sex','Sab'],
                                    months:['Janeiro','Fevereiro','Marco','Abril','Maio','Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembbro'],
                                    className:"AreaPic"
                                }}
                            />
                        </div>
                    </div>
                    <div className="AreaBtns">
                        <div className="BtnAcoes" onClick={()=>setTpPedido('T')} style={{backgroundColor: TpPedido === 'T' ? '#CD3333' : ''}}>
                            Atendidos
                        </div>
                        <div className="BtnAcoes" onClick={()=>setTpPedido('A')} style={{backgroundColor: TpPedido === 'A' ? '#CD3333' : '', marginLeft:2, marginRight:2}}>
                            Nao Atendidos
                        </div>
                        <div className="BtnAcoes" onClick={()=>setTpPedido('')} style={{backgroundColor: TpPedido === '' ? '#CD3333' : ''}}>
                            Ambos
                        </div>
                    </div>
                    <button>Pesquisar</button>
                </form>
            </div>
            <div className="AreaListaCliente">
                <div className="AreaListaCliente AreaListaCliente--AreaItems">
                    <div className="AreaListaCliente AreaListaCliente--Topo">
                        <h3>Pedidos</h3>
                        <div className="AreaAdd">
                            <img src={require('../../assets/images/adicionar.png')}/>
                        </div>
                    </div>
                    <div className="AreaLista">
                        {loading &&
                            <div className="AreaLoanding">
                                 <Loading color="#00008B"/>
                            </div>
                        }

                        {Pedidos.length !== 0 ?
                            Pedidos.map((i,k)=>
                            <div className="ListaClientes" >
                                <div className="ListaClientes--AreaNmPessoa">{i.NmPessoa}</div>
                                <div className="ListaClientes ListaClientes--AreaDetails">
                                    <div className="ListaClientes ListaClientes--AreaInfo">
                                        <div>
                                            {handleData(i.DtPedido)}
                                        </div>
                                        <div style={{color: i.TpPedido === 'T' ? '#2E8B57' : '#CD3333', marginRight:10}}>
                                            {i.TpPedido === 'T' ? 'Atendido' : 'Não Atendido'}
                                        </div>    
                                        <div>
                                            {`R$ ${parseFloat(i.VlPedido).toFixed(2)}`}
                                        </div>
                                    </div>
                                    <div className="ListaClientes ListaClientes--AreaButton">
                                        <div>
                                            <img src={require('../../assets/images/editar.png')}/>
                                        </div>
                                        <div>
                                            <img src={require('../../assets/images/trash.png')}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ):''}
                    </div>
                </div>
            </div>
            <div className="AreaRodape">
                {`R$ ${VlTotalPedidos}`}
            </div>
        </PageArea>
    )
}

export default Pedidos;