class ContactUS_po{
    EnterURl(){
        cy.visit('https://tutorialsninja.com/demo/index.php?route=information/contact');
    }

ContactUs(){
    //Test Case : Valid Submission

    //Name
    cy.get('input[id="input-name"]').type('Goutam');

    //Email
    cy.get('input[id="input-email"]').type('mrking05112001@gmail.com');

    //Enquiry
    cy.get('#input-enquiry').type('This  is test enquiry');

    //Submit
    cy.get('input[type="submit"]').click();
    
}
ContactUs1(){
    //Test Case 1: Long Enquiry Message

    //Name
    cy.get('input[id="input-name"]').type('Goutam');

    //Email
    cy.get('input[id="input-email"]').type('mrking05112001@gmail.com');

    //Enquiry
    cy.get('#input-enquiry').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ipsum a eros imperdiet viverra. Nulla facilisi');

    //Submit
    cy.get('input[type="submit"]').click();
    cy.contains('Contact Us').should('be.visible');
    
}
ContactUs2(){
    //Test Case 2: Empty Form Submission

    cy.get('input[type="submit"]').click();
    // Assert error messages
    cy.contains('Name must be between 3 and 32 characters!').should('be.visible');
    cy.contains('E-Mail Address does not appear to be valid!').should('be.visible');
    cy.contains('Enquiry must be between 10 and 3000 characters!').should('be.visible');
    
    
}
ContactUs3(){
    //Test Case 3: Invalid Email Format

    //Name
    cy.get('input[id="input-name"]').type('Goutam');

    //Email
    cy.get('input[id="input-email"]').type('123456');

    //Enquiry
    cy.get('#input-enquiry').type('This  is test enquiry');

    //Submit
    cy.get('input[type="submit"]').click();

    cy.contains('E-Mail Address does not appear to be valid!').should('be.visible');
    
}
ContactUs4(){
    //Test Case 4 : Invalid Name

    //Name
    cy.get('input[id="input-name"]').type('Go');

    //Email
    cy.get('input[id="input-email"]').type('mrking05112001@gmail.com');

    //Enquiry
    cy.get('#input-enquiry').type('This  is test enquiry');

    //Submit
    cy.get('input[type="submit"]').click();

    cy.contains('Name must be between 3 and 32 characters!').should('be.visible');
    
}
}
export default ContactUS_po;