Эмулятор шаблонизатора сайта LeadVertex.Ru
===================

Эмулятор шаблонизатора сайта LeadVertex.Ru для быстрой и удобной верстки лендингов прямо у себя на компьютере.

При использовании учитывайте, что эмулятор есть эмулятор. Он не использует тот же самый код что и шаблонизатор LeadVertex, а лишь повторяет его поведение

Папка "template" соответствует папке домена сайта. Все настраиваемые параметры указываются в файле config.php,
где все в достаточной степени откомментировано

#### Требования
Apache + PHP 5.3+
Для запуска у себя на компьютере мы рекомендуем платформу http://open-server.ru/

#### Что нового в версии 2.4?

- {{no_layout}} - если этот тег прописан в коде страницы из папки pages/, то содержимое этой страницы будет отображено само по себе, т.е. без использования главного файла index.html. Пример можете посмотреть на странице успешного заказа
- {{form|no_css}} - При отображении формы заказа к ней автоматически подключаются некоторые стили. В большинстве случаев эти стили нужны чтобы не стилизовать форму «с нуля». Однако иногда некоторые из них (например, border и box-sizing: border-box;) могут мешать. Чтобы исключить мешающие стили, подключайте форму прописывая модификатор no_css. С указанием номеров формы аналогично {{form_2|no_css}}
- Корневой index.html больше не является обязательным. Если этого файла нет, то будет рендериться содержимое страницы из pages/ целиком
- Глобально обновлен демо-лендинг