import fetch from '../util/fetchy';
import BASE_API  from '../util/baseAPI'
const COMPLAINS_URL = (complainId) => (`http://${BASE_API}/HelpdeskAPI/Api/Complains/${complainId}`)
const MOBILE_COMPLAIN_URL = (userId , statusId , pageIndex , pageSize) => (`http://${BASE_API}/HelpdeskAPI/api/Mobile/GetMobileComplainsByUserIdAndStatusIdByPage?userId=${userId}&statusId=${statusId}&pageIndex=${pageIndex}&pageSize=${pageSize}`)
const DELETED_COMPLAINS_URL = (userId) => (`http://${BASE_API}/HelpdeskAPI/api/Mobile/getDeletedComplainsForMobileByUser?userId=${userId}`)
const CHANGE_COMPLAIN_STATUS = () => (`http://${BASE_API}/HelpdeskAPI/api/Mobile/ChangeComplainStatus`)
const Update_Complains_Transfered = (complainId , isTransfered) => (`http://${BASE_API}/HelpdeskAPI/api/Complains/UpdateComplainIsTransfered?id=${complainId}&isTransfered=${isTransfered}`)
const Get_Complain_Statistics = (locationId , userId) => (`http://${BASE_API}/HelpdeskAPI/api/Mobile/GetComplainStatisticsByLocations?locationId=${locationId}&userId=${userId}`)
const Get_Complains_Type = () => (`http://${BASE_API}/HelpdeskAPI/api/ComplainType/GetAll`)
const Get_Complain_History = (complainId) => (`http://${BASE_API}/HelpdeskAPI/api/Mobile/GetComplainHistoryByComplainId?ComplainId=${complainId}`)
const Get_Complain_Image_By_Id = () => (`http://${BASE_API}/HelpdeskAPI/api/Mobile/GetMobileComplainImagesById`)
const Check_Complain_Version = (CurrentVersion) => (`http://${BASE_API}/HelpdeskAPI/api/Complains/ChkMobileVersion?CurrentVersion=${CurrentVersion}`)
const Complain_Types_Dashboard = (ContractorId , userId , FilterContractorId , interval , datefrom , dateto , complainType , complainStatus) => (`http://${BASE_API}/HelpdeskAPI/api/Complains/GetComplainTypesDashboard?ContractorID=${ContractorId}&userId=${userId}&FilterContractorID=${FilterContractorId}&interval=${interval}&datefrom=${datefrom}&dateto=${dateto}&complainType=${complainType}&complainStatus=${complainStatus}`)
const Update_Complain_Status = (id , statusId , userId , NotResolved , comment , ResonId) => (`http://${BASE_API}/HelpdeskApi/api/Complains/UpdateComplianStatusAndaddComment?id=${id}&statusId=${statusId}&userId=${userId}&NotResolved=${NotResolved}&Comment=${comment}&ResonId=${ResonId}`)
const Complains_Which_Transfered_URL = (userId) => (`http://${BASE_API}/HelpdeskAPI/api/Mobile/getComplainsWhichTransfered?userId=${userId}`)
const Get_Complain_Status = () => (`http://${BASE_API}/HelpdeskAPI/api/Mobile/GetComplainsStatus`)
const Add_Complain_From_Web = () => (`http://${BASE_API}/HelpdeskAPI/api/Complains/AddComplaintFromWeb`)

export async function getComplains(complainId) {
    try {
        const complainResult = await fetch(COMPLAINS_URL(complainId))
        if (complainResult.ok) {
            const data = await complainResult.json()
            return data
        }
        return {error: 'Something went wrong!'}
    } catch (error) {
        return {error: 'error just happened!'}
    }
}

