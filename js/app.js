var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

var TestInput = React.createClass({
    onSubmit: function (e) {
        console.log(this.refs);
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value)
    },

    render: function () {
        return (
            <div>
                <input className="test-input"
                       defaultValue=''
                       ref="myTestInput"
                       placeholder='введите значение' />

                <button type='submit' onClick={this.onSubmit}>Добавить</button>
            </div>
        )
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <TestInput />
                <News data={my_news} />
            </div>
        );
    }
});

var Article = React.createClass({
    propTypes: {
        author: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        bigText: React.PropTypes.string.isRequired
    },

    getInitialState: function () {
        return {
            visible: false
        };
    },

    readmoreClick: function (e) {
        e.preventDefault();
        this.setState({visible: true})
    },
    
    render: function () {
        var author = this.props.author,
            text = this.props.text,
            bigText = this.props.bigText,
            visible = this.state.visible;

        return (
            <div className="article">
                <p className="author">{author}:</p>
                <p className="text">{text}</p>
                <a href="#" className={ "readmore " + (visible ? 'none' : '' ) }
                    onClick={this.readmoreClick}>Подробнее</a>
                <p className={ "big-text " + (visible ? '' : 'none' ) }>{bigText}</p>
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
                    <Article author={item.author} text={item.text} bigText={item.bigText} key={index} />
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