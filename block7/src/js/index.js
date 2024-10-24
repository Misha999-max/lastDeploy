import '../scss/style.scss'
// import Swiper JS
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
console.log('Works!')

const btnOpen = document.querySelector('.repair__btn-open'),
  hiddenContent = document.querySelector('.repair-lists'),
  hiddenTechnics = document.querySelector('.diferent-technics-lists'),
  btnTechnics = document.querySelector('.diferent-technics__btn'),
  btnOpenCallBack = document.querySelector(
    '.services-top-info-order-on__call-back'
  ),
  btnOpenGetCall = document.querySelector(
    '.services-top-info-order-on__get-call'
  ),
  btnCloseCallBack = document.querySelector('.pupup__btn-close'),
  pupupContainer = document.querySelector('.pupup'),
  formCallBack = document.querySelector('.pupup-call-back'),
  formGetCall = document.querySelector('.pupup-get-call__hidden'),
  mobileBTNCallBack = document.querySelector(
    '.menu-right-search__btn-call-back'
  ),
  mobileBTNGetCall = document.querySelector('.menu-right-search__btn-get-call'),
  mobileBtnAsaidMenu = document.querySelector('.menu-left__btn'),
  asaidMobileMenu = document.querySelector('.asaid-wrrap'),
  closeBtnAsaidMenu = document.querySelector('.asaid-top-left__button'),
  slider = document.querySelectorAll('.tablet-slider'),
  sliderItemBrands = document.querySelectorAll('.repair-lists__item'),
  sliderItemTechnics = document.querySelectorAll(
    '.diferent-technics-lists__item'
  ),
  sliderItemPriceTable = document.querySelectorAll(
    '.price-services-table-descript'
  ),
  slidePriceLists = document.querySelector('.price-services-table'),
  btnInfoOpen = document.querySelector('.services__description-text__btn'),
  discriptiontext = document.querySelector('.services__description-text-item2')

btnInfoOpen.addEventListener('click', () => {
  btnInfoOpen.classList.toggle('services__description-text__btn-close')
  if (btnInfoOpen.classList.value === 'services__description-text__btn') {
    btnInfoOpen.textContent = 'Скрыть'
    discriptiontext.classList.add('services__description-text-item2-show')
  } else {
    btnInfoOpen.textContent = 'Читать далее'
    discriptiontext.classList.remove('services__description-text-item2-show')
  }
})

btnOpen.addEventListener('click', () => {
  btnOpen.classList.toggle('repair__btn-close')
  console.log(btnOpen.classList.value)
  if (btnOpen.classList.value === 'repair__btn-open') {
    btnOpen.textContent = 'Показать все'
    hiddenContent.classList.add('repair__lists-hidden')
  } else {
    btnOpen.textContent = 'Скрыть'
    hiddenContent.classList.remove('repair__lists-hidden')
  }
})

btnTechnics.addEventListener('click', () => {
  btnTechnics.classList.toggle('diferent-technics__btn-close')
  if (btnTechnics.classList.value === 'diferent-technics__btn') {
    btnTechnics.textContent = 'Показать все'
    hiddenTechnics.classList.add('diferent-technics-lists__hidden')
  } else {
    btnTechnics.textContent = 'Скрыть'
    hiddenTechnics.classList.remove('diferent-technics-lists__hidden')
  }
})

btnOpenCallBack.addEventListener('click', () => {
  document.body.style.overflow = 'hidden'
  pupupContainer.classList.remove('pupup-hidden')
  formCallBack.classList.remove('pupup-call-back__hidden')
})

btnOpenGetCall.addEventListener('click', () => {
  pupupContainer.classList.remove('pupup-hidden')
  formGetCall.classList.remove('pupup-get-call__hidden')
  document.body.style.overflow = 'hidden'
})

mobileBTNCallBack.addEventListener('click', () => {
  document.body.style.overflow = 'hidden'
  pupupContainer.classList.remove('pupup-hidden')
  formCallBack.classList.remove('pupup-call-back__hidden')
})

mobileBTNGetCall.addEventListener('click', () => {
  pupupContainer.classList.remove('pupup-hidden')
  formGetCall.classList.remove('pupup-get-call__hidden')
  document.body.style.overflow = ''
})

mobileBtnAsaidMenu.addEventListener('click', () => {
  asaidMobileMenu.classList.add('asaid-hidden-mobile-menu')
  document.body.style.overflow = 'hidden'
})
closeBtnAsaidMenu.addEventListener('click', () => {
  asaidMobileMenu.classList.remove('asaid-hidden-mobile-menu')
  document.body.style.overflow = ''
})

btnCloseCallBack.addEventListener('click', () => {
  pupupContainer.classList.add('pupup-hidden')
  formCallBack.classList.add('pupup-call-back__hidden')
  formGetCall.classList.add('pupup-get-call__hidden')
  document.body.style.overflow = ''
})

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth < 760) {
    hiddenContent.classList.remove('repair__lists-hidden')
    hiddenTechnics.classList.remove('diferent-technics-lists__hidden')
    slider.forEach((item) => item.classList.add('swiper'))
    sliderItemBrands.forEach((item) => item.classList.add('swiper-slide'))
    sliderItemTechnics.forEach((item) => item.classList.add('swiper-slide'))
    slidePriceLists.classList.add('swiper-wrapper')
    sliderItemPriceTable.forEach((item) => item.classList.add('swiper-slide'))
    // ---------------- SLIDER --------------------
    Swiper.use([Navigation, Pagination])

    const swiper = new Swiper('.swiper', {
      cssWidthAndHeight: true,
      slidesPerView: 2,
      visibilityFullFit: true,
      autoResize: false,
      loop: true,
      spaceBetween: 10,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        500: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    })
  }

  if (document.documentElement.clientWidth > 760) {
    // hiddenContent.classList.add('repair__lists-hidden')
    // hiddenTechnics.classList.add('diferent-technics-lists__hidden')
    slider.forEach((item) => item.classList.remove('swiper'))
    sliderItemBrands.forEach((item) => {
      item.classList.remove('swiper-slide')
      item.removeAttribute('style')
    })

    sliderItemTechnics.forEach((item) => {
      item.classList.remove('swiper-slide')
      item.removeAttribute('style')
    })
    slidePriceLists.classList.remove('swiper-wrapper')
    sliderItemPriceTable.forEach((item) => {
      item.classList.remove('swiper-slide')
      item.removeAttribute('style')
    })
  }
})

