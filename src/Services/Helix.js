import axios from 'axios'

const ServerUrl = '34.70.244.238'

const HttpConfig = {
    Protocol: 'http',
    Url: ServerUrl,
    Port: '1026'
}


const HELIX_HTTP = axios.create({
    /* baseURL: `${HttpConfig.Protocol}:/${HttpConfig.Url}/:${HttpConfig.Port}`, */
    baseURL: 'http://34.70.244.238:1026',
    headers: {
        'Content-Type':'application/json'
    }
})


const CreateOrUPdate = '/v2/op/update'
const Entities = '/v2/entities'

async function GetNextId(type) {
    try {
        const response = await HELIX_HTTP.get(`${Entities}/?type=${type}`)
        if (response.status == 200) {
            if (response.data.length > 0) {
                const split = response.data[response.data.length-1].id.split(':')
                let nId = parseInt(split[3]) 
                nId++              
                const sId = ("000" + nId).slice(-3)
                return `urn:ngsi-ld:${type}:${sId}`
            } else {
                return `urn:ngsi-ld:${type}:001`
            }
        }
    } catch (_err) {
        console.log(_err)
        return null
    }
    
}



const GetNextProduct = GetNextId("Product");
const GetNextClient = GetNextId("Client")
const GetNextPurchase = GetNextId("Purchase")

export default HELIX_HTTP

export { HttpConfig, CreateOrUPdate, Entities, GetNextProduct, GetNextClient, GetNextPurchase }