function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const resultElement = document.getElementById('result');

    if (!birthdate) {
        resultElement.textContent = 'Please enter your birthdate.';
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    resultElement.textContent = `Your age is ${age} years old.`;
}
