@echo off
REM use with nodemon --exec ./copy-dist.bat for local library development
copy C:\Users\kreeb\Documents\Development\Code_Camp_2018\CC2018_Shared-Library\dist C:\Users\kreeb\Documents\Development\Code_Camp_2018\CC2018_Game-Server\node_modules\cc2018-ts-lib\dist
copy C:\Users\kreeb\Documents\Development\Code_Camp_2018\CC2018_Shared-Library\dist C:\Users\kreeb\Documents\Development\Code_Camp_2018\CC2018_Score-Service\node_modules\cc2018-ts-lib\dist
echo Local Game_Server Module Updated