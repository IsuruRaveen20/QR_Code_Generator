const form = document.getElementById('generate-qr-form');
const qrForm = document.getElementById('qrcode');

//Button Submit
const onSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('Please enter a URL');
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();

            generateQRCode(url,size);

            setTimeout(() => {
                const saveUrl = qrForm.querySelector('img').src;
                createSaveBtn(saveUrl);
            },50);
        }, 1000);
    }
};

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text:url,
        width:size,
        height:size,
    })
};
//Display Spinner
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
};

//Hide Spinner
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
};

//Clear Ui
const clearUI =() => {
    qrForm.innerHTML = '';
};

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrCode';
    link.innerText = 'Save QR Code';
    document.getElementById('generated').appendChild(link);
};
hideSpinner();


form.addEventListener('submit', onSubmit);