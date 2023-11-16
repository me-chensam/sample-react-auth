import React from 'react'
import secureLocalStorage from 'react-secure-storage';

const AuthContext = React.createContext(null);
const token = secureLocalStorage.getItem('token');

async function GetUser() {
  return {
    username: 'paopao',
    token: 'lakjdflkajdlkfjalkdfjlakdfjlakdjflksjflakd'
  }
}

//sample request login
async function login(data) {
  return {
    ...data,
    token: 'lakjdflkajdlkfjalkdfjlakdfjlakdjflksjflakd'
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if (token) {
      setTimeout(async () => {
        const _user = await GetUser()
        setUser(_user)
        setLoading(false)
      }, 500);
    } else {
      setLoading(false)
    }
  }, [])

  const signIn = async (data) => {
    const _user = await login(data)
    setUser(_user)
    secureLocalStorage.setItem('token', _user.token)
    console.log(_user);
  }

  const signOut = () => {
    setUser(null)
    secureLocalStorage.removeItem('token')
  }

  const value = {
    user,
    loading,
    signIn,
    signOut
  }

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <React.Fragment>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default function useAuth() {
  return React.useContext(AuthContext)
}