const fetchUserData = require('./fetchUserData')


describe('fetchUserData',()=>{

test('should display user data with a valid id', async()=>{

const user =  await fetchUserData(1)
expect(user).toEqual({ id: 1, name: 'John Doe', age: 30 })

})


test('should display error message with an invalid id', async()=>{
    await expect(fetchUserData(2)).rejects.toThrow('User not found');
  
    })


    test('should display error message with an empty value', async()=>{
        await expect(fetchUserData()).rejects.toThrow('User ID is required');
      
        })


})