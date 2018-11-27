export const findUsers = (users, find) => {
    return users.items.filter( user => !(user.firstName + ' ' + user.lastName).search(new RegExp(find, "i")))
}