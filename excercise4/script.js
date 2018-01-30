
const companies = [
  {id: 1, name: 'Amazon', location: 'Seattle'},
  {id: 2, name: 'Apple', location: 'Cupertino'},
  {id: 3, name: 'Facebook', location: 'Menlo Park'},
  {id: 4, name: 'Google', location: 'Mountain View'},
  {id: 5, name: 'Leeroy', location: 'Sundsvall'},
  {id: 6, name: 'Tesla', location: 'Palo Alto'}
]
var data = companies;
display(data);

function display(data) {
  const ul = document.getElementById("list");
  while( ul.firstChild ){
    ul.removeChild( ul.firstChild );
  }
    
  const ulClone = ul.cloneNode(true);
  data.forEach(function(data) {
    let li = document.createElement("li");
    li.append(document.createTextNode(`${data.name}-${data.location}`));
    ulClone.appendChild(li);
  });

  document.getElementById("list-container").replaceChild(ulClone,ul);
  ulClone.addEventListener("click", function(event) {
      console.log(event.target.innerHTML)
  });
}

function onHandleChange(obj){
  let selected = $(".sel-multiple").val()
  data = (selected == "") ? companies : companies.filter(item => selected.includes(item.location));
  display(data);
}
