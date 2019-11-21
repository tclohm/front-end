import { axiosWithAuth } from '../Utils/AxiosWithAuth'

export const GET_ALL_DONOR_START = "GET_ALL_DONOR_START"
export const GET_ALL_DONOR_SUCCESS = "GET_ALL_DONOR_SUCCESS"
export const GET_ALL_DONOR_FAILURE = "GET_ALL_DONOR_FAILURE"

export const getAllDonors = () => dispatch => {
    dispatch({ type: GET_ALL_DONOR_START })
    axiosWithAuth()
        .get(`donors`)
        .then(res => {
            dispatch({ type: GET_ALL_DONOR_SUCCESS, payload: res.data})
        })
        .catch(error =>
            dispatch({ type: GET_ALL_DONOR_FAILURE, payload: error})
        )}

export const GET_DONOR_START = "GET_DONOR_START"
export const GET_DONOR_SUCCESS = "GET_DONOR_SUCCESS"
export const GET_DONOR_FAILURE = "GET_DONOR_FAILURE"

export const getCampaign = (id) => dispatch => {
    dispatch({ type: GET_DONOR_START })
    axiosWithAuth()
        .get(`organizations/${id}/campaigns`)
        .then(res => {
            dispatch({ type: GET_DONOR_SUCCESS, payload: res.data })
        })
        .catch(error =>
            dispatch({ type: GET_DONOR_FAILURE, payload: error })
        )
}

export const NEW_DONOR_START = "NEW_DONOR_START"
export const NEW_DONOR_SUCCESS = "NEW_DONOR_SUCCESS"
export const NEW_DONOR_FAILURE = "NEW_DONOR_FAILURE"

export const createCampaign = (newCamp) => dispatch => {
    dispatch({ type: NEW_DONOR_START })
    axiosWithAuth()
        .post('campaigns', newCamp)
        .then(res => {
            dispatch({ type: NEW_DONOR_SUCCESS, payload: res.data }) 
        })
        .catch(err =>
            dispatch({ type: NEW_DONOR_FAILURE, payload: err })
        )

}

export const UPDATE_DONOR_START = "UPDATE_DONOR_START"
export const UPDATE_DONOR_SUCCESS = "UPDATE_DONOR_SUCCESS"
export const UPDATE_DONOR_FAILURE = "UPDATE_DONOR_FAILURE"

export const updateCampaign = (id, campChanges) => dispatch => {
    dispatch({ type: UPDATE_DONOR_START })
    axiosWithAuth()
        .put(`campaigns/${id}`, campChanges)
        .then(res => {
            dispatch({ type: UPDATE_DONOR_SUCCESS, payload: res.data })
        })
        .catch(err =>
            dispatch({ type: UPDATE_DONOR_FAILURE, payload: err })
        )
}

export const DELETE_DONOR_START = "DELETE_DONOR_START"
export const DELETE_DONOR_SUCCESS = "DELETE_DONOR_SUCCESS"
export const DELETE_DONOR_FAILURE = "DELETE_DONOR_FAILURE"

export const deleteCampaign = (id) => dispatch => {
    dispatch({type: DELETE_DONOR_START})
    axiosWithAuth()
        .delete(`campaigns/${id}`)
        .then(res => {
            console.log('deleteCAMPAIGN', res)
            dispatch({ type: DELETE_DONOR_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: DELETE_DONOR_FAILURE, payload: err}))
}