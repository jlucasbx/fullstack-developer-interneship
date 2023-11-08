const axios = require("axios");
const {site} = require("../config");

async function getHtmlContentByQuery(search){
    if(!search) return "";
    const {data} = await axios.get(`${site.url}?${site.queryParam}=${search}`);
    return data;
}

module.exports = getHtmlContentByQuery;