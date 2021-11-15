import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from './redux/actions';

function App() {
	const [ph, setPh] = useState('');
	const [pw, setPw] = useState('');
	const dispatch = useDispatch();
	// const token = useSelector((state) => state.auth.user.token);
	// console.log(token);
	const submit = () => {
		console.log({ phone: ph, password: pw });
		dispatch(AuthActions.login({ phone: ph, password: pw }));
	};
	return (
		<div className='App'>
			{/* {token} */}
			<input
				type='text'
				value={ph}
				onChange={(e) => setPh(e.target.value)}
			/>
			<input
				type='text'
				value={pw}
				onChange={(e) => setPw(e.target.value)}
			/>
			<button onClick={submit}>Submit</button>
		</div>
	);
}

export default App;
