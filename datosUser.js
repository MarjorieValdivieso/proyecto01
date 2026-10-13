async function getDataUsuario() {
  const url = "https://jsonplaceholder.typicode.com/users/1";

  try {
    const inicio = Date.now();
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const latencia = Date.now() - inicio;

    console.log(result);

    document.getElementById("user-name").textContent = result.name;
    document.getElementById("user-username").textContent = "@" + result.username;
    document.getElementById("user-email").textContent = result.email.toUpperCase();
    document.getElementById("user-company").textContent = result.company.name;
    document.getElementById("user-city").textContent = result.address.city;

    document.getElementById("api-status").textContent = response.status + " OK";
    document.getElementById("latency").textContent = latencia + " ms";

  } catch (error) {
    console.error(error.message);
  }
}

getDataUsuario();
