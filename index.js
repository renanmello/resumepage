function sendMail() {
    var params = {
        to_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    }

    const serviceID = "service_renan";
    const templateID = "template_renan";

    emailjs.send(serviceID, templateID, params).then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent succesfully")
        }
    ).catch((err) => console.log(err));

}


