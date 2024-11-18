const deleteUserAccount = require('./deleteUserAccount')

describe('deleteUserAccount',()=>{

    test('should display success message', async()=>{
    
    const userId =  await deleteUserAccount(1)
    expect(userId).toEqual({ success: true, message: 'User deleted successfully' })
    
    })
    

    test('should display error message when an invalid id is inputed', async()=>{
    
        expect(deleteUserAccount(2)).rejects.toThrow('User not found')
        
        })



        test('should display error message when inputed is empty', async()=>{
    
            expect(deleteUserAccount()).rejects.toThrow('User ID is required')
            
            })
    


    
    
    })