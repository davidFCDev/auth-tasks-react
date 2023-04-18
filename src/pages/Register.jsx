import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Register = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { signup } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState('');

	const handleChange = ({ target: { name, value } }) => {
		setUser({
			...user,
			[name]: value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await signup(user.email, user.password);
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div>
			{error && <p>{error}</p>}

			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					placeholder='youremail@gmail.com'
					onChange={handleChange}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					placeholder='**********'
					onChange={handleChange}
				/>

				<button type='submit'>Register</button>
			</form>
		</div>
	);
};

export default Register;
