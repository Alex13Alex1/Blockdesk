# Инструкция по загрузке на GitHub

## Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на https://github.com/new
2. Название репозитория: `Blockdesk` (или любое другое)
3. Оставьте репозиторий **публичным** или **приватным** (на ваше усмотрение)
4. **НЕ** добавляйте README, .gitignore или лицензию (они уже есть)
5. Нажмите "Create repository"

## Шаг 2: Подключите локальный репозиторий к GitHub

После создания репозитория GitHub покажет вам команды. Используйте эти команды:

```bash
git remote add origin https://github.com/YOUR_USERNAME/Blockdesk.git
git branch -M main
git push -u origin main
```

Замените `YOUR_USERNAME` на ваш GitHub username.

## Альтернативный способ (через SSH)

Если у вас настроен SSH ключ:

```bash
git remote add origin git@github.com:YOUR_USERNAME/Blockdesk.git
git branch -M main
git push -u origin main
```

## Проверка

После выполнения команд, ваш код будет на GitHub по адресу:
`https://github.com/YOUR_USERNAME/Blockdesk`
