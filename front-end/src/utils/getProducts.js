
// Logic to fetch information from the backend
export default async function getProducts(search=""){
    if(!search) return [];

    try{
        const response = await fetch(`http://127.0.0.1:3000/api/scrape?keyword=${search}`);
        const data  = await response.json();
        return data;
    }catch{
        alert("Unable to establish an internet connection. Please check your network settings and try again.");
        return  [];
    }
}