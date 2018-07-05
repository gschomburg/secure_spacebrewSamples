Spacebrew Secure Server Sample
================
* Button sample code from [https://github.com/Spacebrew/spacebrew.js](https://github.com/Spacebrew/spacebrew.js)

Getting Started
---------------  
  
### 1. Install Dependencies
* get the secure fork of spacebrew [found here](https://github.com/gschomburg/spacebrew) This may eventually get merged into spacebrew master
* Follow all the install instructions (for the install there's nothing different from the main spacebrew branch)
* run `npm install` in secure_server folder to install the server that will run the sample

### 2. Start the Sample Server and Spacebrew
* inside secure_server run `node index.js`
* in the secure spacebrew fork run `node node_server_forever.js --secure`

### 3. Run the Sample and Connect in Spacebrew
* when viewing the sample or the spacebrew admin you will probably get warnings about untrusted certs. in chrome you should be able to click 'advanced' and then choose to proceed any way. there are two resources posted at the end of the page that provide methods of getting rid of these errors.
* once the sample server is running go to: [https://localhost:9001/secure_spacebrew_button.html?server=localhost&name=secureButton&secure=1](https://localhost:9001/secure_spacebrew_button.html?server=localhost&name=secureButton&secure=1) The sample should connect to spacebrew
* then open the spacebrew admin [https://localhost:9000/?server=localhost&secure=1](https://localhost:9000/?server=localhost&secure=1) and connect the button press publish to the toggleBackground subscribe
* pressing the button in the sample should now toggle the background color 

### (optional/for production) Setup localhost certs
* both this example and the secure spacebrew fork have localhost certificates included that can be used for quick start (they should work)
* if you are using localhost there's a few resources for generating certs and setting up a secure localhost
    - [How To Set Up HTTPS Locally](https://deliciousbrains.com/https-locally-without-browser-privacy-errors/)
    - [How To Create Your Own SSL Certificate Authority](https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development/)
