// IDADE DO PET
export const calculateAge = (birthday: string): any => {
  const birthDate = new Date(birthday);

  if (isNaN(birthDate.getTime())) {
    // Verifique se a data de nascimento é válida
    return null;
  }

  const today = new Date();
  const birthYear = birthDate.getFullYear();
  const currenteYear = today.getFullYear();

  let age = currenteYear - birthYear;

  // Verificar se o aniversário deste ano já ocorreu ou não
  const birthMonth = birthDate.getMonth();
  const currenteMonth = today.getMonth();
  const birthDay = birthDate.getDate();
  const currenteDay = today.getDate();

  if (
    currenteMonth < birthMonth ||
    (currenteMonth === birthMonth && currenteDay < birthDay)
  ) {
    age--;
  }
  return age;
};
