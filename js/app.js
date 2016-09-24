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
                <h3>Новости</h3>
                <News  data={my_news} />
            </div>
        );
    }
});

var Article = React.createClass({
    propTypes: {
        author: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    },
    
    render: function () {
        var author = this.props.author;
        var text = this.props.text;

        return (
            <div className="article">
                <p className="author">{author}:</p>
                <p className="text">{text}</p>
            </div>
        )
    }
});

var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    render: function() {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <Article author={item.author} text={item.text} key={index} />
                )
            });
        } else {
            newsTemplate =
                <p>К сожалению, новостей нет.</p>
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>
                    Всего новостей: {data.length}</strong>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);