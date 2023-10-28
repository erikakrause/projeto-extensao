import { searchName } from './data.js';
import data from '/src/data/courses/list-courses.js';

const courses = data.cursos;

function showCourses(data) {
  document.getElementById('cards-list').innerHTML = data
    .map(
      (item) => `
  <section class='card-courses'>
    <div class='card'>
      <div class='icon'>
        <img class='imgLogo' src='${item.image}' alt='logo instituicao' />
      </div>
      <p class='nameInstitution'><strong>${item.nome}</strong></p>
      <div class='text-description>
        <span class='description'>${item.descricao}</span><br>
      </div>
      <div>
        <button class='btn-acessar'><a href='${item.site}' target='_blank'></a>Acessar</button>
      </div>
    </div>
  </section>
`
    )
    .join('');
}

showCourses(data.cursos);

//seletor
const nome = document.querySelector('.searchCourse');
//buscar nome instituicao
nome.addEventListener('keyup', () => {
  const typedName = document.querySelector('#searchCourse').value;
  const selectedCourse = searchName(courses, typedName);
  showCourses(selectedCourse);
});
