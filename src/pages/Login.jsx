import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Alert } from './Alert';

const login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { login, loginWithGoogle, resetPassword } = useAuth();
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await login(user.email, user.password);
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	const handleChange = ({ target: { value, name } }) =>
		setUser({ ...user, [name]: value });

	const handleGoogleSignin = async () => {
		try {
			await loginWithGoogle();
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	const handleResetPassword = async e => {
		e.preventDefault();
		if (!user.email) return setError('Write an email to reset password');
		try {
			await resetPassword(user.email);
			setError('We sent you an email. Check your inbox');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div>
			{error && <Alert message={error} />}

			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						onChange={handleChange}
						placeholder='youremail@company.tld'
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						onChange={handleChange}
						placeholder='*************'
					/>
				</div>

				<div>
					<button type='submit'>Sign In</button>
					<a href='#!' onClick={handleResetPassword}>
						Forgot Password?
					</a>
				</div>
			</form>
			<button onClick={handleGoogleSignin}>Google login</button>
			<p>
				Dont have an account?
				<Link to='/register'>Register</Link>
			</p>
		</div>
	);
};

export default login;
