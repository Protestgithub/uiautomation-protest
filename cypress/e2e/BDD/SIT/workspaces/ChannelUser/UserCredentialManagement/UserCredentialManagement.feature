Feature: UserCredentialManagement

   #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1929
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


Scenario:To verify that employer able to click on reset password icon of login Id
Given Login into Mobiquity Portal with HeadMerchant credentials
When Navigate to User Management and Click on manage user for business user
And Enter Mobile number or KYC number of child business user in search menu2
And goto credencials submenu
And Click on reset password icon
And Assert the pop up message



 #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1933
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


Scenario:To verify that the business owner able to click on no button on pop up.
Given Login into Mobiquity Portal with HeadMerchant credentials
When Navigate to User Management and Click on manage user for business user
And Enter Mobile number or KYC number of child business user in search menu2
And goto credencials submenu
And Click on reset password icon
And click on NO button 



 #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1934
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


Scenario:To verify that Employer able to reset password of emailId
Given Login into Mobiquity Portal with HeadMerchant credentials
When Navigate to User Management and Click on manage user for business user
And Enter Mobile number or KYC number of child business user in search menu2
And goto credencials submenu
And Click on Reset password icon of Email Id
And Assert the pop up message



 #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1935
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test


Scenario:To verify that Employer able to click on No button on POP up
Given Login into Mobiquity Portal with HeadMerchant credentials
When Navigate to User Management and Click on manage user for business user
And Enter Mobile number or KYC number of child business user in search menu2
And goto credencials submenu
And Click on reset password icon
And click on NO button 
And Assert the credential



###########Thursday###############


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1936
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test

Scenario:To verify that Employer able to click on yes button on Pop up
Given Login into Mobiquity Portal with HeadMerchant credentials
When Navigate to User Management and Click on manage user for business user
And Enter Mobile number or KYC number of child business user in search menu2
And goto credencials submenu
And Reset password via email
And Assert the password reset message


#Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1937
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test

Scenario:To verify that after reset password default password must be 000000
Given Login into Mobiquity Portal with HeadMerchant credentials
When Navigate to User Management and Click on manage user for business user
And Enter Mobile number or KYC number of child business user in search menu2
And goto credencials submenu
And Reset password via email
And Click on Done button
Then Logout
When Login again into Mobiquity Portal as Merchant after password reset1


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1940
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test

Scenario:To verify that User able to click on change password button when confirm password is not same as new password
Given Login into Mobiquity Portal with HeadMerchant credentials
When Navigate to User Management and Click on manage user for business user
And Enter Mobile number or KYC number of child business user in search menu2
And goto credencials submenu
And Reset password via email
And Click on Done button
Then Logout
And Login again into Mobiquity Portal as Merchant after password reset3


    #Author: Bhagyashri
    #Last Updated:
    #Comments
    #Test Case_ID : TC_1941
    #TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags 
    @test

Scenario:To verify that User able to click on change password button when confirm password is same as new password
Given Login into Mobiquity Portal with HeadMerchant credentials
When Navigate to User Management and Click on manage user for business user
And Enter Mobile number or KYC number of child business user in search menu2
And goto credencials submenu
And Reset password via email
And Click on Done button

Scenario:To veritfy that user is able to see the success pop up message
Given Login again into Mobiquity Portal as Merchant after password reset for



