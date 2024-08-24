// import { Navigate } from 'react-router-dom';
// import {jwtDecode} from 'jwt-decode'; 

// const isTokenExpired = (token) => {
//     if (!token) return true;
//     const decodedToken = jwtDecode(token);
//     console.log('Token expiration check:', decodedToken.exp * 1000 < Date.now());
//     return decodedToken.exp * 1000 < Date.now();
// };

// const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
//     const token = localStorage.getItem("token");
//     console.log('Token in ProtectedRoute:', token);

//     if (!token || isTokenExpired(token)) {
//         console.log('Token is invalid or expired. Redirecting to login.');
//         return <Navigate to="/login" replace />;
//     }

//     try {
//         const decodedToken = jwtDecode(token);
//         console.log('Decoded token in ProtectedRoute:', decodedToken);

//         if (!allowedRoles.includes(decodedToken.role)) {
//             console.log('User role not allowed. Redirecting.');
//             return <Navigate to="/login" replace />;
//         }

//         return <Component {...rest} />;
//     } catch (error) {
//         console.error("Token decoding error:", error);
//         return <Navigate to="/login" replace />;
//     }
// };

// export default ProtectedRoute;
