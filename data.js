const getDaysArray = (year, month) => {
  var names = [ 'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado' ];
  var date = new Date(year, month - 1, 1);
  var result = [];
  while (date.getMonth() == month - 1) {
    result.push( 
       {
          number: date.getDate(), 
          day:  names[date.getDay()]
      
      });
    date.setDate(date.getDate() + 1);
  }
  return result;
}

var data = getDaysArray(2018,8);

let segunda = [];
let terca = [];
let quarta = [];
let quinta = [];
let sexta = [];
let sabado = [];
let domingo = [];

data.forEach(item => {
  
  if(item.day === 'segunda'){
    segunda.push(item.number);
  }
  else if(item.day === 'quarta') {
    quarta.push(item.number);
  }
  else if(item.day === 'quinta') {
    quinta.push(item.number);
  }
  else if(item.day === 'sexta') {
    sexta.push(item.number);
  }
  else if(item.day === 'sábado') {
    sabado.push(item.number);
  }
  else if(item.day === 'domingo') {
    domingo.push(item.number);
  }

});

console.log(data);