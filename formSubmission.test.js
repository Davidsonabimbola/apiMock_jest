const formSubmission = require('./formSubmission')

describe('formSubmission',()=>{

    test('should display success message with a valid id', async()=>{

         details = {
            name: 'Abby',
            email: 'abby08@yahoo.com'
        }


        incomplete_details = {
            name: 'steph'
        }
    
    const data =  await formSubmission(details)
    expect(data).toEqual({ success: true, message: 'Form submitted successfully' })
    
    })
    
    
    test('should display error message with empty details', async()=>{
        await expect(formSubmission()).rejects.toThrow('All fields are required');
      
        })
    
    
        test('should display error message with incomplete details', async()=>{
            await expect(formSubmission('Abby')).rejects.toThrow('All fields are required');
          
            })
    

            test('should display error message with incomplete details', async()=>{
                await expect(formSubmission(incomplete_details)).rejects.toThrow('All fields are required');
              
                })
    
    
       
    
    
    
    })