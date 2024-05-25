import { createContext, useContext, useState } from "react";
import { User } from "../actions";

// Define a type for your context value
interface UserContextType {
  user: User; // Change 'any' to the actual type of your user
  setUser: React.Dispatch<React.SetStateAction<any>>; // Change 'any' to the actual type of your setUser function
}

// Initialize your context with the defined type
export const UserContext = createContext<UserContextType>({
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    setUser: () => {}
  });
  

// Define your provider component
const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }
  
  export default UserProvider;
  