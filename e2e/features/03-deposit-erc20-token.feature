Feature: Deposit ERC20 tokens

  Scenario: The user try to deposit a ERC20 token with an empty balance
    Given A user with metamask installed connected to sepolia network - Test 3 Scenario 1
    When the user accesses the app page - Test 3 Scenario 1
    When the user enters the address 0xCD85B9a767eF2277E264A4B9A14a2deACAB82FfB in the input address field - Test 3 Scenario 1
    When the user clicks the Submit button - Test 3 Scenario 1
    Then the page shows the token balance 0 - Test 3 Scenario 1
    Then the deposit input shows an error - Test 3 Scenario 1
    Then the deposit button is not visible - Test 3 Scenario 1

  Scenario: The user mint example token using the web application
    Given A user with metamask installed connected to sepolia network - Test 3 Scenario 2
    When the user accesses the app page - Test 3 Scenario 2
    When the user clicks the example token link - Test 3 Scenario 2
    When the user clicks the Get more tokens link - Test 3 Scenario 2
    When the user accepts the transaction - Test 3 Scenario 2
    Then the deposit button is visible - Test 3 Scenario 1

  Scenario: The user deposit example token
    Given A user with metamask installed connected to sepolia network - Test 3 Scenario 3
    When the user accesses the app page - Test 3 Scenario 3
    And the user clicks the example token link - Test 3 Scenario 3
    And the deposit button is visible - Test 3 Scenario 3
    And the user enter the max amount of tokens in the amount field - Test 3 Scenario 3
    And the user clicks the deposit button - Test 3 Scenario 3
    And the user approve the deposit - Test 3 Scenario 3
    Then the page shows the token balance 0 - Test 3 Scenario 3