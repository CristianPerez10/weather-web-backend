import axios, { AxiosHeaders, AxiosRequestConfig, Method } from "axios";

// export interface IApiCaller {
//   url: string;
//   headers: AxiosHeaderValue;
//   method?: Method;
//   params?: Object;
// }

export class apiCaller {
  private key: string;

  constructor() {
    this.key = process.env.API_KEY;
  }

  public async get({ url, headers, params }: AxiosRequestConfig) {
    return axios.request({
      method: "GET",
      url,
      headers: {
        ...headers,
        "X-RapidAPI-Key": this.key,
      },
      params,
    });
  }
}
