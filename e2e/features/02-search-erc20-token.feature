Feature: Search ERC20 tokens

    Scenario: The user can search for an existing ERC20 token and see his balance and deposit history for the selected token.
        Given A user with metamask installed connected to sepolia network - Test 2 Scenario 1
        When the user accesses the app page - Test 2 Scenario 1
        When the user enters the address 0x9982f9A3bA28c34aD03737745d956EC0668ea440 in the input address field - Test 2 Scenario 1
        When the user clicks the Submit button - Test 2 Scenario 1
        Then the page shows the address balance for the selected token - Test 2 Scenario 1
        Then the page shows the table of the deposit history for the selected token - Test 2 Scenario 1

    Scenario: The user enter an invalid ERC20 token address
        Given A user with metamask installed connected to sepolia network - Test 2 Scenario 2
        When the user accesses the app page - Test 2 Scenario 2
        When the user enters the address 0x9982f9A3bA28c in the input address field - Test 2 Scenario 2
        Then the submit button is disabled - Test 2 Scenario 2

    Scenario: The user clicks the example token link and he will be able to see his balance and deposit history.
        Given A user with metamask installed connected to sepolia network - Test 2 Scenario 3
        When the user accesses the app page - Test 2 Scenario 3
        When the user clicks the example token link - Test 2 Scenario 3
        Then the page shows the address balance for the selected token - Test 2 Scenario 3
        And the page shows the table of the deposit history for the selected token - Test 2 Scenario 3