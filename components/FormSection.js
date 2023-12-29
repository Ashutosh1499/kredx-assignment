import Image from 'next/image';
import React from 'react';

import formImage from '@/public/assets/images/form-section-image.svg';
import ClientForm from './client/ClientForm';

function FormSection() {
	return (
		<section id='formSection'>
			<div id='formContainer' className='grid gap-x-5'>
				<div id='imageArea' className='flex items-center justify-center'>
					<Image alt='' src={formImage} />
				</div>
				<div
					id='formArea'
					className=' h-full flex flex-col items-center justify-between'>
					<ClientForm />
				</div>
			</div>
		</section>
	);
}

export default FormSection;
