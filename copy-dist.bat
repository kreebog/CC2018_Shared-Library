@echo off
REM use with "nodemon --exec ./copy-dist.bat for local library development"
copy "C:\Users\James\Code_Camp_2018\CC2018_Shared-Library\dist" "C:\Users\James\Code_Camp_2018\CC2018-Game_Server\node_modules\cc2018-ts-lib\dist"
copy "C:\Users\James\Code_Camp_2018\CC2018_Shared-Library\dist" "C:\Users\James\Code_Camp_2018\CC2018_Maze-Service\node_modules\cc2018-ts-lib\dist"
copy "C:\Users\James\Code_Camp_2018\CC2018_Shared-Library\dist" "C:\Users\James\Code_Camp_2018\CC2018_Team-Service\node_modules\cc2018-ts-lib\dist"
copy "C:\Users\James\Code_Camp_2018\CC2018_Shared-Library\dist" "C:\Users\James\Code_Camp_2018\CC2018_Game-Monitor\node_modules\cc2018-ts-lib\dist"
REM copy "C:\Users\kreeb\Documents\Development\Code_Camp_2018\CC2018_Shared-Library\dist" "C:\Users\kreeb\Documents\Development\Code_Camp_2018\CC2018_Game-Server\node_modules\cc2018-ts-lib\dist"
echo Local Game_Server Module Updated