export async function MobileComplains(userId , statusId , pageIndex , pageSize) {
    try {
        const mobileComplainResult = await fetch(MOBILE_COMPLAIN_URL(userId , statusId , pageIndex , pageSize))
        if (mobileComplainResult.ok) {
            const data = await mobileComplainResult.json()
            return data
        }
        return {error: 'Something went wrong!'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function DeletedComplains(userId) {
    try {
        const complainDeletedResult = await fetch(DELETED_COMPLAINS_URL(userId))
        if (complainDeletedResult.ok) {
            const data = await complainDeletedResult.json()
            return data
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened!'}
    }
}

export async function ChangeComplainStatus(userId , compId , newStatusId) {
    try {
        const now = new Date();
        const changeComplainObject = {
                "userId": userId,
                "compId": compId,
                "newStatusId": newStatusId,
                "UpdatedOn": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
                "complainImageDTO": {
                  "Id": 1,
                  "StatusId": 2,
                  "ImageBytes": "QEA=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",
                  "Note": "sample string 3",
                  "isDeleted": true,
                  "DateStr": "sample string 5",
                  "CreatedBy": 6,
                  "CreatedOn": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
                  "ComplainID": 8,
                  "Longitude": 1.1,
                  "Latitude": 1.1,
                  "FileId": 9,
                  "URL": "sample string 10"
                }
            }
        const changeComplainResult = await fetch(CHANGE_COMPLAIN_STATUS() , {
            method: 'POST',
            body: JSON.stringify(changeComplainObject),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (changeComplainResult.ok) {
            const data = await changeComplainResult.json()
            return data
        }
        return {error: 'Something went wrong!'}
    } catch (error) {
        return {error: 'Error just happened!'}
    }
}

export async function UpdateComplainsTransfered() {
    try {
        const updateComplainsTransferedResult = await fetch(Update_Complains_Transfered(complainId , isTransfered) , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (updateComplainsTransferedResult.ok) {
            const data = await updateComplainsTransferedResult.json()
            return data
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function GetComplainStatistics(locationId , userId) {
    try {
        const getComplainStatisticsResult = await fetch(Get_Complain_Statistics(locationId , userId))
        if (getComplainStatisticsResult.ok) {
            const data = getComplainStatisticsResult.json()
            return data
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function GetComplainsType() {
    try {
        const ComplainsTypeResult = await fetch(Get_Complains_Type())
        if (ComplainsTypeResult.ok) {
            const data = ComplainsTypeResult.json();
            return data
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function GetComplainHistory(complainId) {
    try {
        const ComplainHistoryResult = await fetch(Get_Complain_History(complainId))
        if (ComplainHistoryResult.ok) {
            const data = ComplainHistoryResult.json()
            return data
        }
        return {erorr: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function GetComplainImageById(ComplainId , ImagesId) {
    const complainImageObj = {
        "ComplainId": ComplainId,
        "ImagesId": [ImagesId]
    }
    try {
        const ComplainImageResult = await fetch(Get_Complain_Image_By_Id() , {
            method: 'POST',
            body: JSON.stringify(complainImageObj),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (ComplainImageResult.ok) {
            const ComplainImageData = await ComplainImageResult.json()
            return ComplainImageData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function CheckComplainVerison(CurrentVersion) {
    try {
        const CheckVersionResult = await fetch(Check_Complain_Version(CurrentVersion))
        if (CheckVersionResult.ok) {
            const CheckVersionData = await CheckVersionResult.json()
            return CheckVersionData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function ComplainTypesDashboard(ContractorId , userId , FilterContractorId , interval , datefrom , dateto , complainType , complainStatus) {
    try {
        const ComplainTypesDashboardResult = await fetch(Complain_Types_Dashboard(ContractorId , userId , FilterContractorId , interval , datefrom , dateto , complainType , complainStatus))
        if (ComplainTypesDashboardResult.ok) {
            const ComplainTypesDashboardData = await ComplainTypesDashboardResult.json()
            return ComplainTypesDashboardData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function UpdateComplainStatus(id , statusId , userId , NotResolved , comment , ResonId) {
    try {
        const UpdateComplainStatusResult = await fetch(Update_Complain_Status(id , statusId , userId , NotResolved , comment , ResonId), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if (UpdateComplainStatusResult.ok) {
            const UpdateComplainStatusData = UpdateComplainStatusResult
            return UpdateComplainStatusData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function ComplainsTransfered(userId) {
    try {
        const ComplainsTransferedResult = await fetch(Complains_Which_Transfered_URL(userId))
        if (ComplainsTransferedResult.ok) {
            const ComplainsTransferedData = await ComplainsTransferedResult.json()
            return ComplainsTransferedData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function GetComplainStatus(Id , RowId , TableName) {
    try {
        const now = new Date();
        const ComplainStatusObject = [
            {
              "Id": Id,
              "LastUpdatedDate": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
              "RowID": RowId,
              "TableName": TableName
            },
            {
              "Id": Id,
              "LastUpdatedDate": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
              "RowID": RowId,
              "TableName": TableName
            }
        ]
        const ComplainStatusResult = await fetch(Get_Complain_Status(), {
            method: 'POST',
            body: JSON.stringify(ComplainStatusObject),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (ComplainStatusResult.ok) {
            const ComplainStatusData = await ComplainStatusResult.json()
            return ComplainStatusData
        }
        return {error: 'Something went wrong'}
    } catch (error) {
        return {error: 'Error just happened'}
    }
}

export async function AddComplainFromWeb(updatedBy , Id , CityId , MunicipalityId , DistrictId , ZoneId , ComplainTypeId , Description , Lat , Long , StatusId , ContractId , ContractorId , CitizenId , CitizenNameAr , CitizenNameEn , IdNumber , CellPhone , CitizenEmail , CreatedBy) {
    try {
        const now = new Date()
        const AddFromWebObject = 
        {
            "UpdatedOn": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "UpdatedBy": updatedBy,
            "Id": Id,
            "complainImageDTO": null,
            "complainCommentDTO": null,
            "CityId": CityId,
            "CityName": "",
            "MunicpalId": MunicipalityId,
            "MunicipalityName": "",
            "DistrictId": DistrictId,
            "DistrictName": "",
            "ZoneId": ZoneId,
            "ZoneName": "",
            "ComplainTypeId": ComplainTypeId,
            "ComplainTypeNameAr": "",
            "NotResolved": null,
            "ComplainTypeNameEn": null,
            "DetailDescription": Description,
            "Longitude": Long,
            "Latitude": Lat,
            "StatusId": StatusId,
            "StatusName": "",
            "ContractId": ContractId,
            "ContractorId": ContractorId,
            "ExternalId": null,
            "ComplainDateTime": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "stringComplainDateTime": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "SolutionRemainingTime": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "ReceivalRemainingTime": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "ClosureRemainingTime": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "ComplainSource": 7,
            "ComplainSourceName": "المواطن",
            "Citizen": {
                "Id": CitizenId,
                "NameAr": CitizenNameAr,
                "NameEn": CitizenNameEn,
                "IdentityNumber": IdNumber,
                "CellPhoneNumber": CellPhone,
                "EMailAddress": CitizenEmail,
                "WaselPostalAddress": "1",
                "AddressLine1": null,
                "AddressLine2": null,
                "CreatedOn": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
            },
            "UserId": null,
            "CitizenId": null,
            "UserName": null,
            "Reason": null,
            "IsTransfered": null,
            "ComplainImages": null,
            "DetailCodeDTO": null,
            "CreatedOn": (parseInt(now.getMonth()) + 1) + "-" + now.getDate() + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(),
            "CreatedBy": CreatedBy,
            "IsNotified": null,
            "IsDeleted": false,
            "IsViolated": false,
            "CitiesList": null,
            "DistrictsList": null,
            "ComplainTypiesList": null,
            "ShowToAmana": false,
            "IsWeb": true
        }

        const AddFromWebResult = await fetch(Add_Complain_From_Web() , {
            method: 'POST',
            body: JSON.stringify(AddFromWebObject),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })

        if (AddFromWebResult.ok) {
            const AddFromWebData = await AddFromWebResult.json()
            return AddFromWebData
        }
        return {error: 'Something went wrong!'}
    } catch (error) {
        return {error: 'Error just happened!'}
    }
}