const form = document.getElementById('generate-qr-form');
const qrForm = document.getElementById('qrcodeOutput');

const onSubmit = (e) => {
    e.preventDefault();
    
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url,size);
}

form.addEventListener('submit', onSubmit);