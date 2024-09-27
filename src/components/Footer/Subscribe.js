import React, { useState } from 'react';

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [seccess, setSeccess] = useState('');

	const handleInputChange = (e) => {
		setEmail(e.target.value);
	};

	const validateEmail = (email) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateEmail(email)) {
			console.log('Subscribed email:', email);
			setEmail('');
			setError('');
			setSeccess(`Subscribed email: ${email}`);
		} else {
			setError('Please enter a valid email address');
		}
	};

	return (
		<div className='subscribe-container'>
			<form className='subscribe-form' onSubmit={handleSubmit}>
				<input
					type='email'
					className={`email-input ${error ? 'error' : ''}`}
					value={email}
					onChange={handleInputChange}
					placeholder='type your email here...'
				/>

				<button type='submit' className='subscribe-btn'>
					Subscribe
				</button>
			</form>
			{error && <p className='message-error'>{error}</p>}
			{seccess && <p className='message--success'>{seccess}</p>}
		</div>
	);
};

export default Subscribe;
