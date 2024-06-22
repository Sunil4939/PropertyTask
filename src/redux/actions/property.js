import AsyncStorage from "@react-native-async-storage/async-storage";
import http from "../../services/api";
import { GET_ALL_PROPERTY } from "../types";

export const GetAllPropertiesApi = (page, city, projectType, cb,) => async (dispatch, getState) => {
    const {getAllProperty} = getState().property
    cb && cb(true)

    let params = {
        "page": page || 1,
    }

    city && Object.defineProperty(params, "city", {value: city})
    projectType && Object.defineProperty(params, "projectType", {value: projectType})

    console.log("GetAllPropertiesApi : ", page, city, projectType)

    http.get(`property`, {
        params: params
    })
        .then(async response => {
            // console.log("GetAllPropertiesApi response : ", response?.data)
            if (response?.data?.statusCode == 200) {
                if(page > 1){
                    dispatch({
                        type: GET_ALL_PROPERTY,
                        payload: {propertyList: [...getAllProperty?.propertyList, ...response?.data?.propertyList], page: response?.data?.page, count: response?.data?.count}
                    })
                }else{
                    dispatch({
                        type: GET_ALL_PROPERTY,
                        payload: response?.data
                    })
                }
                cb && cb(false, "success")
            } else {
                if(page == 1){
                    dispatch({
                        type: GET_ALL_PROPERTY,
                        payload: null
                    })
                }
               
                cb && cb(false)
            }
        })
        .catch(error => {
            cb && cb(false)
            console.log("GetAllPropertiesApi error : ", error?.response?.data)
            if(page == 1){
                dispatch({
                    type: GET_ALL_PROPERTY,
                    payload: null
                })
            }
          
        })
};