import {createStore} from 'easy-peasy';

import * as peopleService from '../services/people';
import {appModel} from './app.store.model';
import {IAppInjections, IAppModels} from './app.store.interfaces';

export const store = createStore<IAppModels, IAppInjections>(appModel, {
  injections: {
    peopleService
  }
})
