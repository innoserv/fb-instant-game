// var images = ['sprite1', 'sprite2', ...];
// for (var i = 0; i < images.length; i++) {
//   var assetName = images[i];
//   var progress = ((i + 1) / images.length) * 100;
//   game.load.image(assetName);

//   // Informs the SDK of loading progress
//   FBInstant.setLoadingProgress(progress);
// }

// Once all assets are loaded, tells the SDK
// to end loading view and start the game
window.onload = function () {
  FBInstant.initializeAsync().then(function () {
    // Start loading game assets here
    console.log("Loading...");
  });

  // Once startGameAsync() resolves it also means the loading view has
  // been removed and the user can see the game viewport

  FBInstant.startGameAsync().then(function () {
    // Retrieving context and player information can only be done
    // once startGameAsync() resolves
    console.log("uuuuuuuuuu")
    var contextId = FBInstant.context.getID();
    var contextType = FBInstant.context.getType();

    var playerName = FBInstant.player.getName();
    var playerPic = FBInstant.player.getPhoto();
    var playerId = FBInstant.player.getID();

    console.log("contextId", contextId);
    console.log("contextType", contextType);
    console.log("playerId", playerId);

    window.gameData = {
      contextId: contextId,
      contextType: contextType,
      playerName: playerName,
      playerPic: playerPic,
      playerId: playerId
    };
    // Once startGameAsync() resolves it also means the loading view has
    // been removed and the user can see the game viewport

    game.start();
  });
};
