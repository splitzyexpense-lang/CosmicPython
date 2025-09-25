import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
};

// Firebase will be initialized when proper environment variables are provided
let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export const initializeFirebase = () => {
  if (!firebaseConfig.apiKey) {
    console.warn("Firebase configuration missing. Real-time features will be disabled.");
    return null;
  }

  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    
    console.log("Firebase initialized successfully");
    return { app, db };
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    return null;
  }
};

// Initialize Firebase immediately
initializeFirebase();

export { app, db };
