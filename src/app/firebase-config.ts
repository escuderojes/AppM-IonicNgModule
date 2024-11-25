
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../environments/environment'; // Importa la configuración de Firebase

// Inicializa Firebase con la configuración desde el archivo environment.ts
const firebaseConfig = environment.firebaseConfig;
const app = initializeApp(firebaseConfig);

// Exporta los servicios de Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
