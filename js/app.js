var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                Всем привет, я компонент App! Я умею отображат новости.
                <News  data={my_news} />
            </div>
        );
    }
});

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate = data.map(function (item, index) {
            return (
                <div key={index}>
                    <p className="news_author">{item.author}:</p>
                    <p className="news_text">{item.text}</p>
                </div>
            )
        });

        return (
            <div className="news">
                {newsTemplate}
                <Comments />
            </div>
        );
    }
});

var Comments = React.createClass({
    render: function () {
        return (
            <div className="comments">
                Нет новостей - комментировать нечего.
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);