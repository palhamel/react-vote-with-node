module.exports = (client) => {
  return (request, response) => {
    console.log("-WE ARE THE ROBOTS-", client);

    res.json({
      message: "funkar klockrent :)",
    });
  };
};
