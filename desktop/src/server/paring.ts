let currentPairCode = "";

/**
 * Generate Random 6-Digit Pair Code
 */



export const generatePairCode = (): string => {
  currentPairCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  return currentPairCode;
}


/**
 * Get Current Pair Code
 */

export const getPairCode = (): string => {
  return currentPairCode;

};

/**
 * Verify Pair Code
 */
export const verifyPairCode = (code: string): boolean => {

    return code === currentPairCode;


};