
function sacarRaza(urlImagen) {
  const partes = urlImagen.split("/");
  const posicion = partes.indexOf("breeds");
  const carpeta = partes[posicion + 1];       

  const palabras = carpeta.split("-").reverse(); 

  return palabras
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ");
}

async function getDataPerro() {
  const url = "https://dog.ceo/api/breeds/image/random";

  try {
    const inicio = Date.now();
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const latencia = Date.now() - inicio;

    console.log(result);

    document.getElementById("perro-imagen").src = result.message;
    document.getElementById("perro-urlImagen").textContent = result.message;
    document.getElementById("perro-respuesta").textContent = result.status.toUpperCase();
    document.getElementById("perro-raza").textContent = sacarRaza(result.message);

    document.getElementById("perro-estadoApi").textContent = response.status + " OK";
    document.getElementById("perro-latencia").textContent = latencia + " ms";
    document.getElementById("perro-estado").textContent = "ESTADO: ONLINE";

  } catch (error) {
    console.error(error.message);
    document.getElementById("perro-raza").textContent = "Error al cargar";
    document.getElementById("perro-estado").textContent = "ESTADO: OFFLINE";
  }
}

getDataPerro();
