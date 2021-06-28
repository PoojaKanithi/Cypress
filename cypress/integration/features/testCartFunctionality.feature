Feature: Shopping on Tools QA 
I want to shop on Tools QA Shopping Website

Scenario: verifying cart functionality

Given I navigate to shopping Website
And I login with my credentials
And I remove products from cart
When I do the search for shirt
Then I add products and do verification on the Cart Page
And I do logout successfully

