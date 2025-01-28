import {devLangs} from '../../data/devLanguages'

import Container from "../layouts/Container";
import ToolContainer from "../layouts/ToolContainer";

/**
 * Renders a list of language cards based on the provided 'devLangs' array,
 * using the 'ToolContainer' component to represent each language.
 * 
 * @returns {JSX.Element} A container with a list of language cards.
 */
function LanguageCards() {

    return (<Container customClass="margin_top">
        {devLangs.map(lang => (
            <ToolContainer key={lang.name} {...lang} />
        ))}
    </Container>)
}

export default LanguageCards
