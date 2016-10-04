$(function(){
  var display = $('.display')
  var getAllBtn = $('.getAll')
  var searchBtn = $('#search')
  var inputBar = $('.searchBar')
  const baseApi = 'http://localhost:3000'
  const allCustomers = '/customers'

  getAllBtn.on('click', () => {
    display.empty()
    $.get(`${baseApi}${allCustomers}`, displayAll)
  })

  const displayAll = (data) => {
    const list = data.records.map((record) => `<li>${record.customerId}, ${record.customerName}</li>`).join('')
    const template = `<ul>${list}</ul>`
    display.append(template)
  }

  searchBtn.on('click', () => {
    var inputValue = inputBar.val()
    if(inputValue){
      $.get(`${baseApi}${allCustomers}?q=${inputValue}`, displayOne)
      inputBar.val('')
    }
  })

  const displayOne = (data) => {
    display.empty()
    if(data.records[0]){
      const item = `<ul><li>${data.records[0].customerId}, ${data.records[0].customerName}</li><ul>`
      display.append(item)
    } else {
      alert('No such customer!')
    }
  }

})
