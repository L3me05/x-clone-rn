import { SignIn, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginPage() {
  const { isSignedIn } = useAuth(); // Ottieni lo stato di autenticazione
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      // Se l'utente è già autenticato, reindirizzalo alla home
      console.log("sei gia autenticato")
      navigate("/");
    }
  }, [isSignedIn, navigate]); // Esegui questa logica ogni volta che lo stato di autenticazione cambia

  if (isSignedIn) {
    return null; // Non renderizzare nulla se l'utente è già loggato
  }

  return <SignIn />; // Renderizza il componente di login se l'utente non è autenticato
}
