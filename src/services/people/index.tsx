import axios from '../apis/api-starwars.service';
import {IPeopleResponse} from '../../people/store/people.interfaces';

export const getPeople = async (): Promise<IPeopleResponse> => {
  return axios.get('/people/');
}
