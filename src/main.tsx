import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {setupStore} from "./store";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {STRATZ_API_TOKEN} from "./API/STRATZ_TOKEN.ts";

const store = setupStore()
const stratzHttpLink = createHttpLink({
    uri: 'https://api.stratz.com/graphql',
    headers: {
        authorization: `Bearer ${STRATZ_API_TOKEN}`
    }
})
const client = new ApolloClient({
    link: stratzHttpLink,
    cache: new InMemoryCache()
})
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ApolloProvider>
    </StrictMode>,
)
