import Image from 'next/image';

function Capability({ capability }) {
	return (
		<div
			key={capability.id}
			className='flex flex-col items-center justify-start'>
			<div className='flex items-center justify-center'>
				<Image alt='' src={`${capability.imageURL}`} width={100} height={120} />
			</div>
			<div className='eachName'>
				<h3>{capability.cName}</h3>
			</div>
			<span>{capability.content}</span>
		</div>
	);
}

export default Capability;
