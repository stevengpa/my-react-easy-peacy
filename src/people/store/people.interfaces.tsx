import {Action, Thunk, ThunkOn} from 'easy-peasy';
import {IAppInjections} from '../../store/app.store.interfaces';

export interface IPeople {
  name: string;
  height: number;
  birth_year: string;
  gender: string;
}

export interface IPeopleResponse {
  count: number;
  peopleList: IPeople[];
}

export interface IPeopleFail {
  error: Error | null
}

export interface IPeopleModel extends IPeopleResponse, IPeopleFail {
  isLoading: boolean;
  setIsLoading: Action<IPeopleModel, boolean>;
  getPeopleInit: Thunk<IPeopleModel, null, IAppInjections>;
  getPeopleSuccess: Action<IPeopleModel, IPeopleResponse>;
  getPeopleFail: Action<IPeopleModel, Error>;
}
