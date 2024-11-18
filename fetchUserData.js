async function fetchUserData(userId) {
    if (!userId) throw new Error('User ID is required');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === 1) {
          resolve({ id: 1, name: 'John Doe', age: 30 });
        } else {
          reject(new Error('User not found'));
        }
      }, 300);
    });
  }
  
  module.exports = fetchUserData;
  