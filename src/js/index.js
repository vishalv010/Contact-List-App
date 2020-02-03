import {elements} from "./base";
import * as addContactView from "./views/addContactView";
import * as addContactItem from "./views/addContactItem";
import Contact from "./models/contact"
const state={}
const readValues=()=>{
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var email=document.getElementById('email1').value;
    var phno=document.getElementById('phone').value;
    var status=document.getElementById('inputStatus').value;
    return [fname,lname,email,phno,status];
}

const addItem=()=>{
    document.querySelector('.save-button').addEventListener('click',()=>{
        if(!state.contact){
            state.contact=new Contact();
        }
        var firstId=document.getElementById('fname');
        var lastId=document.getElementById('lname');
        var eId=document.getElementById('email1');
        var pno=document.getElementById('phone');
        var st=document.getElementById('inputStatus');
        const [fname,lname,email,phno,status]=readValues();
        if(firstId.checkValidity()&&lastId.checkValidity()&&eId.checkValidity()&&pno.checkValidity()&&st.checkValidity()){
            
            state.contact.addContact(fname,lname,email,phno,status,state.contact.contacts.length+1);
        }
        
        // addContactView.clearFields();
    });
    
}
const editItem=(id)=>{
    document.querySelector('.save-button').addEventListener('click',()=>{
        const [fname,lname,email,phno,status]=readValues();
        // console.log(status);
        if(fname&&lname&&email&&phno&&status){
            state.contact.editContact(fname,lname,email,phno,status,id);
        }
        
        // console.log(state.contact.contacts);
        // addContactView.clearFields();
    });
}
elements.addButton.addEventListener('click',(e)=>{
    //clear contact list
    e.preventDefault();
    addContactItem.clearList1();
    addContactView.displayContactForm('add');
    addItem();
});


window.addEventListener('load',()=>{
    state.contact=new Contact();
    // console.log(state.contact.contacts);
    state.contact.readStorage();
    // console.log(state.contact.contacts);
    // console.log(state.contact.contacts);
    addContactItem.renderPages(state.contact.contacts);

    elements.contactList.addEventListener('click',e=>{
        // console.log("Hi");
        const id=e.target.closest('.contact-item').dataset.itemid;
        // console.log(id);
        if(e.target.matches('.edit-button')){
            const contact=state.contact.contacts.find(el=>el.id===parseInt(id));
            // console.log(contact);
            addContactItem.clearList1();
            addContactView.displayContactForm('edit',contact);
            editItem(parseInt(id));
            
        }else if(e.target.matches('.delete-button')){
            state.contact.deleteContact(parseInt(id));
            addContactItem.deleteContactItem(id);           
            if(document.querySelector('.contact-table').childElementCount===0){
                addContactItem.renderPages(state.contact.contacts);
            }
        }
        
    });
})
elements.page.addEventListener('click',e=>{
    if(e.target.matches('.page-button')){
        const page=parseInt(e.target.dataset.goto,10);
        addContactItem.clearList();
        addContactItem.renderPages(state.contact.contacts,page);
}
});



