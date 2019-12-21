json.content @message.content
json.user @message.user.name
json.date @message.created_at.strftime('%Y/%m/%d %H:%M')
json.img @message.image
