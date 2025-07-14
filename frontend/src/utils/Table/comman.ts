export const customSubString = (data: string) => {
  if (data?.length > 8) {
    return data.slice(0, 4) + '...' + data.slice(-4);
  }
};
