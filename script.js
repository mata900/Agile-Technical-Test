var dataProducts = {
  "Camisa 1": {
    id: "Camisa 1",
    data: "256, 45, 890, 13",
  },
  "Camisa 2": {
    id: "Camisa 2",
    data: "388, 900, 234, 69",
  },
  "Camisa 3": {
    id: "Camisa 3",
    data: "23, 100, 56, 456",
  },
  "Pantalones 1": {
    id: "Pantalones 1",
    data: "559, 213, 473, 321",
  },
  "Pantalones 2": {
    id: "Pantalones 2",
    data: "833, 528, 659, 306",
  },
  "Pantalones 3": {
    id: "Pantalones 3",
    data: "328, 180, 678, 412",
  },
  "Cereales 1": {
    id: "Cereales 1",
    data: "123, 342, 56, 123",
  },
  "Cereales 2": {
    id: "Cereales 2",
    data: "456, 32, 789, 333",
  },
  "Cereales 3": {
    id: "Cereales 3",
    data: "45, 698, 123, 789",
  },
  "Fruta 1": {
    id: "Fruta 1",
    data: "894, 99, 893, 111",
  },
  "Fruta 2": {
    id: "Fruta 2",
    data: "632, 565, 92, 406",
  },
  "Fruta 3": {
    id: "Fruta 3",
    data: " 834, 776, 191, 48",
  }
};
const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Sales by Month for: ",
        data: [100, 246, 479, 78],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
fillProduct();
fillBrand();
getData();
changeGraph();

function getData() {
  /*
  $.getJSON('data.json',function(json){
    for(var key in json){
      if(json.hasOwnProperty(key)){
          var item = json[key];
          data.push({
            id: item.id,
            data: item.data
          });
      }
    }
  });*/
}

function fillProduct() {
  var selectedPro = document.getElementById("selectProduct");
  var valueCat = document.getElementById("selectCategory").value;

  cleanDrop(selectedPro);

  var optionsRopa = ["Camisa", "Pantalones"];
  var optionsAlimentos = ["Cereales", "Fruta"];

  if (valueCat == "Ropa") {
    for (var i = 0; i < optionsRopa.length; i++) {
      var newElement = document.createElement("option");
      newElement.textContent = optionsRopa[i];
      newElement.value = optionsRopa[i];
      selectedPro.appendChild(newElement);
    }
  } else {
    for (var i = 0; i < optionsAlimentos.length; i++) {
      var newElement = document.createElement("option");
      newElement.textContent = optionsAlimentos[i];
      newElement.value = optionsAlimentos[i];
      selectedPro.appendChild(newElement);
    }
  }
  fillBrand();
  changeGraph() 
}
function fillBrand() {
  var selectedBrand = document.getElementById("selectBrand");
  var valuePro = document.getElementById("selectProduct").value;

  cleanDrop(selectedBrand);

  var optionsCamisa = ["Camisa 1", "Camisa 2", "Camisa 3"];
  var optionsPantalones = ["Pantalones 1", "Pantalones 2", "Pantalones 3"];
  var optionsCereales = ["Cereales 1", "Cereales 2", "Cereales 3"];
  var optionsFruta = ["Fruta 1", "Fruta 2", "Fruta 3"];

  if (valuePro == "Camisa") {
    for (var i = 0; i < optionsCamisa.length; i++) {
      var newElement = document.createElement("option");
      newElement.textContent = optionsCamisa[i];
      newElement.value = optionsCamisa[i];
      selectedBrand.appendChild(newElement);
    }
  } else if (valuePro == "Pantalones") {
    for (var i = 0; i < optionsPantalones.length; i++) {
      var newElement = document.createElement("option");
      newElement.textContent = optionsPantalones[i];
      newElement.value = optionsPantalones[i];
      selectedBrand.appendChild(newElement);
    }
  } else if (valuePro == "Cereales") {
    for (var i = 0; i < optionsCereales.length; i++) {
      var newElement = document.createElement("option");
      newElement.textContent = optionsCereales[i];
      newElement.value = optionsCereales[i];
      selectedBrand.appendChild(newElement);
    }
  } else {
    for (var i = 0; i < optionsFruta.length; i++) {
      var newElement = document.createElement("option");
      newElement.textContent = optionsFruta[i];
      newElement.value = optionsFruta[i];
      selectedBrand.appendChild(newElement);
    }
  }
  changeGraph();
}

function cleanDrop(selectElement) {
  var lengthElement = selectElement.options.length - 1;
  for (var i = lengthElement; i >= 0; i--) {
    selectElement.remove(i);
  }
}

function changeGraph() {
  
  if (selectBrand.value == "Camisa 1") {
    myChart.data.datasets[0].data = dataProducts["Camisa 1"].data.split(",");
  } else if (selectBrand.value == "Camisa 2") {
    myChart.data.datasets[0].data = dataProducts["Camisa 2"].data.split(",");
  } else if (selectBrand.value == "Camisa 3") {
    myChart.data.datasets[0].data = dataProducts["Camisa 3"].data.split(",");
  } else if (selectBrand.value == "Pantalones 1") {
    myChart.data.datasets[0].data =
      dataProducts["Pantalones 1"].data.split(",");
  } else if (selectBrand.value == "Pantalones 2") {
    myChart.data.datasets[0].data =
      dataProducts["Pantalones 2"].data.split(",");
  } else if (selectBrand.value == "Pantalones 3") {
    myChart.data.datasets[0].data =
      dataProducts["Pantalones 3"].data.split(",");
  } else if (selectBrand.value == "Cereales 1") {
    myChart.data.datasets[0].data = dataProducts["Cereales 1"].data.split(",");
  } else if (selectBrand.value == "Cereales 2") {
    myChart.data.datasets[0].data = dataProducts["Cereales 2"].data.split(",");
  } else if (selectBrand.value == "Cereales 3") {
    myChart.data.datasets[0].data = dataProducts["Cereales 3"].data.split(",");
  } else if (selectBrand.value == "Fruta 1") {
   
    myChart.data.datasets[0].data = dataProducts["Fruta 1"].data.split(",");
  } else if (selectBrand.value == "Fruta 2") {
    myChart.data.datasets[0].data = dataProducts["Fruta 2"].data.split(",");
  } else if (selectBrand.value == "Fruta 3") {
    myChart.data.datasets[0].data = dataProducts["Fruta 3"].data.split(",");
  }
  myChart.update();
}
