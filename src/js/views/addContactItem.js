import { elements } from "../base"

export const addContactItem=(contact)=>{
    const markup=`
        <tr class="contact-item ${contact.status==='Active'?'':'table-danger'}" style="page-break-inside: avoid;page-break-after: auto;" data-itemid=${contact.id}>
        <td>${contact.fname}</td>
        <td>${contact.lname}</td>
        <td>${contact.email}</td>
        <td>${contact.phno}</td>
        <td>${contact.status}</td>
        <td class="text-center"><button class="edit-button btn btn-secondary mr-1">Edit</<button>
        <button class="delete-button btn btn-danger">Delete</button></<button>
        </td>
         </tr>
        `
    elements.contactTable.insertAdjacentHTML('beforeend',markup);
}
export const clearList1=()=>{
    elements.contactList.innerHTML="";
    elements.page.innerHTML="";
}

export const clearList=()=>{
    elements.contactTable.innerHTML="";
    elements.page.innerHTML="";
}
export const deleteContactItem=(id)=>{
    const el=document.querySelector(`[data-itemid="${id}"]`);
    el.parentElement.removeChild(el);
}
const pageContent=(type,page)=>{
    const markup=  `
        <button class="btn btn-primary mr-5 page-button" style="float: ${type==='next'?'right':'left'};" data-goto="${type==='next'?page+1:page-1}">Page ${type==='next'?page+1:page-1}</button>
    `
    return markup;
}

const pageNumbers=(contacts,resPerPage,page)=>{
    const totalPages=Math.ceil((contacts.length/resPerPage));
    let button;
    if(totalPages===1){
        button='';
    }else if(page===1 && totalPages>1){
        button=pageContent('next',page);
    }else if(page<totalPages){
        button=`${pageContent('prev',page)}
                ${pageContent('next',page)}`
    }else{
        button=pageContent('prev',page);
    }
    
    elements.page.innerHTML='';
    elements.page.insertAdjacentHTML('afterbegin',button);

}
export const renderPages=(contacts,page=1,resPerPage=3)=>{
    const start=(page-1)*resPerPage;
    const end=(page*resPerPage)-1;
    // console.log(start,end);
    contacts.slice(start,end+1).forEach(el=>{
        addContactItem(el);
    })
    pageNumbers(contacts,resPerPage,page)
    
}