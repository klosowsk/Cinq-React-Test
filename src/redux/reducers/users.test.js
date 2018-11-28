import users from '../reducers/users'

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(users(undefined, {})).toEqual(
            {"error": null, "items": [], "loading": true, "search": ""}
        )
    })
})