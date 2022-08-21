const form = document.getElementById('generate-qr-form');
const qrForm = document.getElementById('qrcode');

//Button Submit
const onSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    //Validate the URL
    if (url === '') {
        alert('Please enter a URL');
    } else {
        displaySpinner();

        setTimeout(() => {
            hideSpinner();

            generateQRCode(url,size);

            //generate the save btn after the QR code image is ready
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
const displaySpinner = () => {
    document.getElementById('spinner').style.display = 'block';
};

//Hide Spinner
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
};

//Clear Ui
const clearUI =() => {
    qrForm.innerHTML = '';
    const saveLink = document.getElementById('save-link');

    if(saveLink){
        saveLink.remove();
    }
};

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrCode';
    link.innerText = 'Save QR Code';
    document.getElementById('generated').appendChild(link);
};
hideSpinner();


form.addEventListener('submit', onSubmit);