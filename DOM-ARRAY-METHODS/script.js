let data = []
const table = document.getElementById('table')
const rowContainer = document.getElementById('row-container')
const table_heading = document.getElementById('table-heading')
const addUserBtn = document.getElementById("add-user")
const doubleMoneyBtn = document.getElementById("double-money")
const showMillionairesBtn = document.getElementById("show-millionaires")
const sortUserBtn = document.getElementById("sort")
const sumWealthBtn = document.getElementById("sum-wealth")

document.body.onload = fetchUsers

function fetchUsers(){
    fetchUser()
     .then(res=>addUser(res))
    fetchUser()
     .then(res=>addUser(res))
    fetchUser()
     .then(data=>addUser(data))
}

function fetchUser(){
    const user = fetch("https://randomuser.me/api")
        .then(res=>res.json())
    return user
}

function addUser(user_data){
    const name = user_data?.results[0]?.name?.first + " " + user_data?.results[0]?.name?.last
    const money = Math.floor(Math.random()*1000000)
    const user = {
        name,
        money
    }
    data.push(user)
    updateDOMLastElement()
}

function updateTotalDOM(total){
    const sum_element = document.createElement('div')
    sum_element.classList.add('sum')
   // sum_element.classList.add('table-heading')

    const sum_txt_element = document.createElement('div')
    const sum_txt = document.createTextNode('Total Wealth: ')
    sum_txt_element.appendChild(sum_txt)
    
    const sum_num_element = document.createElement('div')
    const sum_num = document.createTextNode('₹ '+total)
    sum_num_element.appendChild(sum_num)

    sum_element.appendChild(sum_txt_element)
    sum_element.appendChild(sum_num_element)

    table.appendChild(sum_element)
}

function updateDOMLastElement(){
    table.lastChild.innerHTML = ''
    const user = data[data.length-1]
           
    const row_element = document.createElement('div');
    row_element.classList.add('row')
    const name_element = document.createElement('div');
    const name_node = document.createTextNode(user.name)
    name_element.appendChild(name_node)

    const money_element = document.createElement('div');
    const money_node = document.createTextNode('₹ '+user.money)
    money_element.appendChild(money_node)

    row_element.appendChild(name_element)
    row_element.appendChild(money_element)
    
    rowContainer.appendChild(row_element)
}

function updateDOMAllElements(){
    rowContainer.innerHTML = ''
    table.lastChild.innerHTML = ''
    data.forEach(user=>{
        const row_element = document.createElement('div');
        row_element.classList.add('row')
        const name_element = document.createElement('div');
        const name_node = document.createTextNode(user.name)
        name_element.appendChild(name_node)

        const money_element = document.createElement('div');
        const money_node = document.createTextNode('₹ '+user.money)
        money_element.appendChild(money_node)

        row_element.appendChild(name_element)
        row_element.appendChild(money_element)
        
        rowContainer.appendChild(row_element)}
    )
}

addUserBtn.addEventListener('click', ()=>{
    fetchUser()
     .then(res=>addUser(res))
})

doubleMoneyBtn.addEventListener('click', ()=>{
    data = data.map(user=>{return {name: user.name, money:user.money*2}})
    updateDOMAllElements()
})

showMillionairesBtn.addEventListener('click', ()=>{
    data = data.filter(user=>user.money>1000000)
    updateDOMAllElements();
})

sortUserBtn.addEventListener('click', ()=>{
    data = data.sort((a,b) => b.money - a.money)
    updateDOMAllElements()
})

sumWealthBtn.addEventListener('click', ()=>{
    const sum = data.reduce((acc, curr)=>acc+curr.money, 0)
    console.log(sum)
    updateTotalDOM(sum)
})