import axios from 'axios'

export const getDolarhoy = ()=> {
   
   return axios.get('https://n9i7orqbw5.execute-api.us-east-1.amazonaws.com/Prod/trm').then((res)=>{
   
            return Number(res.data.valor.split('.')[0]).toLocaleString()
    })
}