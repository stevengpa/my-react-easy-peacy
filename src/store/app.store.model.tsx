import { peopleModel } from '../people/store/people.model';
import {IAppModels} from './app.store.interfaces';

export const appModel: IAppModels = {
  people: peopleModel
}
