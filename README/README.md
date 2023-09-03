Aidan Reed

This is a random password generator that will produce a password from  a set of charaters designated by the user. 

The user, upon clicking the 'Generate Password' button in red at the bottom of the page, will be prompted with a few questions regarding the paramaters of the password.

The information the user must provide:
    - Password length which must be AT LEAST 8 characters and NO MORE THAN 128 characters.
    - If lower case letters should be included in the generated password.
    - If upper case letters should be included in the generated password.
    - If numbers should be included in the generated password.
    - If symbols should be included in the generated password. 

Note: If the user has chosen a password length less than 8 or greater than 128 characters, the user will be prompted with an error message and the program will restart from the beginning.

Note: If the user has NOT chosen at least one category of characters to include, the user will be prompted with an error message and the program will restart from the beginning.

Once these questions have been responded to the script will begin to generate the randomized password, this is done by using a 'for loop' to pick a random character in the array 'characters'. After the random function has chosen a character it will then be added to the 'randomPassword' array which will, after the loop completes, display in the text box above the 'Generate Password' button. 