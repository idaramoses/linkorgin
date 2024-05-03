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


export interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface PersonalInfo {
  firstName: string;
  lastName: string;
  // dateOfBirth: string;
  email: string;
  // password: string;
  phone: string;
  _id: string;
}

interface LanguageProficiency {
  nativeLanguage: string;
  _id: string;
}

interface EducationAndEmployment {
  highestLevelOfEducation: string;
  previousWorkExperience: string;
  aspirations: string;
  _id: string;
}

interface HousingSituation {
  currentHousingSituation: string;
  housingPreference: string;
  _id: string;
}

interface FamilyInfo {
  numOfFamilyMembers: number;
  relationship: string;
  _id: string;
}

interface SocialIntegration {
  interestsAndHobbies: string;
  preferredSocialActivities: string;
  ethos: string;
  _id: string;
}

interface SupportNeeds {
  supportServices: any;
  _id: string;
}

interface Profile {
  _id: string;
  name: string;
}

interface SearchHistory {
  searchTerm: string;
  _id: string;
  timestamp: string;
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
     // Store token in local storage
     localStorage.setItem('token', token);

    //  Fetch user data using the token
     const userDataResponse = await axios.get(`https://linked-origin-server.vercel.app/api/v1/users/profile/`, {
       headers: {
         Authorization: `Bearer ${token}`
       }
     });

     // Store user data in local storage
     localStorage.setItem('userData', JSON.stringify(userDataResponse.data['data']));

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
      console.log('successfull:', response.data);
      console.log('user_data:', response.data['userId']);
      // console.log('user-data:', userDataResponse.data['data']);

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
  
  static async getNews(): Promise<any[]> {
    try {
      const token = TokenService.getToken(); // Assuming TokenService stores the token
      const response = await axios.get('https://linked-origin-server.vercel.app/api/v1/news-update', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.news;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  static async getHistory(): Promise<any[]> {
    try {
      const token = TokenService.getToken(); // Assuming TokenService stores the token
      const response = await axios.get('https://linked-origin-server.vercel.app/api/v1/search/search-history/user/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data.data.searchHistory;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  static getUserDataFromLocalStorage(): UserData | null {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      return JSON.parse(userDataString);
    }
    return null;
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
