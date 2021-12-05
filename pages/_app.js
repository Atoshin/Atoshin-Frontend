import '../styles/globals.css'
import {Provider} from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from '@mui/material/Container';


function MyApp({Component, pageProps}) {
    // return <Provider store={store}>
    //     <Component {...pageProps} />
    // </Provider>
    return <>
        <Container>
            <Header/>
            <Component {...pageProps} />
        </Container>
        <Footer/>
    </>
}

// const makeStore = () => store;
// export default withRedux(makeStore)(MyApp)

export default MyApp