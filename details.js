// import data from './dummy.json' assert {type: 'json'};

const fetchedData = data.data

function sort(e) {
  console.log('aaaa')
  const receivedIndex = e
  const thead = document.querySelector("#table1 thead");
  const tbody = document.querySelector("#table1 tbody");
  let tfoot = document.querySelector("#table1 tfoot");
  const footerDiv = document.querySelector("#footerDiv");
  const totallength = Math.ceil(fetchedData.length / 5)
  const mappedData = fetchedData.filter((e) => {
    if (e.id > ((receivedIndex - 1) * 5) && e.id <= (receivedIndex * 5)) {
      return e
    }
    else {
    }
  })

  thead.innerHTML = `<tr>
        ${Object.keys(mappedData[0]).map(key => `<th>${key.toUpperCase()}</th>`).join('')}
      </tr>`;
  tbody.innerHTML = mappedData
    .map(item => `<tr>
        ${Object.values(item).map(val => `<td>${val.toUpperCase()}</td>`).join('')}
      </tr>`).join('')
  const totallengtharray = []
  for (let i = 1; i <= totallength; i++) {
    totallengtharray.push(i)
  }
  footerDiv.innerHTML = totallengtharray.map(e => `<div style="padding:2px;border:1px solid black;background:whitesmoke;margin:2px;cursor:pointer;border-radius:2px;box-shadow: 0 8px 6px -6px black;" id=\"clicked\" onclick=\"sort(${e})\">${e}</div>`).join('')

}


window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  const thead = document.querySelector("#table1 thead");
  const tbody = document.querySelector("#table1 tbody");
  let tfoot = document.querySelector("#table1 tfoot");
  const footerDiv = document.querySelector("#footerDiv");

  const mappedData = fetchedData.filter((e) => e.id <= 5)

  thead.innerHTML = `<tr>
        ${Object.keys(mappedData[0]).map(key => `<th>${key.toUpperCase()}</th>`).join('')}
      </tr>`;
  tbody.innerHTML = mappedData
    .map(item => `<tr>
        ${Object.values(item).map(val => `<td>${val.toUpperCase()}</td>`).join('')}
      </tr>`).join('')
  const totallength = Math.ceil(fetchedData.length / 5)
  const totallengtharray = []
  for (let i = 1; i <= totallength; i++) {
    totallengtharray.push(i)
  }
  footerDiv.innerHTML = totallengtharray.map(e => `<div style="padding:2px;border:1px solid black;background:whitesmoke;margin:2px;cursor:pointer;border-radius:2px;box-shadow: 0 8px 6px -6px black;" id=\"clicked\" onclick=\"sort(${e})\">${e}</div>`).join('')
})

const element = document.getElementById("search");
element.addEventListener('blur', async function (data) {
  console.log('blurloaded')

  let tempdata = fetchedData;
  tempdata = await tempdata.filter((e) => {
    return e.country.toLowerCase().includes(data.target.value.toLowerCase())
  })

  if(tempdata.length == 0)
  {
    alert("Value not Found")
  }
  else{
    let thead = document.querySelector("#table1 thead");
    let tbody = document.querySelector("#table1 tbody");
    let tfoot = document.querySelector("#table1 tfoot");
    let footerDiv = document.querySelector("#footerDiv");
  
    thead.innerHTML = `<tr>
          ${Object.keys(tempdata[0]).map(key => `<th>${key.toUpperCase()}</th>`).join('')}
        </tr>`;
  
    tbody.innerHTML = tempdata
      .map(item => `<tr>
          ${Object.values(item).map(val => `<td>${val.toUpperCase()}</td>`).join('')}
        </tr>`).join('')
    if (tempdata.length < 5) {
      footerDiv.setAttribute('style', 'display:none;')
      tfoot.setAttribute('style', 'display:none;')
    }
    else {
      footerDiv.removeAttribute('style', 'display:none;')
      tfoot.removeAttribute('style', 'display:none;')

      const mappedData = fetchedData.filter((e) => e.id <= 5)
      thead.innerHTML = `<tr>
            ${Object.keys(mappedData[0]).map(key => `<th>${key.toUpperCase()}</th>`).join('')}
          </tr>`;
      tbody.innerHTML = mappedData
        .map(item => `<tr>
            ${Object.values(item).map(val => `<td>${val.toUpperCase()}</td>`).join('')}
          </tr>`).join('')
      const totallength = Math.ceil(fetchedData.length / 5)
      const totallengtharray = []
      for (let i = 1; i <= totallength; i++) {
        totallengtharray.push(i)
      }
      footerDiv.innerHTML = totallengtharray.map(e => `<div style="padding:2px;border:1px solid black;background:whitesmoke;margin:2px;cursor:pointer;border-radius:2px;box-shadow: 0 8px 6px -6px black;" id=\"clicked\" onclick=\"sort(${e})\">${e}</div>`).join('')
    }
  }

 

});



