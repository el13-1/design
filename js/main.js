/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switcheModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switcheModal );

  });

  closeBtn.addEventListener('click', switcheModal);
});
*/

$(document).ready(function() {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  }); 
  
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 20);
  bullets.css('left', prev.width() + 20);

  new WOW().init();

  //валидация форм
  $(".modal__form").validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userFone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('успех, ура' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }, 
    messages: {
      userName: {
        required: "Имя обязательно для заполнения",
        minlength: "Имя не короче 2 букв"
      },
      userFone: "Телефон обязателен для заполнения",
      userEmail: {
        required: "email обязательно для заполнения",
        email: "Введите ваш почтовый адрес в формате: name@domain.com"
      }
    }
  });

  //валидация форм
  $(".footer__form").validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userFone: "required"
      // compound rule
      
    }, 
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('успех, ура' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }, 
    messages: {
      userName: {
        required: "Имя обязательно для заполнения",
        minlength: "Имя не короче 2 букв"
      },
      userFone: "Телефон обязателен для заполнения",
      userEmail: {
        required: "email обязательно для заполнения",
        email: "Введите ваш почтовый адрес в формате: name@domain.com"
      }
    }
  });

  //валидация форм
  $(".control__form").validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userFone: "required"
      // compound rule

    }, 
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('успех, ура' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }, 
    messages: {
      userName: {
        required: "Имя обязательно для заполнения",
        minlength: "Имя не короче 2 букв"
      },
      userFone: "Телефон обязателен для заполнения",
      userEmail: {
        required: "email обязательно для заполнения",
        email: "Введите ваш почтовый адрес в формате: name@domain.com"
      }
    }
   
  });
  
  //маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});

  

});

    