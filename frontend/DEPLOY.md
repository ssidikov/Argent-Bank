# Деплой в GitHub Pages

## 🚀 Важные обновления для GitHub Pages

### Исправление роутинга (v2.1.0)
- **Проблема**: GitHub Pages не поддерживает `BrowserRouter` для client-side роутинга
- **Решение**: Заменили `BrowserRouter` на `HashRouter` в `src/app/App.jsx`
- **Результат**: Теперь все роуты работают корректно на GitHub Pages

### URL структура:
- **Главная**: `https://cuzulique.github.io/Argent-Bank/#/`
- **Логин**: `https://cuzulique.github.io/Argent-Bank/#/login`
- **Профиль**: `https://cuzulique.github.io/Argent-Bank/#/profile`

## Работа с ветками деплоя

### Создание и переключение на ветку ver_2:

```bash
# Создать новую ветку ver_2 от текущей ветки
git checkout -b ver_2

# Или если ветка уже существует, переключиться на неё
git checkout ver_2

# Запушить ветку в удаленный репозиторий
git push -u origin ver_2
```

### Настройка ветки по умолчанию в GitHub:

1. Перейдите в **Settings** → **Branches**
2. Выберите `ver_2` как default branch (опционально)

## Автоматический деплой (рекомендуется)

### Настройка GitHub репозитория:

1. **Перейдите в настройки репозитория** на GitHub:
   - Settings → Pages

2. **Выберите источник деплоя**:
   - Source: GitHub Actions

3. **Пуш изменений**:
   ```bash
   git add .
   git commit -m "feat: setup GitHub Pages deployment"
   git push origin ver_2
   ```

После пуша в ветку `ver_2` автоматически запустится GitHub Actions workflow, который:
- Установит зависимости
- Соберет проект
- Задеплоит на GitHub Pages

Ваш сайт будет доступен по адресу: https://ssidikov.github.io/Argent-Bank

## Ручной деплой

Если хотите деплоить вручную с локального компьютера:

```bash
# Установите зависимости (если не установлены)
npm install

# Соберите проект и задеплойте
npm run deploy
```

## Полезные команды

```bash
# Только сборка проекта
npm run build

# Предпросмотр собранного проекта локально
npm run preview

# Деплой собранного проекта
npm run deploy
```

## Структура файлов деплоя

- `dist/` - папка со собранным проектом
- `.github/workflows/deploy.yml` - конфигурация GitHub Actions
- `vite.config.js` - настроена опция `base: '/Argent-Bank/'` для корректной работы на GitHub Pages

## Проверка деплоя

После деплоя проверьте:
- ✅ Сайт открывается по адресу GitHub Pages
- ✅ Все CSS стили загружаются корректно
- ✅ Изображения отображаются
- ✅ Роутинг работает (переходы между страницами)
- ✅ API запросы работают (если используется внешний API)

## Troubleshooting

### Если стили не загружаются:
- Проверьте, что в `vite.config.js` указан правильный `base: '/Argent-Bank/'`
- Убедитесь, что в `package.json` правильно указан `homepage`

### Если роутинг не работает:
- GitHub Pages не поддерживает client-side routing "из коробки"
- Рассмотрите использование hash router или добавьте `404.html` с редиректом

### Если деплой падает:
- Проверьте логи в GitHub Actions
- Убедитесь, что все зависимости установлены
- Проверьте права доступа в настройках репозитория
