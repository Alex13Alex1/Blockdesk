# Инструкции по откату визуальных улучшений

Если нужно вернуть сайт к предыдущей версии, выполните следующие шаги:

## Быстрый откат через Git

```bash
# Посмотреть последний коммит перед изменениями
git log --oneline -5

# Откатить изменения (замените COMMIT_HASH на хеш коммита перед улучшениями)
git revert HEAD
# или
git reset --hard COMMIT_HASH
```

## Ручной откат

### 1. Удалить новые компоненты

Удалите файлы:
- `src/components/ParticlesBackground.tsx`
- `src/components/ScrollReveal.tsx`

### 2. Откатить изменения в `src/App.tsx`

Удалите импорты:
```tsx
import { ParticlesBackground } from "./components/ParticlesBackground";
import { ScrollReveal } from "./components/ScrollReveal";
```

### 3. Откатить Hero секцию

Замените:
```tsx
<section className="relative pt-14 md:pt-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
  <ParticlesBackground />
  ...
```

На:
```tsx
<section className="pt-14 md:pt-20">
  ...
```

И уберите классы `text-gradient` с заголовка h1.

### 4. Откатить VisualMarketShift

Верните оригинальный SVG вместо карточек сравнения.

### 5. Откатить CSS

В `src/index.css` удалите:
- `.text-gradient`
- `.glow-green`
- `.glow-green-soft`
- `.glassmorphism`
- `.glassmorphism-dark`

### 6. Откатить Footer кнопку

Замените зеленую кнопку:
```tsx
className="... bg-green-500 ..."
```

На:
```tsx
className="... bg-white ... text-slate-900"
```

### 7. Убрать ScrollReveal обертки

Удалите все `<ScrollReveal>` обертки вокруг секций.

### 8. Убрать чередующиеся фоны

Удалите классы `bg-slate-50` из секций.

## Проверка

После отката запустите:
```bash
npm run build
```

Убедитесь, что нет ошибок компиляции.
