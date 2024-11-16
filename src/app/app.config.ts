import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideFirebaseApp(() =>
      // replace it with your keys.
      initializeApp({
        apiKey: "AIzaSyCGY5ILLTlu8BDUNOIUswCLIX19_kMJXew",
        authDomain: "ng-task-18-54ff4.firebaseapp.com",
        projectId: "ng-task-18-54ff4",
        storageBucket: "ng-task-18-54ff4.firebasestorage.app",
        messagingSenderId: "440413905077",
        appId: "1:440413905077:web:66d2995597df7b920f1efc"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ng-task-18-54ff4","appId":"1:440413905077:web:66d2995597df7b920f1efc","storageBucket":"ng-task-18-54ff4.firebasestorage.app","apiKey":"AIzaSyCGY5ILLTlu8BDUNOIUswCLIX19_kMJXew","authDomain":"ng-task-18-54ff4.firebaseapp.com","messagingSenderId":"440413905077"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
};
