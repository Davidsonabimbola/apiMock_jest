async function updateUserProfile(userId, newProfile) {
    if (!userId || !newProfile) throw new Error('User ID and profile data are required');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === 1) {
          resolve({ ...newProfile, updatedAt: new Date().toISOString() });
        } else {
          reject(new Error('User not found'));
        }
      }, 500);
    });
  }
  
  module.exports = updateUserProfile;
  