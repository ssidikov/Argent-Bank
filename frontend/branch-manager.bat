@echo off
REM Скрипт для управления ветками и деплоем

echo ========================================
echo    Argent Bank - Управление ветками
echo ========================================

:menu
echo.
echo Выберите действие:
echo 1. Переключиться на ветку ver_2
echo 2. Переключиться на ветку master
echo 3. Создать новую ветку
echo 4. Собрать проект
echo 5. Деплоить в GitHub Pages
echo 6. Просмотреть статус
echo 7. Выход
echo.

set /p choice="Введите номер (1-7): "

if "%choice%"=="1" goto ver2
if "%choice%"=="2" goto master
if "%choice%"=="3" goto newbranch
if "%choice%"=="4" goto build
if "%choice%"=="5" goto deploy
if "%choice%"=="6" goto status
if "%choice%"=="7" goto exit

echo Неверный выбор!
goto menu

:ver2
echo Переключение на ветку ver_2...
git checkout ver_2
if %errorlevel% neq 0 (
    echo Ошибка при переключении на ver_2
    pause
)
goto menu

:master
echo Переключение на ветку master...
git checkout master
if %errorlevel% neq 0 (
    echo Ошибка при переключении на master
    pause
)
goto menu

:newbranch
set /p branchname="Введите имя новой ветки: "
echo Создание ветки %branchname%...
git checkout -b %branchname%
if %errorlevel% neq 0 (
    echo Ошибка при создании ветки
    pause
)
goto menu

:build
echo Сборка проекта...
npm run build
if %errorlevel% neq 0 (
    echo Ошибка при сборке
    pause
)
goto menu

:deploy
echo Деплой в GitHub Pages...
npm run deploy
if %errorlevel% neq 0 (
    echo Ошибка при деплое
    pause
)
goto menu

:status
echo Текущий статус:
echo.
echo === Текущая ветка ===
git branch
echo.
echo === Статус изменений ===
git status --short
echo.
pause
goto menu

:exit
echo До свидания!
pause
exit
