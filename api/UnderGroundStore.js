import fetch from 'node-fetch';
const Under_Ground_Store_URL = () => (`http://192.168.50.123:5558/HelpdeskAPI/api/UnderGroundStore/GetAll`)
const Nearest_Under_Ground_Store_URL = (Latitude , Longitude) => (`http://www.makkahwcts.com/HelpdeskAPI/api/UnderGroundStore/GetNearestUnderGroundStore?Latitude=${Latitude}&Longitude=${Longitude}&Count=5`)

export async function GetUnderGroundStore() {
    try {
        const UnderGroundStoreResult = await fetch(Under_Ground_Store_URL())
        if (UnderGroundStoreResult.ok) {
            const UnderGroundStoreData = await UnderGroundStoreResult.json()
            return UnderGroundStoreData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened!'}
    }
}

export async function GetNearestUnderGroundStore(Latitude , Longitude) {
    try {
        const NearestUnderGroundStoreResult = await fetch(Nearest_Under_Ground_Store_URL(Latitude , Longitude))
        if (NearestUnderGroundStoreResult.ok) {
            const NearestUnderGroundStoreData = await NearestUnderGroundStoreResult.json()
            return NearestUnderGroundStoreData
        }
        return {error: 'Something went wrong!'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}