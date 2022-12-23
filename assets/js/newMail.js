

function sendMail() {
    var params = {
        inputName: document.getElementById('inputName').value,
        number: document.getElementById('number').value,
        inputEmail4: document.getElementById('inputEmail4').value,
        messageText: document.getElementById('messageText').value
    }

    const serviceId = 'service_esfowda';
    const templateId = 'template_w0aak3g';

    emailjs.send(serviceId, templateId, params)
        .then(
            res => {
                document.getElementById('inputName').value = '';
                document.getElementById('number').value = '';
                document.getElementById('inputEmail4').value = '';
                document.getElementById('messageText').value = '';
                console.log(res);
                alert("Message sent successfully");
            }
        )
        .catch(err => console.log(err));
}

