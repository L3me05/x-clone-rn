// import { useState } from 'react';

// // Personalizza il hook per l'autenticazione con Google o Apple
// export const useSocialAuth = () => {
//     const [isLoading, setIsLoading] = useState(false);

//     // Funzione per gestire l'autenticazione
//     const handleSocialAuth = (strategy: "oauth_google" | "oauth_apple") => {
//         setIsLoading(true);

//         // URL di redirezione dopo il login
//         const REDIRECT_URL = window.location.origin + "/home"; // Dove vuoi che l'utente venga reindirizzato dopo il login

//         // Costruzione dell'URL di autenticazione usando Clerk
//         const authUrl = `https://clerk.dev/oauth/${strategy}?redirect_url=${encodeURIComponent(REDIRECT_URL)}`;

//         console.log(authUrl);  // Per il debug, verifica che l'URL sia corretto

//         // Reindirizza l'utente alla pagina di login del provider
//         window.location.href = authUrl;
//     };

//     return { isLoading, handleSocialAuth };
// };
