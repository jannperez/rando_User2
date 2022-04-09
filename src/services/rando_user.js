import axios from "axios";
async function fetchUser(){
    const base_url='https://api.randomuser.me/'
    try {
        const response = await axios.get('${base_url}')
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}
export default fetchUser
