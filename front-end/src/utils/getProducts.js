
export default async function getProducts(search=""){
    if(!search) return [];
    const response = await fetch(`http://127.0.0.1:3000/api/scrape?keyword=${search}`);
    const data  = await response.json();
    return data;
}