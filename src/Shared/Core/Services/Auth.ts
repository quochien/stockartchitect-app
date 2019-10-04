import { AsyncStorage } from "react-native";
import config from "react-native-config";
import { AppConstants } from "../../../Entities/Constants";
import ApiProvider, { ApiProvider as Api } from "./Api";
let instance: AuthServices;
export class AuthServices {
    END_POINT_VERIFY = "security/verify/";
    END_POINT_LOGIN = "security/loginM";
    END_POINT_REGISTER = "security/register";
    END_POINT_REFRESH_TOKEN = "security/renewToken";
    BASE_URL = config.HOST_AUTH; //0908082216
    apiService: Api;
    static getInstance() {
        if (!instance) {
            instance = new AuthServices();
        }
        return instance;
    }
    constructor() {
        this.apiService = ApiProvider;
    }
    setHeaderAuthorization(token) {
        if (token) this.apiService.setAuthorizationHeader(token);
    }
    removeHeaderAuthorization() {
        this.apiService.removeHeader("Authorization");
    }
    async storeToken(token) {
        return await AsyncStorage.setItem(AppConstants.TOKEN, token);
    }
    async getStoredToken() {
        return await AsyncStorage.getItem(AppConstants.TOKEN);
    }
    async remember() {
        return await AsyncStorage.setItem(AppConstants.IS_LOGGED_IN, JSON.stringify(true));
    }
    clearToken() {
        AsyncStorage.removeItem(AppConstants.TOKEN);
        AsyncStorage.removeItem(AppConstants.IS_LOGGED_IN);
    }
    async verifyAccount(phonenumber) {
        const prevBaseUrl = this.apiService.Instance.getBaseURL();
        this.apiService.Instance.setBaseURL(this.BASE_URL);
        try {
            const res = await this.apiService.get(`${this.END_POINT_VERIFY}${phonenumber}`);
            this.apiService.Instance.setBaseURL(prevBaseUrl);
            return res;
        } catch (ex) {
            console.log(ex);
            this.apiService.Instance.setBaseURL(prevBaseUrl);
            throw ex;
        }
    }
    async login(phonenumber, password) {
        const prevBaseUrl = this.apiService.Instance.getBaseURL();
        this.apiService.Instance.setBaseURL(this.BASE_URL);
        try {
            const res = await this.apiService.post(`${this.END_POINT_LOGIN}`, {
                email: phonenumber,
                password: password,
            });
            this.apiService.Instance.setBaseURL(prevBaseUrl);
            return res;
        } catch (ex) {
            console.log(ex);
            this.apiService.Instance.setBaseURL(prevBaseUrl);
            throw ex;
        }
    }
    async register(phonenumber, password, confirmPassword) {
        const prevBaseUrl = this.apiService.Instance.getBaseURL();
        this.apiService.Instance.setBaseURL(this.BASE_URL);
        try {
            const res = await this.apiService.post(`${this.END_POINT_REGISTER}`, {
                UserName: phonenumber,
                Password: password,
                ConfirmPassword: confirmPassword,
                PhoneNumber: phonenumber,
            });
            return res;
        } catch (ex) {
            throw ex;
        } finally {
            this.apiService.Instance.setBaseURL(prevBaseUrl);
        }
    }
    async refreshToken(token: string) {
        const prevBaseUrl = this.apiService.Instance.getBaseURL();
        this.apiService.Instance.setBaseURL(this.BASE_URL);
        try {
            const res = await this.apiService.post(`${this.END_POINT_REFRESH_TOKEN}?jwtToken=${token}`);
            return res;
        } catch (ex) {
            throw ex;
        } finally {
            this.apiService.Instance.setBaseURL(prevBaseUrl);
        }
    }
}
export default AuthServices.getInstance();
