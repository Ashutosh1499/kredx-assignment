'use strict';
import { promises as fs } from 'fs';

export async function capabilitiesData() {
	const file = await fs.readFile(
		process.cwd() + '/utils/capabilitiesData.json',
		'utf8',
	);
	const data = JSON.parse(file);
	return data;
}

export async function advantagesData() {
	const file = await fs.readFile(
		process.cwd() + '/utils/advantagesData.json',
		'utf8',
	);
	const data = JSON.parse(file);
	return data;
}
