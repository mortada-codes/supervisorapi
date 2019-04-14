import fetch from '../util/fetchy';
const DetailCode_URL = (masterCodeId) => (`http://192.168.50.123:5558/FinalSYSCodeAPI/api/DetailCode/GetDetailedCodesByMasterIdForMobile?masterCodeId=${masterCodeId}`)

export async function DetailCode(masterCodeId) {
    try {
        const DetailCodeResult = await fetch(DetailCode_URL(masterCodeId))
        if (DetailCodeResult.ok) {
            const DetailCodeData = await DetailCodeResult.json()
            return DetailCodeData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}