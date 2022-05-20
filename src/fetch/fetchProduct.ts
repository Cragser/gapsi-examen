const url = 'https://00672285.us-south.apigw.appdomain.cloud/demo-gapsi/search?&query=[criterio]&page=[numeropagina]'

const myHeaders = new Headers();
myHeaders.append("X-IBM-Client-Id", "adb8204d-d574-4394-8c1a-53226a40876e");


const fetchProduct = async (query: string) => {
    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(`https://00672285.us-south.apigw.appdomain.cloud/demo-gapsi/search?&query=${query}&page=1`, requestOptions)
    return response.json();
}

const fetchProductPagination = async (query: string, page: number) => {
    const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(`https://00672285.us-south.apigw.appdomain.cloud/demo-gapsi/search?&query=${query}&page=${page}`, requestOptions)
    return response.json();
}

export {fetchProductPagination}
export default fetchProduct
