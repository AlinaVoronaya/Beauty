require('./styles/reset.css');
require('./styles/styles.scss');

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}
