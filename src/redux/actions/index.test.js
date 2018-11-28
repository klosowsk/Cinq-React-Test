import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to remove a user', () => {
    const user = {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            age: 15,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam varius enim, mollis tincidunt velit. Donec dolor sem, mattis vel tristique eu, fringilla vel mauris. In hac habitasse platea dictumst. Ut aliquet libero quis urna interdum scelerisque. Donec gravida mi nec luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    const expectedAction = {
      type: 'REMOVE_USER',
      payload: user
    }
    expect(actions.removeUser(user)).toEqual(expectedAction)
  })
})