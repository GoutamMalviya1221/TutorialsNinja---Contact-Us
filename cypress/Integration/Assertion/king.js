describe('king', () => {
    it('test1', () => {
        

        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home');
 
        cy.contains('My Account').click();
        //cy.contains('[class="dropdown-menu dropdown-menu-right"]').find('[class="dropdown-menu dropdown-menu-right"]').should('have.length',2);
        cy.get('a[href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
    
        //Username
        cy.get('input[name="email"]').type('mrking05112001@gmail.com');
    
        //Password
        cy.get('input[name="password"]').type('Goutam@1221');
    
        //Login button
        cy.get('input[type="submit"]').click();
        cy.get('[name="search"]').type('hp');
        cy.get('.btn-default').click();
        cy.contains('Add to Cart').click({force:true});
        cy.get('a[title="Shopping Cart"]').click();
        cy.contains('Add to Cart').click();
        cy.get('[id="cart-total"]').click();
        cy.contains('Checkout').click();
        cy.get('input[id="button-payment-address"]').click();
        cy.get('input[id="button-shipping-address"]').click();
        cy.get('input[id="button-shipping-method"]').click();
        cy.get('input[name="agree"]').check();
        cy.get('input[id="button-payment-method"]').click();
        cy.get('input[id="button-confirm"]').click();
        cy.contains('store owner').click();
        cy.contains('MP3 Players').click();
        cy.contains('Show AllMP3 Players').click();
        cy.contains('Contact Us').click();
        cy.get('(//*[@class="col-sm-10"])[3]').type('Goutam Malviya');
   

        
    });
});