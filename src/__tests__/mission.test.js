import store from '../redux/Store';
import { missionStatus, loaded } from '../redux/missions/missionSlice';

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

  it('should fetch missions', async () => {
    await store.dispatch(loaded());
    expect(store.getState().mission.missions.length).toEqual(10);
  });

  it('should Update missionStatus', () => {
    store.dispatch(missionStatus('9D1B7E0'));
    expect(store.getState().mission.missions[0].isJoined).toEqual(true);
  });
});
