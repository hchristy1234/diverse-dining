var submit = $('.submitsearch')
var container = $('.restaurantOptions')

submit.on("click", findRestaurant)
container.css('display', 'none')

function findRestaurant() {
  $("#outercontainer").html("")
  var plano = $('.planobox').is(":checked")
  var sf = $('.sfbox').is(":checked")
  var gluten = $('.glutenbox').is(":checked")
  var veg = $('.vegetarianbox').is(":checked")
  var nut = $('.nutbox').is(":checked")
  var egg = $('.eggbox').is(":checked")
  var allium = $('.alliumbox').is(":checked")
  var vegan = $('.veganbox').is(":checked")

  var classArray = [];
    if (plano) {
      classArray.push('plano')
    }
    if (sf) {
      classArray.push('sf')
    }
    if (gluten) {
      classArray.push('gluten')
    }
    if (veg) {
      classArray.push('veg')
    }
    if (nut) {
      classArray.push('nut')
    }
    if (egg) {
      classArray.push('egg')
    }
    if (vegan) {
      classArray.push('vegan')
    }
    if (allium) {
      classArray.push('allium')
    }
    

    var stringLooking = "";
    var stringLookingDot = ""
    var arrLength = classArray.length;
    for (var i = 0; i < arrLength; i++) {
      if (i === 0) {
        stringLooking = stringLooking.concat(classArray[i]);
      }
      else {
        stringLooking = stringLooking.concat(' ', classArray[i]);
      }
    }
    // for (var i = 0; i < arrLength; i++) {
    //   stringLookingDot = '.'.concat(classArray[i], stringLookingDot)
    // }
    // stringLookingDot = '\''.concat(stringLookingDot, '\'')
    // $("#outercontainer").append(stringLookingDot);
  $("#restaurants").children().each(function () {
    var element = $(this).prop('outerHTML');
    var elementwhole = $(this);
    var classList = elementwhole.attr("class").split(/\s+/);
    var containAll = true;
    for (var k = 0; k < classArray.length; k++) {
      containAll = classList.includes(classArray[k])
      if (containAll === false) {
        break;
      }
    }
    if (containAll === true) {
      $("#outercontainer").append(element);
    }
    // for (var j = 0; j < classList.length; j++) {
    //   $("#outercontainer").append(classList[j]);
    //   $("#outercontainer").append('hi');
    // }
    // if (elementwhole.hasClass(stringLooking)) {
    // if (elementwhole.is(stringLookingDot)) {
      // $("#outercontainer").append(element);
    // }
    });
  event.preventDefault();
}
