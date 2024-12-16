
// Menu de Navegação Script Bem Simples utilizando Funções sem nenhum Parametro! funcional! 100%
function openSidebar() {
    document.getElementById("nav-bar-flex").style.width = "250px";
  }
  
  function closeSidebar() {
    document.getElementById("nav-bar-flex").style.width = "0";
  }
  
 


function goToWeb() {
  var automatic = document.getElementById('automatic-purchase');
  var manual = document.getElementById('manual-purchase');

  automatic.addEventListener('click', function() {
   var location = window.location.href = "automatic.html";
    console.log('Rederecionado para' + location);
  });

  manual.addEventListener('click', function() {
    var location1 = window.location.href = "https://wa.me/874135758";
    console.log('Link rederecinado para ' + location1)
  })
}

goToWeb();