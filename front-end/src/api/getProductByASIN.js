
// Logic to fetch information from the backend
export default async function getProductByASIN(search,asin){
    if(!search || !asin) return null;

    try{
        const response = await fetch(`http://127.0.0.1:3000/api/scrape?keyword=${search}&asin=${asin}`);
        const data  = await response.json();
        return data[0];
    }catch{
        alert("Unable to establish an internet connection. Please check your network settings and try again.");
        return  null;
    }
}