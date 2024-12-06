# Верстка DAB на Gulp 4
## Код проекта находится в ветке dev
Gulp 4 сборка. HTML, SCSS, JS, webpack, babel, webp, сжатие графики, автопрефиксы

## Для чего использовать?

Для вёрстки многостраничных сайтов. Используется импорт HTML-файлов и препроцессор SCSS для CSS-стилей.

## Как устроена?
* Исходные файлы проекта лежат в папке src. Конечные файлы при разработке падают в папку `build`. При запуске сборки командой `gulp` папка `build` очищается. Это не полностью сжатая версия сайта для разработки.
* При запуске сборки командой `gulp docs` обработанные файлы помещаются в папку `docs` чтобы можно было настроить отображение результата работы сборки на github pages. Это финальная, полностью сжатая версия сайта.
* Настроено слежение и копирование: изображений (папка `src\img`), скриптов (папка `src\js`).
* В финальной версии автоматически создаются копии изображений в формате `webp`.
* Настроено автоматическое добавление префиксов CSS-свойств и создание карт исходных стилей (в каком SCSS-файле и в какой строке изначально было написано CSS-свойство).

## Как использовать:

1. На компьютере должен быть установлен Node Package Manager. Изначально использовалась версия 20 +

2. Клонировать на локальный ПК репозиторий командой:

`git clone git@github.com:Sergej96/DAB.git`

3. Проверить, чтобы версия node.js была не ниже 20. Из папки DAB вызвать командную строку (например Git Bash), и ввести команду `npm i` для инициализации проекта. Подождать пока будут установлены необходимые пакеты.

4. Запустить сборку командой `gulp` для разработки
   либо командой `gulp doc` для получения готовой для работы версии. Смотрим package.json

6. Сборка запустится вместе с демонстрационными данными. Нужно удалить ненужные для вашего проекта файлы и отредактировать содержимое основных файлов (`main.scss`, `index.html`, `index.js`).

### Структура папок

1. В папке `src\html` - html-шаблоны HTML-страниц сайта

    1. В папке `src\html\` - шаблоны страниц сайта
    2. В папке `src\html\blocks` - шаблоны частей страниц сайта. Эти шаблоны не компилируются в отдельные файлы

2. В папке `src\scss` - SCSS стили
   
    1. В папке `src\scss\base` - базовые стили (контейнеры, `reset.css`, липкий подвал, утилитарные классы, CSS-переменные)
    2. В папке `src\scss\blocks` - стили блоков (частей страниц) сайта

4. В папке `src\img` - картинки сайта

5. В папке `src\js` - скрипты сайта

### Непосредственно сам процесс разработки
 Весь процесс разработки происходит в папке `src`. Внутри находятся папки `html`, `scss`, `img`, `js`, `fonts`.
1. В папке `html` находятся html-шаблоны страниц сайта. Файл index.html - главная страница сайта она же точка входа. Каждая отдельная страница сайта - это отдельная папка с названием страницы, например `catalog`, внутри которой должен находиться файл index.html. Далее каждая страница делится на отдельные блоки. Например, `header`, `footer`. Для всех блоков есть отдельная папка `blocks` внутри папки `html`. Каждый блок представляет из себя файл с названием блока, например `header.html`. Чтобы использовать блок внутри страницы html, нужно вставить в нужный блок следующий код:  @@include('../blocks/header.html'). Где  @@include - это макрос, который подключает нужный блок. В скобках указывается путь к файлу блока, который нужно подключить. В данном случае это `../blocks/header.html`. Есть возможность при подключении файла блока указать переменную, которая будет передаваться в блок. Например: @@include('../blocks/header.html', { "title": "Заголовок" }). В данном случае в блок будет передана переменная `title` со значением `Заголовок`. Внутри блока можно использовать эту переменную. Например: `<h1>@@title</h1>`.

2. В папке `scss` находятся стили сайта. Внутри папки `scss` находятся папки `base`, `blocks`, `pages` и главный файл стилей `main.scss`. В папке `base` находятся базовые стили, которые используются на всех страницах сайта. В папке `blocks` находятся стили блоков. Каждый блок имеет свой файл стилей, который называется как блок только с нижним подчёркиванием вначале. Например, `_header.scss`. Внутри блока можно использовать переменные, которые определены в файле `base/_var.scss`. Например: `color: $color-primary;`. Также можно использовать миксины, которые определены в файле `base/_mixins.scss`. Например: `@use "../base/mixins"`. В папке `pages` находятся стили страниц. Каждая страница имеет свой файл стилей, который называется как страница. Например, `catalog.scss`. Внутри страницы можно использовать переменные, которые определены в файле `base/_var.scss`. Например: `color: $color-primary;`. Также можно использовать миксины, которые определены в файле `base/_mixins.scss`. Например: `@use "../base/mixins"`. В главном файле стилей `main.scss` подключаются все стили. Стили которые мы пишем для конкретной странице в папке `pages` подключаются в соответствующий файл страницы только с расширением css. Например, стили для страницы `catalog.html` подключаются в файл `<link rel="stylesheet" href="../css/catalog.css" />`. Gulp автоматически собирает все стили из SCSS и сохраняет в папку `css` с соответствующим названием.

3. В папке fonts находятся шрифты. Подключаются они следующим образом. В файле `scss/base/_font.scss` подключаются все шрифты, которые используются на странице или блоке. Например: `@font-face { font-family: 'Roboto'; src: url('../fonts/Roboto-Regular.woff2') format('woff2'), url('../fonts/Roboto-Regular.woff') format('woff'); font-weight: 400; font-style: normal; font-display: swap; }`. Но только сам файл шрифта должен быть загружен в папку fonts.

4. В папке img находятся изображения. Картинки подключаются следующим образом: `<img src="../../img/sustainability-cat-1.jpg" alt="" />`. Gulp собирает все изображения и сохраняет в папку `img`.

5. В папке js находятся скрипты. Скрипты подключаются следующим образом: `<script src="./js/index.bundle.js"></script><script src="./js/main.bundle.js"></script>` в главном файле index.html. Gulp собирает все скрипты и сохраняет в папку `js`. По аналогии со стилями скрипт, который используется на конкретной странице в папке `pages` подключается в соответствующий файл страницы. Например, скрипт для страницы `about-us/index.html` подключается в файл `<script src="../js/about-us.bundle.js"></script>`.