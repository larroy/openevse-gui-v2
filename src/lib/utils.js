import wifisignal1 from '../assets/wifi_signal_1.svg';
import wifisignal2 from '../assets/wifi_signal_2.svg';
import wifisignal3 from '../assets/wifi_signal_3.svg';
import wifisignal4 from '../assets/wifi_signal_4.svg';
import wifisignal5 from '../assets/wifi_signal_5.svg';

export function dbm2icon(dbm) {
	let icon
	if (dbm <= -80) icon = wifisignal1
	else if (dbm > -80 && dbm <= -75) icon = wifisignal2
	else if (dbm > -75 && dbm <= -70) icon = wifisignal3
	else if (dbm > -70 && dbm <= -65) icon = wifisignal4
	else if (dbm > -65) icon = wifisignal5

	return icon
}

export async function httpAPI(method,url,body=null,type = "json") {
	let content_type = type == "json"?'application/json':'text/plain'
	let data = {
		method: method,
		headers: {
			'Content-Type': content_type
		}
	}
	if (body) {
		data.body = body
	}
	const response = await fetch(url, data)
	if(response) {
		if(type == "json") {
			const json_response = response.json()
			return json_response
		}
		else return response
		
	}
	throw Error(response.statusText)
}

export const removeDuplicateObjects = (array, key) => {
    const set = new Set()

    return array.filter(item => {
        const alreadyHas = set.has(item[key])
        set.add(item[key])

        return !alreadyHas
    })
}

