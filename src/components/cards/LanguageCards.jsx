import {devLangs} from '../../data/devLanguages'

import Container from "../layouts/Container";
import ToolContainer from "../layouts/ToolContainer";

function LanguageCards() {

    return (<Container customClass="marginTop">
        {devLangs.map(lang => (
            <ToolContainer key={lang.name} {...lang} />
        ))}
    </Container>)
}

export default LanguageCards