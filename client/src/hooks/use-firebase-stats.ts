import { useState, useEffect, useCallback } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

interface FirebaseStats {
  totalMiners: number;
  lastUpdated?: string;
}

export function useFirebaseStats() {
  const [stats, setStats] = useState<FirebaseStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    if (!db) {
      setError('Firebase not initialized');
      setIsLoading(false);
      return;
    }

    try {
      setError(null);
      
      // Try to get the stats document from Firestore
      // Assuming the document is stored at collection: 'stats', document: 'miners'
      const statsDoc = await getDoc(doc(db, 'stats', 'miners'));
      
      if (statsDoc.exists()) {
        const data = statsDoc.data();
        setStats({
          totalMiners: data.totalMiners || 0,
          lastUpdated: data.lastUpdated || new Date().toISOString()
        });
      } else {
        // If document doesn't exist, set default values
        setStats({
          totalMiners: 0,
          lastUpdated: new Date().toISOString()
        });
      }
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching Firebase stats:', err);
      // If permission denied, fall back to default value
      if (err instanceof Error && err.message.includes('permission-denied')) {
        setStats({
          totalMiners: 0,
          lastUpdated: new Date().toISOString()
        });
        setError('Firebase access not configured');
      } else {
        setError(err instanceof Error ? err.message : 'Failed to fetch stats from Firebase');
      }
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!db) {
      console.log('🔥 Firebase not initialized');
      setError('Firebase not initialized');
      setIsLoading(false);
      return;
    }

    console.log('🔥 Setting up Firebase listener for stats/miners...');

    // Set up real-time listener for the stats document
    const unsubscribe = onSnapshot(
      doc(db, 'stats', 'miners'),
      (doc) => {
        console.log('🔥 Firebase document snapshot received');
        if (doc.exists()) {
          const data = doc.data();
          console.log('🔥 Document exists with data:', data);
          setStats({
            totalMiners: data.totalMiners || 0,
            lastUpdated: data.lastUpdated || new Date().toISOString()
          });
        } else {
          console.log('🔥 Document does not exist - using default values');
          setStats({
            totalMiners: 0,
            lastUpdated: new Date().toISOString()
          });
        }
        setIsLoading(false);
        setError(null);
      },
      (err) => {
        console.error('🔥 Error listening to Firebase stats:', err);
        // If permission denied, fall back to default value
        if (err.code === 'permission-denied') {
          console.log('🔥 Permission denied - using fallback values');
          setStats({
            totalMiners: 0,
            lastUpdated: new Date().toISOString()
          });
          setError('Firebase access not configured - using default values');
        } else {
          console.log('🔥 Other Firebase error:', err.message);
          setError(err.message);
        }
        setIsLoading(false);
      }
    );

    // Clean up the listener when component unmounts
    return () => unsubscribe();
  }, []);

  return { stats, isLoading, error, refetch: fetchStats };
}