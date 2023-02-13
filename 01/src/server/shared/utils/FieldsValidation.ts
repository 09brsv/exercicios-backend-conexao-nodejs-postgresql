export const validation = (value: {}): void | {} => {
  const requiredField: Record<string,string> = {};

  Object.entries(value).forEach(([key,value]) => {
    if (!value) requiredField[key] = `O campo ${key} é obrigatório`
  });

  if (Object.entries(requiredField)[0]) return requiredField
};
