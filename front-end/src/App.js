import SearchInput from "./components/SearchInput"
import ProductView from "./components/ProductView"
import SubmitButton from "./components/SubmitButton"
import { ASIN, KEYWORD } from "./identifiers"

export default function App(){
    return `
    <div class="container">
        ${SearchInput({placeholder:"Keyword",id: KEYWORD})}
        ${SearchInput({placeholder:"ASIN",id: ASIN})}
        ${ProductView()}
        ${SubmitButton()}
    </div>
    `
}