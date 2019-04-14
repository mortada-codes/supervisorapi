import fetch from '../util/fetchy';
const Boxes_URL = () => (`http://192.168.50.123:5558/HelpdeskAPI/api/Box/GetAll`)

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