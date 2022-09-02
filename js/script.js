/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const reclameElement = document.querySelectorAll('.promo__adv img');
const promoBgElement = document.querySelector('.promo__bg');
const genreElement = promoBgElement.querySelector('.promo__genre');
const moviesList = document.querySelector('.promo__interactive-list');
const moviesElement = moviesList.querySelectorAll('.promo__interactive-item');
const formElement = document.querySelector('form.add');
const viewedElement = formElement.querySelector('.adding__input');
const checkboxElement = formElement.querySelector('[type="checkbox"]');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};




const newElement = (tag, className) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element;
}

formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let newMovie = viewedElement.value.toUpperCase().substr(0, 21);
    const favoriteMovie = checkboxElement.checked;

    if (newMovie) {
        if (newMovie.length == 21) {
            newMovie += '...';
        } 

        if (favoriteMovie) {
            console.log('Сделать любимым');
        }    

        movieDB.movies.push(newMovie);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, moviesList);
    }

    evt.target.reset();
})

const deleteReclame = (arr) => {
    arr.forEach(item => {
        item.remove();
    })
}

const makeChanges = (genre, bg) => {
    genre.textContent = 'ДРАМА';
    bg.style.background = "url('../img/bg.jpg') top/cover";
}

const sortArr = (arr) => {
    arr.sort();
}

const createMovieList = (movies, parent) => {
    parent.innerHTML = '';
    sortArr(movies);

    for (let i = 0; i < movies.length; i++) {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${movies[i]}
            <div class="delete"></div>
        </li>
        `;
    }

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            return createMovieList(movies, parent);
        })
    })
}

deleteReclame(reclameElement);
makeChanges(genreElement, promoBgElement);
createMovieList(movieDB.movies, moviesList);
