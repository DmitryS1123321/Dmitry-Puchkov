// Открыть мобильное меню
function MobMenuOpen(){
	document.getElementById("mob_menu").style.display = 'block';
	return false;
}
// Закрыть мобильное меню
function MobMenuClose(){
	document.getElementById("mob_menu").style.display = 'none';
	return false;
}

// Слайдер
var slaider = new Array();
function slaiderNext(id){
	// Инициализация, начальное значение
	if (!slaider[id]) slaider[id] = 1;

	// Скрываем активный слайд
	document.getElementById("slaider"+id).children[ slaider[id]+2 ].style.display = 'none';

	// Убираем активную точку
	var z = document.getElementById("slaider"+id).children[2];
	if (z.getElementsByClassName("active").length>0) {
		z.getElementsByClassName("active")[0].classList.remove("active");
	}

	slaider[id]++;  // Увеличиваем значение

	// Всего слайдов
	var all = document.getElementById("slaider"+id).children.length - 3;

	// Если следующего нет, то начинаем с начала
	if (slaider[id] > all) slaider[id] = 1;

	// Показываем слайд
	document.getElementById("slaider"+id).children[ slaider[id]+2 ].style.display = 'block';

	// Обозначим активную точку
	z.children[ slaider[id]-1 ].classList.add("active");

	// Покажем кнопку НАЗАД
	document.getElementById("slaider"+id).children[1].style.display = 'block';
}
function slaiderBack(id){

	// Скрываем активный слайд
	document.getElementById("slaider"+id).children[ slaider[id]+2 ].style.display = 'none';

	// Убираем активную точку
	var z = document.getElementById("slaider"+id).children[2];
	if (z.getElementsByClassName("active").length>0) {
		z.getElementsByClassName("active")[0].classList.remove("active");
	}

	slaider[id]--;  // Уменьшаем значение

	// Всего слайдов
	var all = document.getElementById("slaider"+id).children.length - 3;

	// Если предыдущего нет, то начинаем с конца
	if (slaider[id] < 1) slaider[id] = all;

	// Показываем слайд
	document.getElementById("slaider"+id).children[ slaider[id]+2 ].style.display = 'block';

	// Обозначим активную точку
	z.children[ slaider[id]-1 ].classList.add("active");
}

var slaiderX = 0;
function handleStart(id){
	event.preventDefault();
	slaiderX = event.clientX;
}
function handleEnd(id){
	slaiderX = slaiderX - event.clientX;
	if (slaiderX>30) {
		slaiderNext(id);
	} else if (slaiderX<-30) {
		slaiderBack(id);
	}
}
