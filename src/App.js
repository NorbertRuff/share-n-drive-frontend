import Page from "./components/Page";
import GlobalStyle from "./contexts/GlobalStyle";
import {Fragment} from "react";


function App() {
    return (
        <Fragment>
            <GlobalStyle/>
            <Page/>
        </Fragment>
    );
}

export default App;
