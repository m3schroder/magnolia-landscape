export const generateEmail = ({
	first,
	last,
	email,
	number,
	services,
	additional,
}) => {
	return `
	<head>
	<style>
		* {
			font-family: sans-serif !important;
		}

		p {
			word-wrap: break-word;
			white-space: pre-wrap;
			word-break: break-word;
		}

		button:hover {
			background-color: #1d4ed890;
			margin-top: 3px;
		}

		button {
			transition: all 0.2s;
			background-color: #1d4ed880;
			color: white;
			outline: none;
			border: none;
			border-radius: 10px;
			font-size: 1.2rem;
			width: fit-content;
			padding: 10px 15px;
		}

		h1 {
			text-align: center;
			width: 100%;
			color: gray;
		}

		label {
			opacity: 50%;
		}

		strong {
			opacity: 75%;
		}

		ul {
			list-style-type: disc;
			gap: 10px;
		}

		@media only screen and (max-width: 300px) {
			#info-wrapper {
				width: 95% !important;
			}
		}

		#info-wrapper {
			width: 30%;
			margin: auto;
			padding-top: 20px;
			gap: 20px;
		}

		.text-group {
			padding-bottom: 15px;
		}

		.card {
			width: 100%;
			margin: 35px auto;
			box-shadow: 3px 5px 9px rgba(230, 230, 230, 80%);
			border: 1px solid rgb(230, 230, 230);
			background-color: white;
			max-width: 100%;
			box-sizing: border-box;
			height: min-content;
			padding: 30px;
			gap: 15px;
			border-radius: 10px;
		}
	</style>
	</head>


<div id="info-wrapper">
	<h1>New Contact Info</h1>
	<section class="card">
		<div class="text-group">
			<label>First </label><br />
			<strong>${first}</strong>
		</div>
		<div class="text-group">
			<label> Last</label><br />
			<strong>${last}</strong>
		</div>
		<div class="text-group">
			<label>Email</label><br />
			<strong>${email}</strong>
		</div>
		<div class="text-group">
			<label>Number</label><br />
			<strong>${number}</strong>
		</div>
		<button>Add to Database</button>
	</section>

	<section class="card">
		<label>Services</label>
		<ul>
		${services.map(service => {
		return `<li>${service}</li>`
	})
		}
		</ul>
	</section>

	<section class="card ">
		<label>Additional Information</label>
		<p>$${additional}</p>
	</section>
</div>
	`
}