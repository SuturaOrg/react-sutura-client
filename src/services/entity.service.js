import config from '../config';
import {authHeader, handleResponse} from '../_helpers';

export const entityService = {
    create,
    getAll
};

function create(data,entity) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/${entity}/`, requestOptions)
        .then(handleResponse)
        .then(loanPayload => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            return loanPayload;
        });
}


function getAll(entity,id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`${config.apiUrl}/${entity}?studentPrime=${id}&sort=createdAt,desc`, requestOptions)
        .then(handleResponse)
        .then(entityPayload => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            return [entityPayload._embedded[entity],entityPayload.page.totalElements];
        });
}


