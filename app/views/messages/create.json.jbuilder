json.content @message.content
json.user @message.user.nickname
json.date @message.created_at.strftime('%Y/%m/%d')
json.img @message.image
