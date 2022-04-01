import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// import { history } from "helpers/history";
// import { frontendUrl } from "urls";

enum StatusCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  "Content-Type": "application/json",
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const auth_type = "JWT";
    const token = localStorage.getItem("accessToken");

    if (token != null) {
      config.headers!.Authorization = `${auth_type} ${token}`;
    }
    return config;
  } catch (error) {
    throw new Error(error as string);
  }
};

export class AxiosApi {
  private instance: AxiosInstance | null = null;

  private get axiosApi(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const axiosInstance = axios.create({
      headers,
    });

    axiosInstance.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        return this.handleError(error);
      }
    );

    this.instance = axiosInstance;
    return axiosInstance;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosApi.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosApi.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosApi.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosApi.put<T, R>(url, data, config);
  }

  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosApi.patch<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.axiosApi.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error: any) {
    const { status } = error.response;
    let apiErrorPrefix = "API Error:";
    let errorMessage = undefined;

    switch (status) {
      case StatusCode.BadRequest: {
        // Handle BadRequest
        errorMessage = `${apiErrorPrefix} BadRequest`;
        break;
      }
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        errorMessage = `${apiErrorPrefix} InternalServerError`;
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        errorMessage = `${apiErrorPrefix} Forbidden`;
        break;
      }
      case StatusCode.NotFound: {
        // Handle NotFound
        errorMessage = `${apiErrorPrefix} NotFound`;
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        errorMessage = `${apiErrorPrefix} Unauthorized`;
        // history.push(frontendUrl.logout);
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        errorMessage = `${apiErrorPrefix} TooManyRequests`;
        break;
      }
    }

    console.error(errorMessage);
    // if (errorMessage) {
    //   snackbarService.showSnackbar(errorMessage, "error", 6000);
    // }

    return Promise.reject(error);
  }
}

export const axiosApi = new AxiosApi();
