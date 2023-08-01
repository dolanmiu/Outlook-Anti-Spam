export const retryPromise = async <T>(
  promise: () => Promise<T>,
  retries: number,
  delay: number,
): Promise<T> => {
  try {
    return await promise();
  } catch (err) {
    if (retries === 0) {
      throw err;
    }

    await new Promise((resolve) => setTimeout(resolve, delay));

    return retryPromise(promise, retries - 1, delay);
  }
};
