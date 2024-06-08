
document.querySelector("#ingresar").addEventListener('click', () => {
    let digit1 = document.querySelector("#digit1").value;
    let digit2 = document.querySelector("#digit2").value;
    let digit3 = document.querySelector("#digit3").value;
    
    let password = digit1 + digit2 + digit3;
    let mensaje = document.querySelector("#mensaje");
    
    if (password === '911') {
      mensaje.innerHTML = "password 1 correcto";
    } else if (password === '714') {
      mensaje.innerHTML = "password 2 es correcto";
    } else {
      mensaje.innerHTML = "password incorrecto";
    }
  });