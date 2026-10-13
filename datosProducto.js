async function getDataProducto() {
  const url = "https://fakestoreapi.com/products/16";

  try {
    const inicio = Date.now();
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const latencia = Date.now() - inicio;

    console.log(result);

    
    document.getElementById("prod-usrId").textContent = "#" + result.id;
    document.getElementById("prod-imagen").src = result.image;
    document.getElementById("prod-nombre").textContent = result.title;
    document.getElementById("prod-categoria").textContent = result.category;
    document.getElementById("prod-precio").textContent = "$" + result.price;
    document.getElementById("prod-descripcion").textContent = result.description;


    document.getElementById("prod-calificacion").textContent = result.rating.rate;
    document.getElementById("prod-votos").textContent = result.rating.count + " votos";

    
    document.getElementById("prod-latencia").textContent = latencia + " ms";

  } catch (error) {
    console.error(error.message);
  }
}

getDataProducto()
