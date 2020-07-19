module.exports = (client) => {

  return (request, response) => {
    console.log('-------------------------WE ARE THE ROBOTS------------------------------', client)

      response.json({
        message: 'funkar klockrent :) '
      })
  }
}




