export default class Contact{
    constructor(){
        this.contacts=[]
    }
    addContact(fname,lname,email,phno,status,id){
        if(this.contacts.length===0){
            id=1;
        }
            const contact={fname,lname,email,phno,status,id};
            this.contacts.push(contact);
            this.parseContacts();
    
        
    }
    editContact(fname,lname,email,phno,status,id){
        const contactold=this.contacts.find(el=>el.id===id);
        if(contactold){
            contactold.fname=fname;
            contactold.lname=lname;
            contactold.email=email;
            contactold.phno=phno;
            contactold.status=status;
        }
        this.parseContacts();
    }
    deleteContact(id){
        const conIndex=this.contacts.findIndex(el=>el.id===id);
        this.contacts.splice(conIndex);
        this.parseContacts();
    }
    parseContacts(){
        localStorage.setItem('contacts',JSON.stringify(this.contacts));
    }
    readStorage(){
        const storage=JSON.parse(localStorage.getItem('contacts'));
        this.contacts=storage;
    }
}