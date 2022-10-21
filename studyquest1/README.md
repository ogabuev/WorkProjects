# Task

Есть массив объектов
const a = [{}, {} ...]
У объектов два поля (Имя, Возраст)
Необходимо вернуть два массива:

1. Массив с этими объектами, только у каждого добавляется поле batya: bolean в зависимости от того, если возраст > 55

2. Массив с объектами, где уже добавлено поле + возраст больше 65
После возвращения этих массивов необходимо вывести переменную result, которая является объектом у которого поля - все три массива (исходный, из 1 пункта, из 2 пункта)

Страница будет делится на 3 блока

1. Исходные данные
Отображение в виде карточек (стилистика на ваше усмотрение, просто квадрат) существующих данных + в самом конце находится карточка-черновик с возможностью создать новую карту (ввести имя + возраст)

2. Проверка на батю
Формируется и выводится автоматически используя данные из 1 блока (Проверка стандартная > 55 лет)

3. Жесткие батяни
Формируется и выводится автоматически используя данные из 1 блока по условиям (Батя + Имя < 4 символов)

# Studyquest1

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
