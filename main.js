
let btn=document.getElementById('button');

btn.addEventListener('click',add_data);

function add_data(e)
{
    e.preventDefault();
    let amt=document.getElementById('expenseamt');
    let desc=document.getElementById('description');
    let category=document.getElementById('category');
    if(amt.value==="" || desc.value==="")
    {
        alert("Fill all the value please");
        return;
    }
    let str= `${amt.value} - ${category.value} - ${desc.value} `;

    const user_obj = new newUser(amt.value,desc.value,category.value);

    let obj_serialized=JSON.stringify(user_obj);
    localStorage.setItem(user_obj.desc,obj_serialized);

    amt.value='';
    desc.value='';


    let data=document.getElementById('expense_category');

    //creating li attribute
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(str));

    //create delete button
    let delbtn=document.createElement('button');
    delbtn.classList.add('btn-success');
    delbtn.appendChild(document.createTextNode('Delete Expense'));
    li.append(delbtn);
    delbtn.addEventListener('click',(e) => 
    {
        e.preventDefault();
        li.remove();
        localStorage.removeItem(user_obj.desc);
    });

    //create edit button
    let editbtn=document.createElement('button');
    editbtn.appendChild(document.createTextNode('Edit Expense'));
    editbtn.classList.add('btn-secondary');
    li.append(editbtn);
    editbtn.addEventListener('click',(e) => 
    {
        e.preventDefault();
        localStorage.removeItem(user_obj.desc);
        amt.value=user_obj.amt;
        desc.value=user_obj.description;
        category.value=user_obj.category;
        li.remove();
    });

    data.appendChild(li);
}

//function to create object for new expense
function newUser(amt,description,category)
{
    this.amt=amt;
    this.description=description;
    this.category=category;
}