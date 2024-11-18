const getWeather = require('./getWeather')


describe('getWeather',()=>{

    test('should display city data with a valid city', async()=>{
    
    const city =  await getWeather('Lagos')
    expect(city).toEqual({ temp: 37, condition: 'Sunny' })
    
    })
    
    
    test('should display error message with an invalid id', async()=>{
        await expect(getWeather('Cairo')).rejects.toThrow('City not found');
      
        })



        test('should display error message with an empty city', async()=>{
            await expect(getWeather()).rejects.toThrow('City is required');
          
            })

    
    
    })