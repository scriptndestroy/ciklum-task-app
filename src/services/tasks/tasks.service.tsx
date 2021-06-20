import axios from "axios";
import config from "../../config";
import { Task } from "../../interfaces/Task";
import ApiServices from "../api.services";

export default class TasksService extends ApiServices<Task> {
  URL: string;
  constructor() {
    super();
    this.URL = config.ciklum_api + "Tasks";
  }

  async getTaskStatus() {
    this.onInit();
    return axios
      .get<any[]>(this.URL + '/taskStatus')
      .then((result) => {
        return this.onFinish(result);
      })
      .catch((error) => {
        return this.onFinishError(error);
      });
  }
}
