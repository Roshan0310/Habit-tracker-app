import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

function RouteGaurd({children}: {children: React.ReactNode}) {
    const router = useRouter();
    const isAuth = false;

    useEffect(()=>{
      if(!isAuth) {
        router.replace('/auth');
      }
    });

    return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGaurd>
     <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </RouteGaurd>
  )
}
