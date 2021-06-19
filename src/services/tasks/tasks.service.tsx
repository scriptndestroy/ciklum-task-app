import config from '../../config';
import { Task } from '../../interfaces/Task';
import ApiServices from '../api.services';

export default class HotelService extends ApiServices<Task>{
    URL: string;
    constructor(){
        super();
        this.URL = config.ciklum_api + 'Tasks';
    }

}