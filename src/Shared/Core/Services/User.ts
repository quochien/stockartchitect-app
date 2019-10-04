import ApiInstance, { ApiProvider } from "./Api";
let instance: UserService;
export class UserService {
    apiServices: ApiProvider;
    BASE_URL = "http://apicustomer.isolution.xyz/";
    END_POINTS = "customermobile/Profile";
    END_POINTS_UPDATE = "customermobile/Profile";
    static getInstance() {
        if (!instance) {
            instance = new UserService();
        }
        return instance;
    }
    constructor() {
        this.apiServices = ApiInstance;
    }
    fetch() {
        const baseURL = this.apiServices.Instance.getBaseURL();
        this.apiServices.Instance.setBaseURL(this.BASE_URL);
        return this.apiServices
            .get(`${this.END_POINTS}`)
            .then(res => {
                debugger;
                return res;
            })
            .catch(error => {
                // console.log(error);
                throw error;
                // return error;
            })
            .finally(() => {
                this.apiServices.Instance.setBaseURL(baseURL);
            });
    }
    update(fields) {
        const baseURL = this.apiServices.Instance.getBaseURL();
        this.apiServices.Instance.setBaseURL(this.BASE_URL);
        this.apiServices.Instance.setHeader("c")
        debugger;
        return this.apiServices
            .put(`${this.END_POINTS_UPDATE}`, { ...fields })
            .then(res => {
                return res;
            })
            .catch(error => {
                // console.log(error);
                throw error;
                // return error;
            })
            .finally(() => {
                this.apiServices.Instance.setBaseURL(baseURL);
            });
    }
}
export default UserService.getInstance();
