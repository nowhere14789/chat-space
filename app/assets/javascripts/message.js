$(function(){


  function buildMessage(message){
    if(message.text || message.img.url){
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
                  <div class="lower-message">
                    <img class="lower-message__image" src="${message.img.url}" alt="x"></img>
                  </div>
                </div>`
    }else {
      if(message.img.url){
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
      }else{
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
    })
    .done(function(message){  //引数はなんでも良い
      var html = buildMessage(message);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('.new_message')[0].reset();
      $('.btn').attr('disabled',false);
    })
    .fail(function(message){
      alert('メッセージ送信に失敗しました');
    })
  })
})
