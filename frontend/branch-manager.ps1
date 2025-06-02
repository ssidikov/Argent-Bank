# Скрипт для управления ветками и деплоем в PowerShell

function Show-Menu {
    Clear-Host
    Write-Host "========================================"
    Write-Host "   Argent Bank - Управление ветками"
    Write-Host "========================================"
    Write-Host ""
    Write-Host "1. Переключиться на ветку ver_2"
    Write-Host "2. Переключиться на ветку master"
    Write-Host "3. Создать новую ветку"
    Write-Host "4. Собрать проект"
    Write-Host "5. Деплоить в GitHub Pages"
    Write-Host "6. Просмотреть статус"
    Write-Host "7. Запушить текущую ветку"
    Write-Host "8. Выход"
    Write-Host ""
}

function Switch-ToBranch {
    param([string]$BranchName)
    
    Write-Host "Переключение на ветку $BranchName..." -ForegroundColor Yellow
    git checkout $BranchName
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Успешно переключились на ветку $BranchName" -ForegroundColor Green
    } else {
        Write-Host "Ошибка при переключении на ветку $BranchName" -ForegroundColor Red
    }
    
    Read-Host "Нажмите Enter для продолжения"
}

function New-Branch {
    $branchName = Read-Host "Введите имя новой ветки"
    
    Write-Host "Создание ветки $branchName..." -ForegroundColor Yellow
    git checkout -b $branchName
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Успешно создали ветку $branchName" -ForegroundColor Green
    } else {
        Write-Host "Ошибка при создании ветки" -ForegroundColor Red
    }
    
    Read-Host "Нажмите Enter для продолжения"
}

function Build-Project {
    Write-Host "Сборка проекта..." -ForegroundColor Yellow
    npm run build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Сборка завершена успешно" -ForegroundColor Green
    } else {
        Write-Host "Ошибка при сборке" -ForegroundColor Red
    }
    
    Read-Host "Нажмите Enter для продолжения"
}

function Deploy-Project {
    Write-Host "Деплой в GitHub Pages..." -ForegroundColor Yellow
    npm run deploy
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Деплой завершен успешно" -ForegroundColor Green
    } else {
        Write-Host "Ошибка при деплое" -ForegroundColor Red
    }
    
    Read-Host "Нажмите Enter для продолжения"
}

function Show-Status {
    Write-Host "Текущий статус:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "=== Текущая ветка ===" -ForegroundColor Yellow
    git branch
    Write-Host ""
    Write-Host "=== Статус изменений ===" -ForegroundColor Yellow
    git status --short
    Write-Host ""
    
    Read-Host "Нажмите Enter для продолжения"
}

function Push-Current {
    $currentBranch = git branch --show-current
    Write-Host "Пуш ветки $currentBranch..." -ForegroundColor Yellow
    
    git add .
    $commitMessage = Read-Host "Введите сообщение коммита"
    git commit -m $commitMessage
    git push origin $currentBranch
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Успешно запушили в $currentBranch" -ForegroundColor Green
    } else {
        Write-Host "Ошибка при пуше" -ForegroundColor Red
    }
    
    Read-Host "Нажмите Enter для продолжения"
}

# Главный цикл
do {
    Show-Menu
    $choice = Read-Host "Введите номер (1-8)"
    
    switch ($choice) {
        "1" { Switch-ToBranch "ver_2" }
        "2" { Switch-ToBranch "master" }
        "3" { New-Branch }
        "4" { Build-Project }
        "5" { Deploy-Project }
        "6" { Show-Status }
        "7" { Push-Current }
        "8" { 
            Write-Host "До свидания!" -ForegroundColor Green
            break 
        }
        default { 
            Write-Host "Неверный выбор!" -ForegroundColor Red
            Read-Host "Нажмите Enter для продолжения"
        }
    }
} while ($choice -ne "8")
