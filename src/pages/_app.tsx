import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { DefaultLayout } from '@/components/layouts';
import { AppPropsWithLayout } from '@/models';
import type { AppProps } from 'next/app';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from '@/provider/provider';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? DefaultLayout;
    return (
        <Providers>
            <Layout>
                <Component {...pageProps} />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ToastContainer />
            </Layout>
        </Providers>
    );
}

export default MyApp;
