import {IPeopleModel} from '../people/store/people.interfaces';
import * as peopleService from '../services/people';

export interface IAppInjections {
  peopleService: typeof peopleService
}

export interface IAppStore {
  injections: IAppInjections
}

export interface IAppModels {
  people: IPeopleModel;
}
