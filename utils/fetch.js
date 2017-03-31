import fetch from 'isomorphic-fetch'



/*function getData({resp, json}) {
    console.log(resp, json, 'resp, json')
    if(Array.isArray(json)) {
        return json
    }
    return { ...json, resp_data: new Date(resp.headers.get('Date') || Date.now()) }

}

function FETCH(url, options) {
    if(options.credentials !== false) {
        options = { credentials: 'include', ...options }
    }

    return fetch(url, options)
        .then(resp => { 
            console.log(resp.body, 'fetch resp')
            return resp.json()
                .then(json => ({ resp, json }))
                .catch(error => ({ resp, json: {}, error }))
            }
        )
        .then(getData)
}

function GET(url, data = {}, options = {}) {
    this.send = () => {
        let _url = encodeQuery(url, data);
        return FETCH(_url, {
            method: 'GET',
            ...options,
        }).then(res => {
            return res
        }).catch(error => {
            throw error
        })
    }
}

function encodeQuery(url, data = {}) {
    if(!data || !Object.keys(data).length) {
        return url
    }
    url = url.indexOf('?') === -1 ? `${url}?` : `${url}&`
    let query = Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
    return `${url}${query}`
}
const REQUEST = {
    GET
}

export default REQUEST
*/
