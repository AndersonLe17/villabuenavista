export const validateLogin = async ({username, password}) => {
    const res = await fetch(process.env.REACT_APP_API_PATH + "login", {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({username,password})
    });
    const data = await res.json();
  
    return data;
  };