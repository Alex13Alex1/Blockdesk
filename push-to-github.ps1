# Скрипт для отправки кода на GitHub
# Замените YOUR_USERNAME на ваш GitHub username

$username = Read-Host "Введите ваш GitHub username"
$repoName = Read-Host "Введите название репозитория (по умолчанию: Blockdesk)" 

if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "Blockdesk"
}

Write-Host "`nПодключение к GitHub репозиторию..." -ForegroundColor Yellow
git remote add origin "https://github.com/$username/$repoName.git"

Write-Host "`nОтправка кода на GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host "`nГотово! Ваш код теперь на GitHub:" -ForegroundColor Green
Write-Host "https://github.com/$username/$repoName" -ForegroundColor Cyan
