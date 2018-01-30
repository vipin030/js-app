(() => {

  const companies = [
    {id: 1, name: 'Amazon', location: 'Seattle'},
    {id: 2, name: 'Apple', location: 'Cupertino'},
    {id: 3, name: 'Facebook', location: 'Menlo Park'},
    {id: 4, name: 'Google', location: 'Mountain View'},
    {id: 5, name: 'Leeroy', location: 'Sundsvall'},
    {id: 6, name: 'Tesla', location: 'Palo Alto'}
  ]
  const worker = new Worker('worker.js');
  
  const ul = document.getElementById("list");
  const ulClone = ul.cloneNode(true);

  worker.onmessage = function (ev) {
      var li = document.createElement("li");
      li.append(document.createTextNode(`${ev.data} element`));
      ulClone.appendChild(li);     
  };
  
  document.getElementById("list-container").replaceChild(ulClone, ul);
  ulClone.addEventListener("click", function(event) {
  	console.log(event.target.innerHTML)
  });
  

})()
