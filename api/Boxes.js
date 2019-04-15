import fetch from '../util/fetchy';
import BASE_API  from '../util/baseAPI'
const Boxes_URL = () => (`http://${BASE_API}/HelpdeskAPI/api/Box/GetAll`)

export async function Boxes() {
    try {
        const BoxesResult = await fetch(Boxes_URL())
        if (BoxesResult.ok) {
            const BoxesData = await BoxesResult.json()
            return BoxesData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}