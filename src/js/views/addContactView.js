import {elements} from "../base";

export const displayContactForm=(todo,contact)=>{

    elements.contactForm.innerHTML=
        `
        ${todo==="edit"? `<div class="jumbotron text-center">
        <h1 class="display-4">Edit the Selected Contact</h1>
        <p class="lead">Update the below details:</p>
        </div>`:
        `<div class="jumbotron text-center">
        <h1 class="display-4">Add to Contact List</h1>
        <p class="lead">Fill the following details:</p>
        </div>`
        }
        <form class="container">
                <div class="form-group">
                    <label for="fname" class="col-form-label">First Name:</label>
                    <input type="text" class="form-control" id="fname" value="${todo==='edit'?contact.fname:''}" required>  
                    </div>
                <div class="form-group">
                    <label for="lname" class="col-form-label">Last Name:</label>
                    <input type="text" class="form-control" id="lname" value="${todo==='edit'?contact.lname:''}" required>
                </div>
                <div class="form-group">
                    <label for="email1" class="col-form-label">Email address:</label>
                    <input type="email" class="form-control" id="email1" value="${todo==='edit'?contact.email:''}" required>   
                </div>
                <div class="form-group">
                    <label for="phone" class="col-form-label">Phone Number:</label>
                    <input type="text" class="form-control" id="phone" value="${todo==='edit'?contact.phno:''}"  maxlength="10" pattern="[7-9]{1}[0-9]{9}" required>   
                    <small class="form-text text-muted">Number must begin with 7,8,9 </small>
                    </div>
                <div class="form-group">
                ${todo==='edit'?
                `
                <label for="inputStatus">Status</label>
                <select id="inputStatus" class="form-control" required>
                <option selected value="${contact.status}">${contact.status}</option>
                <option value="${contact.status==='Active'?'Inactive':'Active'}">${contact.status==='Active'?'Inactive':'Active'}</option>
                </select>
                `:
                `
                <label for="inputStatus">Status</label>
                <select id="inputStatus" class="form-control" required>
                    <option selected value="">Choose...</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                `}
                </div>
                <button type="submit" class="save-button btn btn-primary mr-2">Save</button>
                <a class="btn btn-primary" href="${window.location.href}" role="button">Cancel</a>
            </form> 
    `;

    
}
// export const clearFields=()=>{
//     document.getElementById('fname').value="";
//     document.getElementById('lname').value="";
//     document.getElementById('email1').value="";
//     document.getElementById('phone').value="";
//     // document.getElementById('fname').focus();
// }
