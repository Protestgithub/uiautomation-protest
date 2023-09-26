
   Feature: Transfer control profile 


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : 1827

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To verify that superadmin is able to delete instrument level TCP.
    Given Login into Mobiquity Portal as System admin Maker
    When Navigate to TCP and Click on Manage Transfer Level TCP
    And click on delete
   

    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : 1833

    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

    Scenario:To Verify that The Instrument level TCP cannot be delete if any user is associated with it.
    Given Login into Mobiquity Portal as System admin Maker
     When Navigate to TCP and Click on Manage Transfer Level TCP
     And click on delete1