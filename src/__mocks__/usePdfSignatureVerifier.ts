export function usePdfSignatureVerifier() {
  return {
    status: "idle",
    progress: 0,
    signatures: [],
    result: null,
    error: null,
    verify: async () => {},
    reset: () => {},
  };
}
