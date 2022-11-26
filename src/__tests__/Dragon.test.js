import store from '../redux/Store';
import { DragonStatus, fetchDragons } from '../redux/dragon/dragonSlice';

describe('Redux store', () => {
  it('should have the correct initial state', () => {
    expect(store.getState()).toEqual({
      dragons: {
        dragon: [],
        status: 'idle',
      },
      rockets: [],
      mission: {
        missions: [],
      },
    });
  });

  it('should fetch Dragon', async () => {
    await store.dispatch(fetchDragons());
    expect(store.getState().dragons.dragon.length).toEqual(2);
  });

  it('should Update DragonStatus', () => {
    store.dispatch(DragonStatus('dragon1'));
    expect(store.getState().dragons.dragon[0].reservation).toEqual(true);
  });
});
