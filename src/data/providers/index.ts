import axios from "axios";

const Api = axios.create({
    //ip especial para android studio. para rodar via qr-code em aparelho android, alterar para o ip fisico da máquina.
    // http://10.0.2.2:8080/api/v1
    baseURL: 'http://10.0.2.2:8080/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default Api;