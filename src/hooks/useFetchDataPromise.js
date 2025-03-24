export const useFetchDataPromise = () => {
    const getFechData = async ({ endPoint, method = "POST", additionalData }) => {
        const urlApi = `${import.meta.env.VITE_URL_FETCH}/${endPoint}`

        return await fetch(urlApi, {
            method, 
            ...(method !== "GET" && { body: JSON.stringify(additionalData) }), 
            headers: {
                "Content-Type": "application/json",
            },
        })
            .catch(() => ({code:"COD_ERR",data:{},message:"Error"}))
            .then(async (response) => {
                const dataJson = await response.json()
                const {code,result,info} =dataJson
                return {
                    code, data:result,message:info
                }
               
        });
    }
    return {
        getFechData
    }


}
