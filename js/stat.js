'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_WIDTH = 50;
var GAP_Y = 30;
var BAR_HEIGHT = -150;
var BAR_WIDTH = 40;
var WIN_TEXT_FIRST_STRING = 'Ура вы победили!';
var WIN_TEXT_SECOND_STRING = 'Список результатов:';
var WIN_FONT = 'bold 16px PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var setNameColor = function (name) {
  return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(230, ' + Math.floor(Math.random() * 101) + '%, 50%)';
};

var renderStats = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var createStatsText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = WIN_FONT;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  createStatsText(ctx, WIN_TEXT_FIRST_STRING, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  createStatsText(ctx, WIN_TEXT_SECOND_STRING, CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

  var maxTime = getMaxElement(times);


  for (var i = 0; i < players.length; i++) {
    createStatsText(ctx, (Math.floor(times[i])), CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i, (CLOUD_HEIGHT - GAP_Y - 2 * CLOUD_Y) + (BAR_HEIGHT * times[i] / maxTime));
    createStatsText(ctx, players[i], CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - 0.5 * GAP_Y);
    renderStats(ctx, CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP_Y - CLOUD_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime, setNameColor(players[i]));
  }
};
