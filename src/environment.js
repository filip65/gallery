export const environment = {
    apiUrl = 'http://api.programator.sk',

    getImages = async (path) => {
        fetch(`${apiUrl}/gallery`).then(res => res.json()).then()
    }

}