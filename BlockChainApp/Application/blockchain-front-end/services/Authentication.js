import api from './Api'

export default {
    register(credentials){
        return api().post('register', credentials)
    },
    add(credentials){
        return api().post('add', credentials)
    },
    query(){
        return api().get('query')
    },
    login(credentials){
        return api().post('login', credentials)
    },
    change(credentials){
        return api().post('change', credentials)
    }
}