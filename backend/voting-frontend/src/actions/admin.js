import api from "./api";

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

const formatData = data => ({
    ...data,
})

export const fetchAll = () => dispatch => {
    api.admin().fetchAll()
    .then(
        response => {
            dispatch({
                type :  ACTION_TYPES.FETCH_ALL,
                payload : response.data
            })
        }
    )
    .catch(err => console.log(err))
}

//create object
export const create = (data, onSuccess) => dispatch => {
    data = formatData(data)
    api.admin().create(data)
    .then(res =>{
        dispatch ({
            type: ACTION_TYPES.CREATE,
            payload: res.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

//update
export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    api.admin().update(id, data)
    .then(res =>{
        dispatch ({
            type: ACTION_TYPES.UPDATE,
            payload: {id, ...data}
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

//delete
export const Delete = (id, onSuccess) => dispatch => {
    api.admin().delete(id)
    .then(res =>{
        dispatch ({
            type: ACTION_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}