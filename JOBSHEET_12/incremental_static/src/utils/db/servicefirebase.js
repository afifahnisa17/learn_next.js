import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import app from './firebase';

const db = getFirestore(app);

export async function retrieveProducts(collectionName) {
    try {
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

export async function retrieveDataByID(collectionName, id) {
    const snapshot = await getDoc(doc(db, collectionName, id)); // <-- hanya ini yang berubah
    const data = snapshot.data();
    return data;
}