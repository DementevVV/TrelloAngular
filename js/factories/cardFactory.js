angular.module('trello').factory('cardFactory', function() {
  var service = {};
  var cards = [
  {
    id: 1,
    description: 'Task 1',
    list_id: 1
  },
  {
    id: 2,
    description: 'Task 2',
    list_id: 2
  },
  {
    id: 3,
    description: 'Task 3',
    list_id: 3
  },
  {
    id: 4,
    description: 'Task 4',
    list_id: 1
  },
  ];

  service.getCards = function(list) {
    return _.filter(cards, { list_id: list.id });
  };

  service.createCard = function(list, cardDescription) {
    cards.push({
      id: _.uniqueId('card_'),
      description: cardDescription,
      list_id: list.id
    });
  };

  service.deleteCard = function(card) {
    return _.pull(cards, card);
  };

  service.updateCard = function(updatingCard) {
    var card =  _.findWhere(cards, { id: updatingCard.id });
    card.description = updatingCard.description;
    card.list_id = updatingCard.list_id;
  };

  return service;
});