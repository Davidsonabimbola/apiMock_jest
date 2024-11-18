async function deleteUser(userId) {
    if (!userId) throw new Error('User ID is required');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === 1) {
          resolve({ success: true, message: 'User deleted successfully' });
        } else {
          reject(new Error('User not found'));
        }
      }, 300);
    });
  }
  
  module.exports = deleteUser;
  