Feature: The application works only with the Sepolia network

    Scenario: The user accesses the page with Metamask connected to Mainnet network
        Given A user with metamask installed connected to mainnet network - Test 1 Scenario 1
        When the user accesses the app page - Test 1 Scenario 1
        Then the page shows a network error message - Test 1 Scenario 1
        Then the page shows the switch network button - Test 1 Scenario 1
        Then the page doesn't show the input address field - Test 1 Scenario 1

    Scenario: The user accesses the page with Metamask connected to Sepolia network
        Given A user with metamask installed connected to mainnet network - Test 1 Scenario 2
        When the user accesses the app page - Test 1 Scenario 2
        When the user accepts notifications to connect to Sepolia network - Test 1 Scenario 2
        Then the page shows the account address - Test 1 Scenario 2
        Then the page shows the input address field - Test 1 Scenario 2
        Then the page doesn't show a network error message - Test 1 Scenario 2

    Scenario: The user accesses the page with Metamask connected to Mainnet network and uses the switch network button
        Given A user with metamask installed connected to mainnet network - Test 1 Scenario 3
        When the user accesses the app page - Test 1 Scenario 3
        When the user clicks the switch network button - Test 1 Scenario 3
        When the user confirms the switch network - Test 1 Scenario 3
        Then the page shows the input address field - Test 1 Scenario 3
        And the page doesn't show a network error message - Test 1 Scenario 3