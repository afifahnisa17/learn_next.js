import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from './firebase';

const db = getFirestore(app);

// Perbaikan: Hapus '= string' karena itu syntax yang salah untuk parameter
export async function retrieveProducts(collectionName) {
    try {
        // Sekarang getDocs sudah didefinisikan lewat import di atas
        const snapshot = await getDocs(collection(db, collectionName));
        const data = snapshot.docs.map(doc => ({
            id: doc.id, 
            ...doc.data(),
        }));
        return data;
    } catch (error) {
        console.error("Error di retrieveProducts:", error);
        throw error;
    }
}

