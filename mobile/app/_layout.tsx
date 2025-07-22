import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import "../global.css";

function RootLayoutNav() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inTabsGroup = segments[0] === '(tabs)';
    const inAuthGroup = segments[0] === '(auth)';

    if (isSignedIn && !inTabsGroup) {
      // Utente autenticato -> vai alle tabs (home)
      router.replace('/(tabs)');
    } else if (!isSignedIn && !inAuthGroup) {
      // Utente non autenticato -> vai al login
      router.replace('/(auth)');
    }
  }, [isSignedIn, segments, isLoaded, router]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <RootLayoutNav />
    </ClerkProvider>
  );
}