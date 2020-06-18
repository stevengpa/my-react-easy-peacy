import {IPeopleModel} from './people.interfaces';
import {action, thunk} from 'easy-peasy';

export const peopleModel: IPeopleModel = {
  count: 0,
  peopleList: [],
  error: null,
  isLoading: false,
  setIsLoading: action((state, isLoading): void => {
    state.isLoading = isLoading;
  }),
  getPeopleInit: thunk(async (actions, _, {injections}) => {
    actions.setIsLoading(true);
    
    const {peopleService} = injections;
    await peopleService.getPeople()
      .then(response => actions.getPeopleSuccess(response))
      .catch(error => actions.getPeopleFail(error));
  }),
  getPeopleSuccess: action((state, peopleResponse) => {
    const {peopleList, count} = peopleResponse;
    state.peopleList = peopleList;
    state.count = count;
    state.isLoading = false;
  }),
  getPeopleFail: action((state, peopleFail) => {
    state.error = peopleFail;
    state.isLoading = false;
  })
}
