import { galleryItems } from './gallery-items.js';
// Change code below this line

const allGallery = document.querySelector(".gallery");
const itemMarkup = createNewCardGallery(galleryItems);

function createNewCardGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
        </a>
        </div>`;
    })
    .join("");
}
allGallery.insertAdjacentHTML("beforeend", itemMarkup);

// =====================================================================
// Modal Window (Открытие модального окна по клику на элементе галереи.)
allGallery.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  const activePicture = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
       <img src="${activePicture}" width="800" height="600">
	`,

    {
      onShow: () => {
        window.addEventListener("keydown", closeOnClickEscapeBtn);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeOnClickEscapeBtn);
      },
    }
  );
  instance.show();

  // ==========================================================================
  // Добавь закрытие модального окна по нажатию клавиши Escape.

  function closeOnClickEscapeBtn(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}







// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.Используй CDN сервис jsdelivr и 
// добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием.Используй готовую разметку
// модального окна с изображением из примеров библиотеки basicLightbox.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе < img >,
// и указываться в href ссылки.Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}

// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по
// умолчанию пользователь будет перенаправлен на другую страницу.Запрети это поведение
// по умолчанию.

// Закрытие с клавиатуры
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной
// практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape.Сделай так, чтобы
// прослушивание клавиатуры было только пока открыто модальное окно.У библиотеки 
// basicLightbox есть метод для программного закрытия модального окна.