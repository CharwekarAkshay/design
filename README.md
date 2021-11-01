# Design : Movie Review Server
Application build with angular and spring boot as a technlogy stack.
For backend we have used Mongo db server

# Application Configuration
We have to create a keystore so that application used it for authetication of user

Command for generating private key. Ex pass phrase: **desing-backend**

    openssl genrsa -des3 -out private.pem 2048

Extracting public key out of it

    openssl rsa -in private.pem -outform PEM -pubout -out public.pem

https://sockettools.com/kb/creating-certificate-using-openssl/


https://stackoverflow.com/questions/4022604/java-how-to-obtain-keystore-file-for-a-certification-crt-file