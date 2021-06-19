import axios from "axios";
import { store } from "../redux/store";
import { UIActions } from "../redux/ui/ui.action";
import config from "../config";

export default class ApiServices<T> {
  URL: string;

  constructor() {
    this.URL = config.ciklum_api;
  }

  setLoading() {
    store.dispatch(UIActions.loading());
  }

  clearLoading() {
    store.dispatch(UIActions.loadingClear());
  }

  onInit() {
    this.setLoading();
  }

  onFinish(result: any, noLoading?: boolean) {
    if (!noLoading) {
      this.clearLoading();
    }
    return result.data;
  }

  onFinishError(error: any, noLoading?: boolean) {
    if (!noLoading) {
      this.clearLoading();
    }
    //store.dispatch(UIActions.alertError(error));
    throw error;
  }

  async getAll() {
    this.onInit();
    return axios
      .get<T[]>(this.URL)
      .then((result) => {
        return this.onFinish(result);
      })
      .catch((error) => {
        return this.onFinishError(error);
      });
  }

  async create(data: any) {
    this.onInit();
    return axios
      .post<T>(`${this.URL}`, data)
      .then((result) => {
        return this.onFinish(result);
      })
      .catch((error) => {
        return this.onFinishError(error);
      });
  }

  async update(data: any) {
    this.onInit();
    return axios
      .put<T>(`${this.URL}`, data)
      .then((result) => {
        return this.onFinish(result);
      })
      .catch((error) => {
        return this.onFinishError(error);
      });
  }
}
