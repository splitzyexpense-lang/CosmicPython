import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = '0x556cAAa810377c85c88A941f58Bf69E3A38C4219';
const RPC_URL = 'https://polygon-amoy.g.alchemy.com/v2/w0MZZesWSdzLRs_VJIfPO';

// Minimal ABI containing only the totalSupply function
const CONTRACT_ABI = [
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
  }
];

interface ContractStats {
  totalMined: string;
  isLoading: boolean;
  error: string | null;
}

export function useContractStats(): ContractStats {
  const [totalMined, setTotalMined] = useState<string>('0');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContractData = useCallback(async () => {
    try {
      setError(null);
      
      // Create provider and contract instance
      const provider = new ethers.JsonRpcProvider(RPC_URL);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
      
      // Fetch total supply and decimals
      const [totalSupplyRaw, decimals] = await Promise.all([
        contract.totalSupply(),
        contract.decimals()
      ]);
      
      // Format the total supply (convert from wei to human readable)
      const totalSupplyFormatted = ethers.formatUnits(totalSupplyRaw, decimals);
      
      // Convert to number and format nicely (e.g., 1,234,567)
      const totalSupplyNumber = parseFloat(totalSupplyFormatted);
      const formattedTotal = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0
      }).format(totalSupplyNumber);
      
      setTotalMined(formattedTotal);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching contract data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch contract data');
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch data immediately
    fetchContractData();
    
    // Set up interval to refresh every 30 seconds
    const interval = setInterval(fetchContractData, 30000);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [fetchContractData]);

  return {
    totalMined,
    isLoading,
    error
  };
}