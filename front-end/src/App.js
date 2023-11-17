import SearchInput from "./components/SearchInput"
import ProductView from "./components/ProductView"
import SubmitButton from "./components/SubmitButton"
import { ASIN, SEARCH } from "./identifiers"

export default function App(){
    return `
    <div class="container">
        ${SearchInput({placeholder:"Search",id: SEARCH})}
        ${SearchInput({placeholder:"ASIN",id: ASIN})}
        ${ProductView()}
        ${SubmitButton()}
    </div>
    `
}