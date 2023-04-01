const imageInput = document.getElementById('image-input');
const imgPreview = document.getElementById('img-preview');
const convertButton = document.getElementById('convert-button');
const dataUri = document.getElementById('data-uri');
const copyButton = document.getElementById('copy-button');

imageInput.addEventListener('change', () => {
	const file = imageInput.files[0];
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = () => {
		imgPreview.src = reader.result;
	}
});

convertButton.addEventListener('click', () => {
	const dataUriValue = imgPreview.src;
	dataUri.value = dataUriValue;
});

copyButton.addEventListener('click', () => {
	dataUri.select();
	document.execCommand("copy");
	alert("Copied to clipboard!");
});
