function predict() {

    const symptoms = document.getElementById("symptoms").value;
    const file = document.getElementById("upload").files[0];

    if (!symptoms && !file) {
        document.getElementById("result").innerText = "Please enter symptoms or upload an image.";
        return;
    }

    document.getElementById("result").innerText = "Analyzing...";

    setTimeout(() => {
        document.getElementById("result").innerText =
            "Possible condition detected. Please consult a doctor.";
    }, 2000);
}
