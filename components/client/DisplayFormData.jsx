'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function DisplayFormData() {
	const searchParams = useSearchParams();
	const data = JSON.parse(searchParams.get('data'));
	return (
		<>
			<div className='formSubmit w-full flex flex-col items-center justify-around mt-10 p-10'>
				Thank you for contacting
				<span className='font-semibold'>{data.name},</span> we will send you an
				email to <span className='font-semibold'>{data.email},</span> or call
				you at <span className='font-semibold'>{data.phoneNumber}</span>
			</div>
			<div className='w-full text-center'>
				Go to{' '}
				<Link href='/' className='text-teal-500'>
					Home
				</Link>
				?
			</div>
		</>
	);
}

export default DisplayFormData;
