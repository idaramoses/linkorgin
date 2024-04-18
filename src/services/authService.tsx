import axios from 'axios';
import TokenService from './token';
import { Bounce, toast } from 'react-toastify';


interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string; // Consider using Date type if you'll be working with dates
  gender: string;
  email: string;
  password: string;
  phone: string;
  countryOfOrigin: string;
  currentImmigrationStatus: string;
  dateOfImmigration: string; // Consider using Date type if you'll be working with dates
  visaType: string;
  typeOfStatus: string;
  nativeLanguage: string;
  highestLevelOfEducation: string;
  previousWorkExperience: string;
  aspirations: string;
  currentHousingSituation: string;
  housingPreference: string;
  numOfFamilyMembers: string; // Consider using number type if you'll be working with numbers
  relationship: string;
  interestsAndHobbies: string;
  preferredSocialActivities: string;
  ethos: string;
}

interface AuthResponse {
  success: boolean;
  error?: string;
  user?: UserData;
}
interface UserData {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  companyName: string;
  position: string;
  sector: string;
  industry: string;
  companySize: string;
  password: string;
  companyUsers: any[]; 
  surveys: any[];
  cert: any[]; 
  __v: number;
}


class AuthService {

  static async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await axios.post(`https://linked-origin-server.vercel.app/api/v1/auth/user-login`, {
        email,
        password
      });
  
      const { token,user } = response.data;
      TokenService.setToken(token);
  
    
  
      localStorage.setItem('userData', JSON.stringify(user)); // Save user data locally
      toast.success('Logged In Successfully', {
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log('successfull:', response);
      return { success: true, user };
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Invalid email or password. Please try again', {
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return { success: false, error: 'Invalid email or password. Please try again.' };
    }
  }

  static async register(userData: User): Promise<AuthResponse> {
    try {
      const response = await axios.post('https://linked-origin-server.vercel.app/api/v1/users/register-new-user', userData);

      const { token, user } = response.data;
      toast.success('Registered  Successfully', {
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
     console.log('sucessfull:', response);
      return { success: true, user };
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.', {
        position:"top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      return { success: false, error: 'Registration failed. Please try again.' };
    }
  }

  static logout(): void {
    // Clear token and user data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    toast("Logged out Successfully", {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
    });
  }

  static isLoggedIn(): boolean {
    // Check if token exists in local storage
    return !!localStorage.getItem('token');
  }
  

  
  static getUserData(): UserData | null {
    // Retrieve user data from local storage
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      return JSON.parse(userDataString);
    }
    return null;
  }

}

export default AuthService;
