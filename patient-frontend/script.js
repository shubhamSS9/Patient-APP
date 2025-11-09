async function fetchPatient() {
  const patientId = document.getElementById("patientId").value;
  const resultDiv = document.getElementById("result");

  try {
    const response = await fetch(`https://patient-app-0buq.onrender.com/patient/${patientId}`);
    if (!response.ok) {
      throw new Error("Patient not found");
    }

    const data = await response.json();

    resultDiv.innerHTML = `
      <h3>${data.name}</h3>
      <p><b>City:</b> ${data.city}</p>
      <p><b>Age:</b> ${data.age}</p>
      <p><b>Gender:</b> ${data.gender}</p>
      <p><b>Height:</b> ${data.height} m</p>
      <p><b>Weight:</b> ${data.weight} kg</p>
      <p><b>BMI:</b> ${data.bmi}</p>
      <p><b>Verdict:</b> ${data.verdict}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
