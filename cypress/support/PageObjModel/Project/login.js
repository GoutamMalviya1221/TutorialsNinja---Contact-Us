class Login_po{
    EnterURl(){
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
    }

Login(){

    cy.get('(//*[@class="hidden-xs hidden-sm hidden-md"])[3]').click();
    cy.get('[class="dropdown-menu dropdown-menu-right"]').find('[class="dropdown-menu dropdown-menu-right"]').should('have.length',2);
    cy.get('a[href="https://tutorialsninja.com/demo/index.php?route=account/login"]')

    //Username
    cy.get('input[name="email"]').type('mrking05112001@gmail.com');

    //Password
    cy.get('input[name="password"]').type('Goutam@1221');

    //Login button
    cy.get('input[type="submit"]').click();
    
}
}

export default Login_po;