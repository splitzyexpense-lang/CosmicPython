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
      setError('Firebase not initialized');
      setIsLoading(false);
      return;
    }

    // Set up real-time listener for the stats document
    const unsubscribe = onSnapshot(
      doc(db, 'stats', 'miners'),
      (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setStats({
            totalMiners: data.totalMiners || 0,
            lastUpdated: data.lastUpdated || new Date().toISOString()
          });
        } else {
          setStats({
            totalMiners: 0,
            lastUpdated: new Date().toISOString()
          });
        }
        setIsLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Error listening to Firebase stats:', err);
        // If permission denied, fall back to default value
        if (err.code === 'permission-denied') {
          setStats({
            totalMiners: 0,
            lastUpdated: new Date().toISOString()
          });
          setError('Firebase access not configured - using default values');
        } else {
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