// cypress/integration/test_spec.js

const config = require('../config/config.json');

describe('E-commerce Workflow', () => {
  beforeEach(() => {
    cy.visit(config.appUrl); // Visit the application URL from config
  });

  it('should complete the e-commerce workflow', () => {
    // Step 1: Search for a product
    cy.get('[name="search"]').type('Product Name');
    cy.get('.fa-search').click(); // Assuming this is the search button

    // Step 2: Add to Cart
    cy.contains('Add to Cart').click(); // Assuming the button text is 'Add to Cart'

    // Step 3: Go to Shopping Cart
    cy.contains('shopping cart!').click();

    // Step 4: Click on Checkout
    cy.contains('Checkout').click();

    // Step 5-8: Continue through checkout steps
    cy.contains('Continue').click({ multiple: true });

    // Step 9: Agree to Terms & Conditions
    cy.get('[name="agree"]').check();

    // Step 10: Final Continue
    cy.contains('Continue').click();

    // Step 11: Confirm Order
    cy.contains('Confirm Order').click();

    // Step 12: Click on store owner link in Order Success page
    cy.contains('store owner').click();

    // Step 13: Click on the searched product link from header options
    cy.contains('Your Searched Product').click(); // Replace with actual product text

    // Step 14: Click on Contact Us page
    cy.contains('Contact Us').click();

    // Step 15: Fill mandatory fields in Contact Us page
    cy.get('[name="name"]').type('Your Name');
    cy.get('[name="email"]').type('your@email.com');
    cy.get('[name="enquiry"]').type('Your enquiry message');

    // Step 16: Submit the form
    cy.contains('Submit').click();

    // Step 17: Continue (if needed)
    cy.contains('Continue').click(); // Adjust based on actual flow

    // Assertions can be added as needed to validate each step
    // Example:
    cy.url().should('include', 'order_success'); // Validate if on order success page
  });
});