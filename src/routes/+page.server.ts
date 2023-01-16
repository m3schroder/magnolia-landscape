import { SENDGRID_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail';
import { generateEmail } from '@lib/emailTemplate.js';
import type { Actions } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;



export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData()
		console.log(data.get('email'))
		const msg = {
			to: 'm3schroder@gmail.com', // Change to your recipient
			from: 'noreply@strukt.io', // Change to your verified sender
			subject: 'Sending with SendGrid is Fun',
			text: 'and easy to do anywhere, even with Node.js',
			html: generateEmail({
				first: 'Matt',
				last: 'Schroder',
				email: 'm3schroder@gmail.com',
				number: '615-663-5650',
				services: ['Testing'],
				additional: 'Nothing more'
			})
		};
		sgMail.setApiKey(SENDGRID_KEY)
		sgMail
			.send(msg)
			.then(() => {
				console.log('Email sent');
			})
			.catch((error) => {
				console.log("There was an error")
				console.error(error);
			});
	}
};