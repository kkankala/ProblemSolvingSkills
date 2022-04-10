export const printOutput = (
  message: string,
  ...optionalParams: any[]
): void => {
  console.log(message, ...optionalParams);
};
