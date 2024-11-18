const updateUserProfile = require('./updateUser_Profile')

describe('updateUserProfile',()=>{

    test('should display updated data with a valid id', async()=>{
    

        const Details = {
            name: 'Steve',
            email: 'names_steve@yahoo.com'
        }  
    const user =  await updateUserProfile(1, Details)
    expect(user).toHaveProperty('updatedAt')
    expect(user.name).toBe('Steve')
    expect(user.email).toBe('names_steve@yahoo.com')
    
    })
    
    
    test('should throw an error when userId is not provided', async()=>{
    

        const Details = {
            name: 'Steve',
            email: 'names_steve@yahoo.com'
        }  

   await  expect(updateUserProfile(null, Details)).rejects.toThrow('User ID and profile data are required')
    
    })





    test('should throw an error when profile data is not provided', async()=>{
     

   await  expect(updateUserProfile(1, null)).rejects.toThrow('User ID and profile data are required')
    
    })





    test('should throw an error when userId is not found', async()=>{
    

        const Details = {
            name: 'Steve',
            email: 'names_steve@yahoo.com'
        }  

   await  expect(updateUserProfile(2, Details)).rejects.toThrow('User not found')
    
    })




    test('should throw an error when userId is not found and profile is null', async()=>{
     

   await  expect(updateUserProfile(2, null)).rejects.toThrow('User ID and profile data are required')
    
    })
    
    
    })