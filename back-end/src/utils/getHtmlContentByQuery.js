import axios from "axios";
import { site } from "../config.js";

// get the page content based on search value
export default async function getHtmlContentByQuery(search){
    if(!search) return "";
    const {data} = await axios.get(`${site.url}?${site.queryParam}=${search}`);
    return data;
}
