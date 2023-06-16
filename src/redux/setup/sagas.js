import { all } from 'redux-saga/effects';
import ExampleSaga from '../user/saga';

/**

 * @description combine sagas.

 */

export default function* Sagas() {
  yield all([ExampleSaga()]);
}
