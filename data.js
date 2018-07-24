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

var data = getDaysArray(2018,7);

console.log(data);