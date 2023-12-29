'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PhoneInput, {
	isValidPhoneNumber,
	formatPhoneNumber,
	formatPhoneNumberIntl,
} from 'react-phone-number-input';

import 'react-phone-number-input/style.css';

function ClientForm() {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const router = useRouter();
	const handleSubmit = e => {
		e.preventDefault();
		if (!isValidPhoneNumber(phoneNumber)) return;
		const data = {
			name: name,
			phoneNumber: formatPhoneNumberIntl(phoneNumber),
			email: email,
		};
		router.push(`/formSubmit?data=${JSON.stringify(data)}`);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='w-full h-full flex flex-col items-start justify-between'>
			<h2 className='text-left w-full headingColor leading-10'>
				Experience The Simplicity And Efficiency Of KredX Today!
			</h2>
			<label htmlFor='name'>Full Name*</label>
			<input
				type='text'
				name='name'
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Enter full name'
				className='w-full'
				required
			/>
			<label htmlFor='phoneNumber'>Phone number*</label>
			<PhoneInput
				placeholder='Enter phone number'
				defaultCountry='IN'
				value={phoneNumber}
				onChange={setPhoneNumber}
				error={
					phoneNumber
						? isValidPhoneNumber(phoneNumber)
							? undefined
							: 'Invalid Phone Number'
						: 'Valid'
				}
				className='w-full'
				required
			/>
			{phoneNumber === '' ||
			(phoneNumber && isValidPhoneNumber(phoneNumber)) ? (
				''
			) : (
				<span className=' text-red-700'>Enter a valid phone number</span>
			)}
			<label htmlFor='emailId'>Email ID*</label>
			<input
				type='email'
				className='w-full'
				placeholder='Enter email ID'
				value={email}
				onChange={e => setEmail(e.target.value)}
				required
			/>
			<input
				type='submit'
				value='Schedule a Demo'
				className='w-full text-white text-xl font-semibold'
			/>
		</form>
	);
}

export default ClientForm;
