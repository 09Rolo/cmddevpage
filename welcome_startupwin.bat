@echo off
title Udvozlet!




SET TempVBSFile=%temp%\~tmpSendKeysTemp.vbs
IF EXIST "%TempVBSFile%" DEL /F /Q "%TempVBSFile%"
ECHO Set WshShell = WScript.CreateObject("WScript.Shell") >>"%TempVBSFile%"
ECHO Wscript.Sleep 700                                    >>"%TempVBSFile%"
ECHO WshShell.SendKeys "{F11}"                            >>"%TempVBSFile%
ECHO Wscript.Sleep 700                                    >>"%TempVBSFile%"

CSCRIPT //nologo "%TempVBSFile%"






color c

echo.
echo.
echo Loading...
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.


echo                                                                                         _________-----_____
echo                                                                               ____------           __      ----_
echo                                                                         ___----             ___------              \
echo                                                                            ----________        ----                 \
echo                                                                                       -----__    ^|             _____)
echo                                                                                            __-                /     \
echo                                                                                _______-----    ___--          \    /)\
echo                                                                          ------_______      ---____            \__/  /
echo                                                                                       -----__    \ --    _          /\
echo                                                                                              --__--__     \_____/   \_/\
echo                                                                                                      ---^|   /          ^|
echo                                                                                                         ^| ^|___________^|
echo                                                                                                         ^| ^| ((_(_)^| )_)
echo                                                                                                         ^|  \_((_(_)^|/(_)
echo                                                                                                          \             (
echo                                                                                                           \_____________)
                                                            
                                                            
                                        

:udvozlet                                                           
ping localhost -n 2 >nul
cls
color 6

echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.
echo.

echo                                                                             _    _       _                         _          _     _ 
echo                                                                            ^| ^|  ^| ^|     ^| ^|                       ^| ^|        ^| ^|   ^| ^|
echo                                                                            ^| ^|  ^| ^|   __^| ^| __   __   ___    ____ ^| ^|   ___  ^| ^|_  ^| ^|
echo                                                                            ^| ^|  ^| ^|  / _` ^| \ \ / /  / _ \  ^|_  / ^| ^|  / _ \ ^| __^| ^| ^|
echo                                                                            ^| ^|__^| ^| ^| (_^| ^|  \ V /  ^| (_) ^|  / /  ^| ^| ^|  __/ ^| ^|_  ^|_^|
echo                                                                             \____/   \__,_^|   \_/    \___/  /___^| ^|_^|  \___^|  \__^| (_)


ping localhost -n 4 >nul
start "" https://dev.kissroland.hu/
 
ping localhost -n 2 >nul
exit