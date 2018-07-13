@echo off
REM use with nodemon --exec ./copy-dist.bat for local library development
copy %CD%\dist %CD%\..\CC2018_Game-Server\node_modules\cc2018-ts-lib\dist
copy %CD%\dist %CD%\..\CC2018_Game-Monitor\node_modules\cc2018-ts-lib\dist
echo Local Game_Server Module Updated