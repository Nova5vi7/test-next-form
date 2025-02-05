import { Provider } from 'react-redux'
import { useStore } from "../store";
import '../styles/global.scss'


export default function MyApp({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}