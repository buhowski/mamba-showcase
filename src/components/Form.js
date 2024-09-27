import React, { useState } from 'react';
import '../styles/forms.scss'; // Import the CSS file

const SimpleForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		budget: '',
		message: '',
		subscribe: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<section className='collaborate' id='collaborate'>
			<div className='collaborate-info'>
				<h2 className='h2'>
					Executed by a fully in-house team designed to enhance yours.
				</h2>
			</div>

			<div className='collaborate-form'>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-group'>
						<label>Name</label>
						<input
							type='text'
							name='name'
							value={formData.name}
							onChange={handleChange}
						/>
					</div>

					<div className='form-group'>
						<label>Business Email</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
						/>
					</div>

					<div className='form-group'>
						<label>Budget</label>

						<div className='custom-select'>
							<select name='budget' value={formData.budget} onChange={handleChange}>
								<option value=''>Select option</option>
								<option value='Low'>$1,000 - $5,000</option>
								<option value='Medium'>$5,000 - $10,000</option>
								<option value='High'>$10,000+</option>
							</select>
						</div>
					</div>

					<div className='form-group'>
						<label>Message</label>
						<textarea name='message' value={formData.message} onChange={handleChange} />
					</div>

					<button type='submit' className='submit-btn'>
						SEND A MESSAGE
					</button>

					<div className='form-group form-checkbox'>
						<label>
							<input
								type='checkbox'
								name='subscribe'
								checked={formData.subscribe}
								onChange={handleChange}
							/>
							Subscribe to our newsletter
						</label>
					</div>
				</form>
			</div>
		</section>
	);
};

export default SimpleForm;
