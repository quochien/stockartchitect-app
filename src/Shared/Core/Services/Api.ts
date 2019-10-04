/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { ApiResponse, ApisauceInstance, create } from "apisauce";
import { AxiosResponse } from "axios";
import dotenvParseVariables from "dotenv-parse-variables";
import config from "react-native-config";

let instance: any = null;
interface IApiProvider {
    // get
}
// eslint-disable-next-line prettier/prettier
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJKd3RTZXJ2ZXIiLCJzdWIiOiIwOTA4MDgyMjE2IiwiZW1haWwiOiJwaHVvbmduZ3V5ZW5AZ21haWwuY29tIiwianRpIjoiNzFhNjA2NjUtYmZkNi00MTdiLWFiZDEtMzQ3Y2VkOGNhNzc4IiwiaWF0IjoxNTY2ODE0Nzg1LCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDdXN0b21lciIsIm5iZiI6MTU2NjgxNDc4NSwiZXhwIjoxNTY2OTAxMTg1LCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAvIn0.qdFU74JQ62PwxFm1fVXs7iew0MGwrV1AQZj1mcCtrzo";
export class ApiProvider implements IApiProvider {
    static getInstance() {
        if (!instance) {
            instance = new ApiProvider();
        }
        return instance;
    }
    apiInstance: ApisauceInstance;
    get Instance() {
        return this.apiInstance;
    }

    constructor() {
        const CONFIG = dotenvParseVariables({ SSL: config.SSL, HOST: config.HOST, PORT: config.PORT });
        this.apiInstance = create({
            baseURL: `${CONFIG.SSL ? "https" : "http"}://${CONFIG.HOST}${CONFIG.PORT ? ":" + config.PORT : ""}/`,
            validateStatus: status => {
                return status >= 200 && status < 400;
            },
        });
        this.apiInstance.addResponseTransform(response => {
            const { status = -1 } = response;
            if (status >= 200 && status < 400) {
                return Promise.resolve();
            }
            return Promise.reject();
        });
    }
    setAuthorizationHeader(token: string) {
        this.Instance.setHeader("Authorization", `Bearer ${token}`);
    }
    removeHeader(key: string) {
        this.Instance.deleteHeader(key);
    }
    public get(endpoint, params?: any) {
        return this.handleResponse(this.apiInstance.get(endpoint, params));
    }
    public post(endpoint, params?: any) {
        return this.handleResponse(this.apiInstance.post(endpoint, params));
    }
    public put(endpoint, params?: any) {
        return this.handleResponse(this.apiInstance.put(endpoint, params));
    }
    private handleResponse(request: Promise<ApiResponse<AxiosResponse, any>>): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            return request.then(res => {
                if (res.ok) {
                    const { status = -1 } = res;
                    if (status >= 200 && status < 400) {
                        return resolve(res.data);
                    }
                }
                reject(res);
            });
        });
    }
}
export default ApiProvider.getInstance();
