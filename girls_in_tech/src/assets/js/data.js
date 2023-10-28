export const searchName = (data, cursos) =>
  data.filter((item => item.nome.toUpperCase().includes(cursos.toUpperCase())));
