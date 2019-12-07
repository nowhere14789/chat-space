$(function(){


  function buildMessage(message){
    if(message.image.present?){
      var html =`<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__image">
                      ${message.img}
                    </p>
                  </div>
                </div>`
    }else {
      var html =`<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                  </div>
                </div>`
    }
    return html;
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })// console.logを用いてイベント発火しているか確認
    .done(function(message){  //引数はなんでも良い
      var html = buildMessage(message);
      console.log(message)
      $('.chat-main__message-list').append(html)
    })
    .fail(function(message){
      alert('エラー')；；
    })
  })
})
