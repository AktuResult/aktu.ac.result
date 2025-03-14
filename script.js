function generatePDF() {
    const correctRollNumber = "2203490100056";
    const correctDob = "16/04/2005";
    
    const rollNumber = document.getElementById("rollNumber").value;
    const dob = document.getElementById("dob").value;

    if (rollNumber === correctRollNumber && dob === correctDob) {
        // Open the existing PDF in a new tab
        window.open('nirmalresult.pdf', '_blank');
    } else {
        alert("Error: Invalid Roll Number or Date of Birth");
    }
}