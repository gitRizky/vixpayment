Feature: Verify user able to join VIX VIP Access after payment

    Scenario: Unauthenticated user checkout program

        Given User navigates to the VIX detail page
        When User click “Daftar Sekarang”
        Then User redirected to login page
        When User fill login credential and submit
        Then The system redirects user to VIX detail page
        And User continue to checkout following Scenario#1
