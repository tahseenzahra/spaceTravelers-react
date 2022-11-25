/*eslint-disable*/
import store from '../redux/Store';
import { reserveRocket, getRockets } from '../redux/rockets/rockets';

describe('Redux store', () => {
  it('should have the correct initial state', () => {
    expect(store.getState()).toEqual({
      dragons: {
        dragon: [],
        status: "idle"
      },
      rockets: [],
      mission: {
        missions: [],
      },
    });
  });

  it('should fetch rockets', async () => {
    await store.dispatch(getRockets());
    expect(store.getState().rockets.length).toEqual(4);
  });

  it('should reserve a rocket', () => {
    store.dispatch(reserveRocket(1));
    expect(store.getState().rockets[0].reserve).toEqual(true);
  });
});