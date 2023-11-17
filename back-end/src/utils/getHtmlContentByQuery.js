import axios from "axios";
import { site } from "../config.js";

// get the page content based on search value
export default async function getHtmlContentByQuery(search, page) {
  if (!search || !page) return "";

  try {
    const url =  `${site.url}?${site.queryParamKeyword}=${search}&${site.queryParamPagination}=${page}`;
    const { data } = await axios.get(url);
    console.log(url,"fetched")
    return data;
  } catch{
    return null;
  }
}
