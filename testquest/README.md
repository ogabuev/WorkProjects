# Task

Требования: Обязательно использование Angular, Reactive Form, RxJs

Поля «Наименование», «Автор маршрута» являются обычными текстовыми полями. 

Поле «Тип исполнителя» - выпадающий список (Select). Возможные варианты для выбора на усмотрение исполнителя.

 «Дни обходов» — Radio button (можно выбрать только один день). 

«Длительный обход» - Checkbox (стилизовать не нужно). 

Если чекбокс «Длительный обход» активен, то необходимо проводить валидацию всех полей формы. Неправильно заполненные поля должны подсвечиваться красным как на скриншоте. Если хотя бы одно поле невалидно, то кнопка «Сохранить» является неактивной.

 Если чекбокс «Длительный обход» не активен, то валидацию формы производить не нужно. Красные звездочки рядом с полями не должны появляться. При нажатии кнопки «Сохранить» состояние формы должно сохраняться в localStorage. При загрузке страницы форма должна заполняться сохраненными в localStorage данными. 

# Testquest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
