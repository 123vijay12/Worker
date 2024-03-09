const createUserAPI = async (userData) => {
    console.log("data:",userData)
  try {
    const response = await fetch('http://localhost:8080/auth/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

export default createUserAPI;
