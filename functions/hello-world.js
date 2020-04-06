
exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi there you',
      event: event
    })
  }
  callback(null, response)
}
