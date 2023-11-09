import axios from "axios";
class Webservice{
    getProductData(url){
        return axios.get(url)
    }
}

export default new Webservice;