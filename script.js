let value = document.getElementById('value');

document.addEventListener('click', (e) => {
	document.querySelectorAll('.form-button').forEach((button) => {
		button.removeAttribute('id');
		if (e.target.value === button.value) {
			value.textContent = button.value;
			button.setAttribute('id', 'clicked');
		}
	});
});

document.addEventListener('submit', (e) => {
	document.querySelector('.rating-state').style.display = 'none';
	document.querySelector('.thank-you-state').style.display = 'block';

	e.preventDefault();
});
