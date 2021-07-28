import axios from 'axios'

const fetch = (url : String) => {
	const request = axios.get(`${url}`)
	return (request.then(response => response.data))
}

const dataFetcher = {
    fetch
}

export default dataFetcher