async function submitForm(data) {
    if (!data || !data.name || !data.email) {
      throw new Error('All fields are required');
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Form submitted successfully' });
      }, 500);
    });
  }
  
  module.exports = submitForm;
  