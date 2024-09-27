import React, { useState } from 'react';

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

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
			setEmail('');
			setError('');
			setSuccess(`Test Subscribed email: ${email}`);
		} else {
			setSuccess('');
			setError('Test Error: Please enter a valid email address');
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

				{error && <p className='message-error'>{error}</p>}
				{success && <p className='message-success'>{success}</p>}
			</form>
		</div>
	);
};

export default Subscribe;
