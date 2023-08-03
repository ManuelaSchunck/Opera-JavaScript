let total = 0;

function calcularAssento(valor) {
  total += valor;
  document.getElementById("valorTotal").innerText = total;
}

function limparValores() {
  total = 0;
  document.getElementById("valorTotal").innerText = total;
}

      var valores = [];
    
      function adicionarValor() {
        var valor1 = document.getElementById("nome").value


        valores.push(valor1)

        document.getElementById("nome").value = "";


        var valoresString = JSON.stringify(valores)
        window.localStorage.setItem("valores", valoresString)

      }


    function exibir(){
    var valoresString = window.localStorage.getItem("valores");
    
    var valores = JSON.parse(valoresString);
  
    var valoresExibicao = "";
  
    for (var i = 0; i < valores.length; i++) {
      valoresExibicao += "<li>" + valores[i] + "</li>";
    }
  
    document.getElementById("valoresExibidos").innerHTML = valoresExibicao;
}
    var seats = [];
    var selectedSeat = null;
    
    
    for (var i = 0; i < 33; i++) {
      seats.push({ name: '', occupied: false });
    }
    
    function drawSeats() {
      var seatsContainer = document.getElementById('seats');
      seatsContainer.innerHTML = '';

      for (var i = 0; i < seats.length; i++) {
        var seat = seats[i];
        var seatElement = document.createElement('div');
        seatElement.className = 'seat' + (seat.occupied ? ' occupied' : '');
        seatElement.textContent = i + 1;
        seatElement.addEventListener('click', selectSeat.bind(null, i));
        seatsContainer.appendChild(seatElement);
      }
    }
    
    function selectSeat(index) {
      if (!seats[index].occupied) {
        selectedSeat = index;
        document.getElementById('registration').style.display = 'block';
      }
    }
    
    function register() {
      var nameInput = document.getElementById('name');
      var name = nameInput.value.trim();
      
      if (name !== '') {
        seats[selectedSeat].name = name;
        seats[selectedSeat].occupied = true;
        drawSeats();
        document.getElementById('registration').style.display = 'none';
        selectedSeat = null;
        nameInput.value = '';
        alert('Cadastro concluído! Assento selecionado: ' + (selectedSeat  +1) + ', Nome: ' + name);
      }
    }
    
    drawSeats();
  
  







