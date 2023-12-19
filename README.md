# LuxolisLoginFunctionality
This is my result for the coding test assignment to implement a login functionality. I used VS Code as a development environment.

## Structure
The project consists of three main files: The index.html, the login.js and the style.css. Index.html creates the look of the website with its elements, style.css modifies the look of the elements and login.js contains the logic that is needed for the webpage to be responsive.\
The Html folder contains two blank webpages that are linked to, stating a simple sentence about what logic they are supposed to represent.\
The Svg folder contains the Svf images that I got from the Figma model.

## Usage
To display the service on the web, use index.html as a starting point to run the service. A page will appear that is identical to the model in Figma. \
The user can input an email and a password. Since the account is hardcoded (because a backend doesn't exist), the login will only work with the designated login (test@luxpmsoft.com) and password (test1234!). The service doesn't check for a correct email, but the login will only be successful when the email AND the password match the account's email and password.\
When the user starts typing in a password, an alert will appear that the password contains the wrong combination of letters, numbers and special characters. The alert will only disappear when the password contains at least one letter, number and special character, not regarding the overall correctness of the password. If the password is still wrong, though, and the user either presses ENTER or clicks on the LOGIN button, an alert will appear that the provided password is wrong. The user can click on the OK button and try again. \
Furthermore, the user can click on "Forgot Password?" and will be redirected to a blank page that could hold a reset functionality in the future.
