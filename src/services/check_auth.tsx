import axios from "axios"

const checkAuth = () => {
/*  Getting token value stored in localstorage, if token is not present we will open login page 
    for all internal dashboard routes  */
    const TOKEN = localStorage.getItem("userData")
    const PUBLIC_ROUTES = ["/login","/signuppage",'/']
    const Auth_ROUTES = ["/login","/signuppage"]

    const isPublicPage = PUBLIC_ROUTES.some( r => window.location.href.includes(r))
    const isAuthPage = Auth_ROUTES.some( r => window.location.href.includes(r))

    if(!TOKEN && !isPublicPage){
        window.location.href = '/login'
        return;
    } else if (TOKEN && isAuthPage) {
        window.location.href = '/dashboard/home';
        return;
    }else{
        axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`

        axios.interceptors.request.use(function (config) {
            // UPDATE: Add this code to show global loading indicator
            document.body.classList.add('loading-indicator');
            return config
          }, function (error) {
            return Promise.reject(error);
          });
          
          axios.interceptors.response.use(function (response) {
            // UPDATE: Add this code to hide global loading indicator
            document.body.classList.remove('loading-indicator');
            return response;
          }, function (error) {
            document.body.classList.remove('loading-indicator');
            return Promise.reject(error);
          });

        return TOKEN
    }
}

export default checkAuth