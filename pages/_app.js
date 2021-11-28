import '../styles/globals.css'
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store'

function MyApp({Component, pageProps}) {
    // return <Provider store={store}>
    //     <Component {...pageProps} />
    // </Provider>
    return <Component {...pageProps} />
}

// const makeStore = () => store;
// export default withRedux(makeStore)(MyApp)

export default MyApp