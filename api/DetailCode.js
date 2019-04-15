import fetch from '../util/fetchy';
import BASE_API  from '../util/baseAPI'
const DetailCode_URL = (masterCodeId) => (`http://${BASE_API}/FinalSYSCodeAPI/api/DetailCode/GetDetailedCodesByMasterIdForMobile?masterCodeId=${masterCodeId}`)

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