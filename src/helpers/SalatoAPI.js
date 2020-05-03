import Cookies from 'js-cookie';
import qs from 'qs';
import { doLogout } from '../helpers/AuthHandler';

//const URL = 'http://192.168.1.65';
const URL = 'http://138.99.15.234:20003';
const BASEAPI = URL+'/backEndSalato/';
export const BASEAPIIMAGE = URL+'/images/';

const apiFetchFile = async (endpoint, body) => {
    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        body
    });
    const json = await res.json();

    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const apiFetchPost = async (endpoint, body) => {
    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }
    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });

    const json = await res.json();
    if(json.error) {
        doLogout();
        window.location.href = '/Login';
        return;
    }

    return json;
}
const apiFetchGet = async (endpoint, body = []) => {
    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();
    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const apiFetchGetEnd = async (endpoint, body = []) => {
   
    const res = await fetch(`${endpoint}`);
    const json = await res.json();

    return json;
}
const apiFetchDelete = async (endpoint, body = []) => {
    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const apiFetchPut = async (endpoint, body = []) => {

    if(!body.jwt) {
        let jwt = Cookies.get('token');
        if(jwt) {
            body.jwt = jwt;
        }
    }

    if(!body.hash) {
        let hash =  Cookies.get('hash');
        if(hash) {
            body.hash = hash;
        }
    }
    const res = await fetch(BASEAPI+endpoint, {
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(body)
    });
    
    const json = await res.json();
    if(json.error) {
        doLogout();
        window.location.href =  '/Login';
        return;
    }

    return json;
}
const SalatoAPI = {
    login:async (email, pass) => {
        const json = await apiFetchPost(
            '/user/getloginRepresentante', 
            {email,pass}
        )
        return json;
    },

    newLogin:async (NmPessoa, DsLogin, pass) => {
        const json = await apiFetchPost(
            '/user/new_recordRepresentante', 
            {NmPessoa, DsLogin, pass}
        )
        return json;
    },

    getProdutoBanner:async (NmProduto, IdPreco, per_pages, StPaginaInicial, offset, idGrupoProduto, IdProduto) => {
        const json = await apiFetchGet(
            '/pedidos/getProdutoBanner',
            {NmProduto, IdPreco, per_pages, StPaginaInicial, offset, idGrupoProduto, IdProduto}
        )
        return json;
    },

    getImagesBanner:async () => {
        const json = await apiFetchGet(
            '/pedidos/getInfoTelaPrincipal'
        )

        return json;
    },

    senEmail:async (NmPessoa, DsEmail, DsMsg, DsAssunto) => {
        const json = await apiFetchPost(
            '/user/sendemail',
            {NmPessoa, DsEmail, DsMsg, DsAssunto}
        )
        return json;
    },

    sendEmailTradellus:async (NmPessoa, DsEmail, DsMsg, DsAssunto) => {
        const json = await apiFetchPost(
            '/user/sendemail',
            {NmPessoa, DsEmail, DsMsg, DsAssunto}
        )
        return json;
    },

    getGrupoProduto:async () => {
        const json = await apiFetchGet(
            '/pedidos/getGrupoProduto'
        )
        return json;
    },

    getCarCompra:async (jwt) => {
        const json = await apiFetchGet(
            '/pedidos/getCarCompra',
            {jwt}
        )
        return json;
    },

    insertCarCompra:async (jwt, IdProduto, QtProduto) => {
        const json = await apiFetchPost(
            '/pedidos/InsertCarCompras',
            {jwt, IdProduto, QtProduto}
        )
        return json;
    },

    deleteCarCompra:async (jwt, IdProduto) => {
        const json = await apiFetchDelete(
            '/pedidos/deleteCarCompra',
            {jwt, IdProduto}
        )
        return json;
    },

    updateCarCompra:async (jwt, IdProduto, QtProduto) => {
        const json = await apiFetchPut(
            '/pedidos/InsertCarCompras',
            {jwt, IdProduto, QtProduto}
        )

        return json;
    },

    getCountCar:async (jwt) => {
        const json = await apiFetchGet(
            '/pedidos/InsertCarCompras',
            {jwt}
        )
        return json;
    },

    getEndereco:async (cep) => {
        const json = await apiFetchGetEnd(
            'http://cep.republicavirtual.com.br/web_cep.php?cep=' + cep +'&formato=json'
        )
        return json;
    },

    getRepresentadas:async () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                let json = {Itens:[
                    {IdRepresentada:1, active:false, NmRepresentada:'Fabrica de Utencilios Domesticos LTDA', img:'https://www.padariaxodo.com.br/images/kitfesta.png'},
                    {IdRepresentada:2, active:true, NmRepresentada:'Distribuidora de Bebidas Sol ME', img:'https://www.vitrinerio.com.br/imagens/anuncios/280816032509/Buffalo_Grill_Porcao_Bolinho_Bacalhau.png'},
                    {IdRepresentada:3, active:false, NmRepresentada:'Abatedouro Gomes Sa LTDA', img:'https://www.vitrinerio.com.br/imagens/anuncios/280816032509/Buffalo_Grill_Porcao_Bolinho_Bacalhau.png'},
                    {IdRepresentada:4, active:false, NmRepresentada:'Ultilicasa Ultilidades do lar EIRELI', img:'https://pngimage.net/wp-content/uploads/2018/06/sobremesas-png-1.png'},
                    {IdRepresentada:5, active:false, NmRepresentada:'Industria de Produtos Natubras LTDA', img:'https://www.bonabessa.com.br/lojavirtual/96-thickbox_default/torta-bombom.jpg'},
                    {IdRepresentada:6, active:false, NmRepresentada:'AquaFutura Agua Mineral LTDA', img:'https://bagatela.pizza/bagatela/wp-content/uploads/bfi_thumb/refrigerantes-1-386me3f6bfb75v6j0i3ocq.png'}
                ]};
                resolve(json);
            }, 1000)
        })
    },

    getInfoCliente:async (NmPessoa, jwt) => {
        const json = await apiFetchGet(
            '/pedidos/getInfoCliente',
            {jwt, NmPessoa}
        )
        return json;
    },

    setPedidoDeVenda:async(IdPedidoDeVenda, CdChamada, IdPessoa, DtPedido, DtEntrega, IdEmpresa, VlPedido,TpPedido, IdCondicaoPagamento, VlTotalPedido, DsObservacao, jwt, itensPedido) => {
        const json = await apiFetchPost(
            '/pedidos/setPedidos',
            {
                "IdPedidoDeVenda":IdPedidoDeVenda,
                "CdChamada":CdChamada,
                "IdPessoa":IdPessoa,
                "DtPedido":DtPedido,
                "DtEntrega":DtEntrega,
                "IdEmpresa":IdEmpresa,
                "VlPedido":VlPedido,
                "TpPedido":TpPedido,
                "IdCondicaoPagamento":IdCondicaoPagamento,
                "VlTotalPedido":VlTotalPedido,
                "itensPedido":itensPedido,
                "DsObservacao":DsObservacao,
                "jwt":jwt
            }
        )
        console.log(json);
        return json;
    },

    getCondicaoPagamento:async () =>{
        const json = await apiFetchGet(
            '/pedidos/getPagamento',
            {}
        )
        return json;
    },

    getCode:async(TableName, FieldName) =>{
        const json = await apiFetchGet(
            '/pedidos/GetCode',
            {TableName,FieldName}
        )
        return json;
    },

    getPedidosDeVenda:async(idPessoaVendedor, dtinicialEmi, dtfinalEmi, dtinicialEnt, dtfinalEnt,TpPedido, NmPessoa, per_page, excludes, jwt)=>{
        const json = await apiFetchGet(
            '/pedidos/getPedidoDeVenda',
            {idPessoaVendedor,
            dtinicialEmi,
            dtfinalEmi,
            dtinicialEnt,
            dtfinalEnt,
            TpPedido,
            NmPessoa,
            per_page,
            excludes,
            jwt}
        )
        return json;
    },

    addProduto:async(NmProduto,IdGrupoProduto,QtEstoque,IdUnidadeVenda,TpProduto,StAtivo,LinckImage,DsTitulo,DsProdutoSite,VlPreco)=>{
        const json = await apiFetchPost(
            '/produto/handleProdutos',
            {
                NmProduto,
                IdGrupoProduto,
                QtEstoque,
                IdUnidadeVenda,
                TpProduto,
                StAtivo,
                LinckImage,
                DsTitulo,
                DsProdutoSite,
                VlPreco
            }
        )
        return json;
    },

    updateProduto:async(IdProduto, NmProduto,IdGrupoProduto,QtEstoque,IdUnidadeVenda,TpProduto,StAtivo,LinckImage,DsTitulo,DsProdutoSite,VlPreco)=>{
        const json = await apiFetchPut(
            '/produto/handleProdutos',
            {   
                IdProduto,
                NmProduto,
                IdGrupoProduto,
                QtEstoque,
                IdUnidadeVenda,
                TpProduto,
                StAtivo,
                LinckImage,
                DsTitulo,
                DsProdutoSite,
                VlPreco
            }
        )
        return json;
    },

    deleteProduto:async(IdProduto)=>{
        const json = await apiFetchDelete(
            '/produto/handleProdutos',
            {IdProduto}
        )
        return json;
    },

    getProduto:async(jwt, hash, NmProduto, IdPreco, per_pages, StPaginaInicial, offset, idGrupoProduto, IdProduto)=>{
        const json = await apiFetchGet(
            '/produto/handleProdutos',
            {   
                jwt,
                hash,
                NmProduto, 
                IdPreco, 
                per_pages, 
                StPaginaInicial, 
                offset, 
                idGrupoProduto, 
                IdProduto
            }
        )
        return json;
    },

    addCliente:async(NmPessoa,CdCPF_CNPJ,DsPessoaContatoCobranca,DsEmailCobranca,DsTeleFoneCobranca,DsFaxCobranca,DtCadastro,StAtivo,VlLimiteCredito,StInadimplente,StVendaBloqueada)=>{
        const json = await apiFetchPost(
            '/cliente/handleCliente',
            {
                NmPessoa,
                CdCPF_CNPJ,
                DsPessoaContatoCobranca,
                DsEmailCobranca,
                DsTeleFoneCobranca,
                DsFaxCobranca,
                DtCadastro,
                StAtivo,
                VlLimiteCredito,
                StInadimplente,
                StVendaBloqueada,
            }
        )
        return json;
    },

    updateCliente:async(IdPessoa, NmPessoa,CdCPF_CNPJ,DsPessoaContatoCobranca,DsEmailCobranca,DsTeleFoneCobranca,DsFaxCobranca,DtCadastro,StAtivo,VlLimiteCredito,StInadimplente,StVendaBloqueada)=>{
        const json = await apiFetchPut(
            '/cliente/handleCliente',
            {
                IdPessoa,
                NmPessoa,
                CdCPF_CNPJ,
                DsPessoaContatoCobranca,
                DsEmailCobranca,
                DsTeleFoneCobranca,
                DsFaxCobranca,
                DtCadastro,
                StAtivo,
                VlLimiteCredito,
                StInadimplente,
                StVendaBloqueada,
            }
        )
        return json;
    },

    deleteCliente:async(IdPessoa)=>{
        const json = await apiFetchDelete(
            '/cliente/handleCliente',
            {
                IdPessoa
            }
        )
        return json;
    },
    
    getCliente:async(NmPessoa)=>{
        const json = await apiFetchGet(
            '/cliente/handleCliente',
            {
                NmPessoa
            }
        )
        return json;
    }
}

export default () => SalatoAPI;