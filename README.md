# Design : Movie Review Server
Application build with angular and spring boot as a technlogy stack.
For backend we have used Mongo db server

# Application Configuration
We have to create a keystore so that application used it for authetication of user

    C:\Users\ASUS\.jdks\temurin-11.0.12\bin\keytool  -genkey -alias designDomain -keyalg RSA -keystore
    design-backend.jks -keysize 2048

    C:\Users\ASUS\.jdks\temurin-11.0.12\bin\keytool  -certreq -alias designDomain -keystore design-bac
    kend.jks -file designDomain.csr