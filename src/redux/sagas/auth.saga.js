import { put, call, takeLatest, all } from 'redux-saga/effects';
import { Container } from 'typedi';
import { AuthService } from '../../services';
// import { Login } from '../../services/auth.service';
import { AuthTypes } from '../types';

const authService = new AuthService();
//Vehicle Sagas
export function* login(action) {
	console.log('in here');
	try {
		const res = yield call(authService.login, action.payload);
		if (res.error) {
			yield put({
				type: AuthTypes.LOGIN_ERROR,
				error: res.message,
			});
		} else {
			yield put({ type: AuthTypes.LOGIN_SUCCESS, data: res });
		}
	} catch (error) {
		yield put({ type: AuthTypes.LOGIN_ERROR, error });
	}
}

export default function* allSaga() {
	yield all([
		//Vehicle
		takeLatest(AuthTypes.LOGIN_REQUEST, login),
	]);
}
